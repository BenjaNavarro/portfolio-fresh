declare interface functionProps {
    user_name: string,
    user_email: string,
    message: string,
};

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function({
    user_email, user_name, message
}: functionProps) {

    return (
        {
            user_email: {
                value: user_email,
                isValid: emailPattern.test(user_email)
            },
            user_name: {
                value: user_name,
                isValid: (user_name.length > 0)
            },
            message: {
                value: message,
                isValid: (message.length > 0)
            },
        }
        // {
        //     "type": "object",
        //     "properties": {
        //         "name": {
        //             "type": "string",
        //             "required": true,
        //         },
        //         "email": {
        //             "type": "email",
        //             "required": true,
        //         },
        //         "message": {
        //             "type": "string",
        //             "required": true,
        //         }
        //     }
        // }
    );
}