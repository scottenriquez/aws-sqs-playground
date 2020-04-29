const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const parameters = {
    DelaySeconds: 10,
    MessageAttributes: {
        'CustomAttribute': {
            DataType: 'Number',
            StringValue: '69'
        }
    },
    MessageBody: 'This is a sample message body',
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/201038669559/sa-cert-training'
};
sqs.sendMessage(parameters, (error, data) => {
    if (error) {
        console.log('Error', error);
    }
    else {
        console.log('Success', data.MessageId);
    }
});