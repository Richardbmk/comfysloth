# Instructions of how to deploy the lambda functions to AWS

The official docs with step by step can be found [here](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html)

## Create Lambda Function with AWS CLI

```
$ aws iam create-role --role-name storeApp-stripe-role --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'

$ aws iam attach-role-policy --role-name storeApp-stripe-role --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

$ cd .. && zip -r function.zip lambda-function

$ aws lambda create-function --function-name storeApp-stripe --zip-file fileb://function.zip --handler index.handler --runtime nodejs18.x --role arn:aws:iam::xxxxxxxxxxxx:role/storeApp-stripe-role
```

## Add ENVIRONMENT Variables in the console

1. Open the AWS Management Console in your web browser.

2. Navigate to the AWS Lambda service. You can do this by typing "Lambda" into the search bar at the top of the console and selecting "Lambda" from the dropdown menu.

3. In the Lambda service dashboard, you'll see a list of your Lambda functions. Click on the name of the function you want to configure.

4. On the function configuration page, scroll down to the "Environment variables" section and click on the "Edit" button.

5. In the "Environment variables" dialog, click on "Add environment variable".

6. In the "Key" field, enter `STRIPE_SECRET_KEY`. In the "Value" field, enter your actual Stripe secret key.

7. Click on the "Save" button to save your changes.

Delete everything except de zip file to avoid npm conflicts with the node modules.
