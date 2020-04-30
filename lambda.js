exports.handler = async (event) => {
    let messageBodies = [];
    for(let index = 0; index < event.Records.length; index++) {
        const messageBody = event.Records[index].body;
        messageBodies.push(messageBody);
        processMessageBody(messageBody);
    }
    return {
        statusCode: 200,
        body: messageBodies
    };
};

const processMessageBody = (body) => console.log(body);