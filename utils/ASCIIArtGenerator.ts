interface Dict<T> {
  [key: string]: T;
}

export enum ColorPalette {
  Monochrome = 'none',
  Grey2Bit = 'grey2bit',
  Grey4Bit = 'grey4bit',
  Grey8Bit = 'grey8bit',
  Color3Bit = 'color3bit',
  Color4Bit = 'color4bit',
  ColorFull = 'color',
}

type AsciiSettings = {
  charSet: string;
  url: string;
  charSamples: number;
  size: number;
  contrast: number;
  brightness: number;
  alpha: number;
  colorPalette: ColorPalette;
};

export class AsciiArtGenerator {
  private settings: AsciiSettings = {
    charSet: ' .:-=+*#%@',
    url: '',
    charSamples: 1,
    size: 80,
    contrast: 0,
    brightness: 0,
    alpha: 0,
    colorPalette: ColorPalette.Grey8Bit,
  };

  private charRegions: Dict<number[]> = {};
  private colorMap: number[][] = [];
  private valueMap: number[][] = [];
  private normalizedMap: number[][] = [];
  private width: number = 0;
  private height: number = 0;
  private cachedUrls: Dict<HTMLImageElement> = {};
  private asciiElement: HTMLElement;
  private colorPalettes: Dict<number[][]> = {};
  private isDestroyed = false;

  constructor(asciiElement: HTMLElement, settingsPatch?: Partial<AsciiSettings>) {
    this.asciiElement = asciiElement;
    this.settings = { ...this.settings, ...(settingsPatch ?? {}) };

    this.generatePalettes();
    this.analyzeCharRegions();
    this.loadFromUrl();
  }

  private generatePalettes() {
    this.colorPalettes[ColorPalette.Grey2Bit] = [
      [0, 0, 0],
      [104, 104, 104],
      [184, 184, 184],
      [255, 255, 255],
    ];

    this.colorPalettes[ColorPalette.Grey4Bit] = [];
    for (let i = 0; i < 16; i += 1) {
      this.colorPalettes[ColorPalette.Grey4Bit].push([i * 17, i * 17, i * 17]);
    }

    this.colorPalettes[ColorPalette.Grey8Bit] = [];
    for (let i = 0; i < 256; i += 1) {
      this.colorPalettes[ColorPalette.Grey8Bit].push([i, i, i]);
    }
    
    this.colorPalettes[ColorPalette.Color3Bit] = [
      [0, 0, 0],
      [0, 249, 45],
      [0, 252, 254],
      [255, 48, 21],
      [255, 62, 253],
      [254, 253, 52],
      [16, 37, 251],
      [255, 255, 255],
    ];
    
    this.colorPalettes[ColorPalette.Color4Bit] = [...this.colorPalettes[ColorPalette.Color3Bit]];
    for (let i = 1; i < 8; i += 1) {
      this.colorPalettes[ColorPalette.Color4Bit].push([i * 32, i * 32, i * 32]);
    }
  }

  private analyzeChar(char: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 12;
    canvas.height = 12;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw 'context creation failed';
    ctx.font = '12px monospace';
    ctx.fillText(char, 2, 10);
    const data = ctx.getImageData(0, 0, 12, 12).data;
    const values: number[] = [];
    const size = 12 / this.settings.charSamples;
    for (let cellY = 0; cellY < this.settings.charSamples; cellY += 1) {
      for (let cellX = 0; cellX < this.settings.charSamples; cellX += 1) {
        let value = 0;
        for (let posY = 0; posY < size; posY += 1) {
          for (let posX = 0; posX < size; posX += 1) {
            value += data[(cellX * size + posX + (cellY * size + posY) * 12) * 4 + 3];
          }
        }
        values.push(value / (size * size) / 255);
      }
    }
    this.charRegions[char] = values;
  }

  private normalizeCharRegions() {
    let min = 1;
    let max = 0;
    for (const char in this.charRegions) {
      for (const region of this.charRegions[char]) {
        if (min > region) min = region;
        if (max < region) max = region;
      }
    }
    if (max > 0 && min != max) {
      const diff = max - min;
      for (const char in this.charRegions) {
        const regions = this.charRegions[char];
        for (let index = 0; index < regions.length; index += 1) {
          regions[index] = (regions[index] - min) * (1 / diff);
        }
      }
    }
  }

  private analyzeCharRegions() {
    this.charRegions = {};
    for (const char of this.settings.charSet) {
      this.analyzeChar(char);
    }
    this.normalizeCharRegions();
  }

  private loadFromUrl() {
    if (this.isDestroyed) return;
    
    if (!this.settings.url) return;
    
    if (this.cachedUrls[this.settings.url]) {
      this.onImageLoaded(this.cachedUrls[this.settings.url]);
    } else {
      const img = document.createElement('img');
      img.crossOrigin = 'Anonymous';
      img.src = this.settings.url;
      img.addEventListener('load', () => {
        if (this.isDestroyed) return;
        this.cachedUrls[this.settings.url] = img;
        this.onImageLoaded(img);
      });
    }
  }

