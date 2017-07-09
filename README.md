Get parameters from the AWS SSM Parameter Store by path

# Usage
```
const ssm = require('aws-ssm-params')

var ssmParams = {
    Path: '/dev/path/to/parameters',
    WithDecryption: true
};
var awsParams = {region: 'us-east-1'};

ssm(ssmParams,awsParams).then(function(parameters){
    console.log(parameters)
},function(err){
    console.log(err)
})
```

# Options
## require('aws-ssm-params')(ssmParams, awsParams)
- `ssmParams`: Passed to the *getParametersByPath* method (http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SSM.html#getParametersByPath-property)
- `awsParams`: Passed to AWS SDK for JavaScript AWS.Config class (http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html)

# Required IAM Permissions
- `ssm:DescribeParameters`
- `ssm:GetParametersByPath`
