var AWS = require('aws-sdk')

module.exports = function(ssmParams,awsParams) {
    var ssm = new AWS.SSM(awsParams),
        parameters = {};

    return new Promise(function(resolve, reject) {
        var getParams = (ssmParams) => {
            ssm.getParametersByPath(ssmParams, function(err, data) {
                if (err) {
                    console.log(err, err.stack); // an error occurred
                    reject(err, err.stack)
                } else {
                    data.Parameters.forEach(function(element) {
                        var key = element.Name.replace(ssmParams.Path+'/','')
                        parameters[key] = element.Value
                    }, this);
                    
                    if(data.NextToken) {
                        ssmParams.NextToken = data.NextToken
                        getParams(ssmParams)
                    } else {
                        resolve(parameters)
                    }
                }
            });      
        }
        getParams(ssmParams)
    });
}
