export default function(){
    return {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "format": "email"
            },
            "message": {
                "type": "string"
            }
        },
        "required": [
            "email",
            "message"
        ]
    }
}