var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/My_Todos',{ useNewUrlParser: true },(error,client)=>{

    if(error){
        return console.log('Unable to connect Mongodb Server')
    }
    console.log('Connected to Mongodb Server')

    var db = client.db();

    db.collection('Todos').find().toArray()
    .then((docs)=>{
        console.log('Todos')
        console.log(JSON.stringify(docs,undefined,2))
    },(error)=>{
        console.log(`Unable to fetch data ${error}`)
    })


    //client.close();
})