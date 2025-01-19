export default function(){
    return {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "required": true,
            },
            "email": {
                "type": "email",
                "required": true,
            },
            "message": {
                "type": "string",
                "required": true,
            }
        }
    }
}