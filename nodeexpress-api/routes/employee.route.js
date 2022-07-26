const express=require('express');
const app=express();
const employeeExpressRoute=express.Router();
let EmployeeSchema=require('../model/employee.model');

employeeExpressRoute.route('/').get((req,res)=>{
    EmployeeSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    });
});

employeeExpressRoute.route('/employee/:id').get((req,res)=>{
    EmployeeSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

employeeExpressRoute.route('/add-employee').post((req,res)=>{
    EmployeeSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

employeeExpressRoute.route('/del-employee/:id').delete((req,res)=>{
    EmployeeSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})

employeeExpressRoute.route('/update-employee/:id').put((req,res)=>{
    EmployeeSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data);
            console.log('Deleted Successfully')
        }
    })
})


module.exports=employeeExpressRoute;