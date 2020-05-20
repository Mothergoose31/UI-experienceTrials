const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// country with a country object that contains a state with a state object that containts  a city object
// that contains  a restaurant object , that  contains all the information of the restaurant also has
// all the dishes  as a dishes object
// Future thought to consider 
//  when saving a photo to the backend would it saved as a int or long

const restaurantSchema = new Schema ({
    country: {
        country:{type:String, required:true},
        state:{
            stateName:{type:String,required:true},
            city:{
                cityName:{type:String,required:true},
                restaurant:{
                    restaurantName :{type:String,required:true},
                    adress:{type:String,required:true},
                    phoneNumber:{type:String,required:true},
                    typeOfFood:{
                        tag:{type:String,required:true}
                    },
                    dishes:{
                        dish:{type:String,required:true},
                        price:{type:Number, maxlength:2,required:true},
                        presentation:{type:Number,maxlength:2,required:true},
                        taste:{type:Number,maxlength:2,required:true},
                        originality:{type:Number,maxlength:2,required:true},
                        freshness:{type:Number,maxlength:2,required:true},
                        aroma:{type:Number,maxlength:2,required:true},
                        texture:{type:Number,maxlength:2,required:true},
                        quantity:{type:Number,maxlength:2,required:true},
                        review:{type:Number,required:false}
                    }
                }
            }
        }
    }

})