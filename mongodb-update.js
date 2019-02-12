const { ObjectId,MongoClient } = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/My_Todos",{ useNewUrlParser : true },(error,client)=>{
    if(error){
        return console.log('Unable to connect Mongodb Server')
    }
    console.log('Connected to Mongodb Server')

    var db = client.db();
    db.collection('Todos').findOneAndUpdate(
        {
            _id : new ObjectId("5c6306dcd582a8f2151c8883")
        },{
            $set : {
                completed :false
            },
        //  $inc : {
        //      age :1
        //  }
        }
        ,{
            returnOriginal : false
        }
    ).then((result)=>{
        console.log(result)
    })

    
})