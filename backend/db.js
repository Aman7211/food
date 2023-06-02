const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Aman7211:Aman9821@cluster0.sdtbi1b.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoDB = async() =>{
    await mongoose.connect(mongoURI,{ useNewUrlParser : true }, async(err,result)=>{
       if(err) console.log("----",err)
       else{
        console.log("connected successfully");

        // for reading the database
        const fetched_data = await mongoose.connection.db.collection("food_detail");
        fetched_data.find({}).toArray(async function ( err,data){
            const foodcategory = await mongoose.connection.db.collection("food_category");
            foodcategory.find({}).toArray(function (err,catdata){
            if(err){
            console.log(err);}
            else{
                global.food_items = data;
               global.foodcategory= catdata;
            }
        })
       })
    } })
}
module.exports = mongoDB;