  private onImageLoaded(img: HTMLImageElement) {
    if (this.isDestroyed) return;
    
    this.width = this.settings.size;
    this.height = ~~((img.height / img.width) * this.width / 1.9);
    const canvas = document.createElement('canvas');
    canvas.width = this.width * this.settings.charSamples;
    canvas.height = this.height * this.settings.charSamples;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw 'context creation failed';
    ctx.drawImage(img, 0, 0, this.width * this.settings.charSamples, this.height * this.settings.charSamples);
    
    // Set CSS variables for grid layout
    this.asciiElement.style.setProperty('--width', this.width.toString());
    this.asciiElement.style.setProperty('--height', this.height.toString());
    
    this.generateValueMap(ctx);
  }

  private generateValueMap(ctx: CanvasRenderingContext2D) {
    this.valueMap = [];
    this.colorMap = [];
    const data = Array.from(ctx.getImageData(0, 0, this.width * this.settings.charSamples, this.height * this.settings.charSamples).data);
    const rowLength = this.width * this.settings.charSamples * 4;
    
    for (let cellY = 0; cellY < this.height; cellY += 1) {
      for (let cellX = 0; cellX < this.width; cellX += 1) {
        const cell = [];
        const pos = (cellX * this.settings.charSamples) * 4 + (cellY * this.settings.charSamples) * rowLength;
        this.colorMap.push(data.slice(pos, pos + 4));
        for (let posY = 0; posY < this.settings.charSamples; posY += 1) {
          for (let posX = 0; posX < this.settings.charSamples; posX += 1) {
            const pos = (cellX * this.settings.charSamples + posX) * 4 + (cellY * this.settings.charSamples + posY) * rowLength;
            const alpha = data[pos + 3] / 255;
            const values = data.slice(pos, pos + 3);
            const value = 1 - ((values[0] + values[1] + values[2]) / 765 * (alpha) + 1 - alpha);
            cell.push(value);
          }
        }
        this.valueMap.push(cell);
      }
    }
    this.normalizeValueMap();
    this.generate();
  }

  private normalizeValueMap() {
    let min = 1;
    let max = 0;
    for (const regions of this.valueMap) {
      for (const region of regions) {
        if (min > region) min = region;
        if (max < region) max = region;
      }
    }
    if (max > 0 && min != max) {
      const diff = max - min;
      this.normalizedMap = [];
      for (const regions of this.valueMap) {
        const normals = Array.from(regions);
        for (let index = 0; index < normals.length; index += 1) {
          normals[index] = (normals[index] - min) * (1 / diff);
          normals[index] = (this.settings.contrast + 1) * (normals[index] - 0.5) + 0.5 + this.settings.brightness;
        }
        this.normalizedMap.push(normals);
      }
    } else {
      this.normalizedMap = this.valueMap;
    }
  }

  private getClosestChar(values: number[]) {
    let minDiff = Number.MAX_VALUE;
    let minChar = '';
    for (const char in this.charRegions) {
      const regions = this.charRegions[char];
      let diff = 0;
      for (let index = 0; index < regions.length; index++) {
        diff += Math.abs(regions[index] - values[index]);
      }
      if (diff < minDiff) {
        minDiff = diff;
        minChar = char;
      }
    }
    return minChar;
  }

  private clearElement(element: HTMLElement) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  private arrayToRgba(color: number[]) {
    const r = color[3] > 0 ? ~~color[0] : 255;
    const g = color[3] > 0 ? ~~color[1] : 255;
    const b = color[3] > 0 ? ~~color[2] : 255;
    const a = Math.max(0, Math.min(1, color[3] / 255 + this.settings.alpha));
    return `rgba(${r},${g},${b},${a})`;
  }

  private getCharColor(color: number[]) {
    if (this.settings.colorPalette === ColorPalette.ColorFull) {
      return this.arrayToRgba(color);
    } else {
      let closestColor = [0, 0, 0];
      let minDiff = Number.MAX_VALUE;
      for (const paletteColor of this.colorPalettes[this.settings.colorPalette]) {
        const diff = Math.abs(color[0] - paletteColor[0]) + Math.abs(color[1] - paletteColor[1]) + Math.abs(color[2] - paletteColor[2]);
        if (diff < minDiff) {
          minDiff = diff;
          closestColor = paletteColor;
        }
      }
      return this.arrayToRgba([...closestColor, color[3]]);
    }
  }

  private generate() {
    if (this.isDestroyed) return;
    
    this.clearElement(this.asciiElement);
    for (let cellY = 0; cellY < this.height; cellY += 1) {
      for (let cellX = 0; cellX < this.width; cellX += 1) {
        const cell = document.createElement('span');
        if (this.settings.colorPalette !== ColorPalette.Monochrome) {
          cell.style.color = this.getCharColor(this.colorMap[cellX + cellY * this.width]);
        }
        const char = this.getClosestChar(this.normalizedMap[cellX + cellY * this.width]);
        cell.textContent = char === ' ' ? '\u00A0' : char;
        this.asciiElement.appendChild(cell);
      }
    }
  }

  destroy() {
    this.isDestroyed = true;
    this.clearElement(this.asciiElement);
  }
}
