# AWS SQS Playground
A simple set of Node.js programs to send and receive messages from a queue.

## Versions
I haven't specified an engine in the `package.json` file, but all development was done using Node.js v13.3.0 and AWS SDK version 2.665.0.

## Setup
Ensure that you have installed and configured the AWS CLI on your local machine for development (i.e. ensure that there are `[default]` credentials in `~/.aws/credentials`). Create a queue in the corresponding AWS account update the URL in the script files by setting the `queueURL` constant. For running on an AWS resource (i.e EC2 instance), ensure that the resource has a role with an SQS permission policy attached. 

## Sending
To use the default settings and message, simply run `node send.js` via the command line. You can override the defaults by changing the hardcoded values in the source code.

## Receiving
To use the default settings, simply run `node receive.js` via the command line. You can override the defaults by changing the hardcoded values in the source code.