const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const queueURL = 'https://sqs.us-east-1.amazonaws.com/201038669559/sa-cert-training';
const parameters = {
    AttributeNames: [
        'SentTimestamp'
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
        'All'
    ],
    QueueUrl: queueURL,
    VisibilityTimeout: 30,
    WaitTimeSeconds: 0
};
sqs.receiveMessage(parameters, (error, data) => {
    if (error) {
        console.log('Receive Error', error);
    }
    else if (data.Messages) {
        console.log(data.Messages);
        const deleteParameters = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle
        };
        sqs.deleteMessage(deleteParameters, (error, data) => {
            if (error) {
                console.log('Delete Error', error);
            }
            else {
                console.log('Message Deleted', data);
            }
        });
    }
});
