const path = require('path')
const express = require('express');

const citySearch = require('./utlis/citySearch');
const getWeather = require('./utlis/getWeather');

const publicDirectory = path.join(__dirname,'../public')
const app = express();
const viewsPath = path.join(__dirname, '../template')
app.set('views', viewsPath)
app.set('view engine' , 'hbs')
app.use(express.static(publicDirectory));

app.get('', (req ,res)=>{
   
    res.render('index',{
        location: 'sill'
    })
    
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
       return res.send({
            error: 'you must provide an address'
        })
    }
    citySearch(req.query.address,(error ,data)=>{
        if(data === undefined){
            return res.send({
                error: 'cannot find the location'
            })
        }
        else if(error){
            return res.send({
                error
            })
        }
        getWeather(data.Key ,(error,data)=>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                location: req.query.address,
                forecast: data[0].WeatherText,
                temperature: data[0].Temperature.Metric.Value,
            
            }
                
               
            )
    
        })
    })
    
    
    })
app.get('*', (req ,res)=>{
    res.render('404',{
       title: '404 not found'

    })
})
app.listen(3000,()=>{
    console.log("server is up and running");
});