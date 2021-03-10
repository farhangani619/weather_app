const request = require('request')
const key = 'E2M4g3LtiALk8PpmyT2Gd5UToxKz3HPi';
const getWeather= (id , callback)=>{

    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query= `${id}?apikey=${key}`;
    const url = base + query;
    request({url : url , json:true}, (error, response) =>{
        if(error){
            console.log('Unable to Connect')

        }
        else if(response.body=== undefined){
            console.log("Unable to fetch the data");
        }
        else{
            callback( undefined , response.body);
        }
        
    })
}
module.exports = getWeather;