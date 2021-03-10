const request = require('request')
const key = 'E2M4g3LtiALk8PpmyT2Gd5UToxKz3HPi';
const citySearch = (city , callback)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const url = base+query;
    request({url : url , json:true}, (error, response) =>{
        if(error){
            console.log('Unable to Connect')

        }
        else if(response.body === undefined){
            console.log("Unable to fetch the data");
        }
        else{
            callback(undefined,response.body[0]);
        }
        
    })
}

module.exports = citySearch;