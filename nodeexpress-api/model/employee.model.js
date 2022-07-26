const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let employeeSchema=new Schema({
    name:{
        type:String
    },
    position:{
        type:String
    },
    office:{
        type:String
    },
    salary:{
        type:String
    }
});

module.exports=mongoose.model('EmployeeSchema',employeeSchema)