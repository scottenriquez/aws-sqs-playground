const AWS = require('aws-sdk');

// Set the region
AWS.config.update({region: 'us-east-1'});

// Create an SQS service object
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const queueURL = 'https://sqs.us-east-1.amazonaws.com/201038669559/sa-cert-training';
const params = {
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
sqs.receiveMessage(params, function(err, data) {
    if (err) {
        console.log("Receive Error", err);
    }
    else if (data.Messages) {
        console.log(data.Messages);
        const deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle
        };
        sqs.deleteMessage(deleteParams, function(err, data) {
            if (err) {
                console.log("Delete Error", err);
            } else {
                console.log("Message Deleted", data);
            }
        });
    }
});
