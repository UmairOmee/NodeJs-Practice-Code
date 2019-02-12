// // var yargs = require('yargs');
// // var weather =require('./weather/weather.js')

// // var argv = yargs.options({
// //     a:{
// //         alias:'address',
// //         describe:'Address to fetch weather.',
// //         string:true,
// //         demand:true
// //     }
// // })
// // .help()
// // .alias('help','h')
// // .argv;

// // weather.getWeather(37.8267,-122.4233,(errorMessage,weatherResults)=>{
// //     if(errorMessage){
// //         console.log(errorMessage)
// //     }
// //     else{
// //         console.log(JSON.stringify(weatherResults,undefined,2))
// //     }

// // })
// var express = require('express');
// var hbs = require('hbs');

// var app = express();

// app.set('view engine','hbs')
// app.use(express.static('./public'))

// app.get('/homw',(req,res)=>{
//     res.send({
//         name:'Umair',
//         likes:['cricket','facebook']
//     })
// })
// app.get('/about',(req,res)=>{
//     res.render('about.hbs')
// })


// app.listen(8000,()=>{
//     console.log('Server Started.')
// })

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/My_Todos',{ useNewUrlParser: true },(error,client)=>{
    if(error){
        return console.log('Unable to connect Mongodb Server')
    }
    console.log('Connected to Mongodb Server')

    var db = client.db();

    db.collection('Todos').insertOne({
        text:'Some Thing to do.',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert Todo Data')
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    })

    client.close();
})
