const { ObjectId,MongoClient } = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/My_Todos",{ useNewUrlParser : true },(error,client)=>{
    if(error){
        return console.log('Unable to connect Mongodb Server')
    }
    console.log('Connected to Mongodb Server')

    var db = client.db();
    //deleteMany
    // db.collection('Todos').deleteMany({completed:true}).then((result)=>{
    //     console.log(result)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({completed:true}).then((result)=>{
    //     console.log(result)
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({_id : new ObjectId("5c62f9bac016d710c448a0ca")})
    .then((result)=>{
        console.log(result)
    })
    
})