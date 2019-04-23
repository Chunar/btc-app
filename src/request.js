const request = require('request');

_EXTERNAL_URL = 'https://api.coinbase.com/v2/';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, (arr,res,body) => {
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;