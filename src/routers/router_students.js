const express = require('express')
const Student = require('../models/students')
const router = new express.Router()


router.post('/students', async(req, res)=>{

    try{
    const user = new Student(req.body)
    const createUser = await user.save()
    res.status(201).send(createUser)
    }
    catch(error){
        res.status(400).send(error)
    }
})



router.get('/students', async(req, res)=>{

    try{
    
        const studentsData = await Student.find()
        
        res.status(200).send({"results":studentsData})
    }
    catch(error){
        res.status(400).send(error)
    }
})



router.get('/students/:id', async(req, res)=>{

    try{
        const _id = req.params.id;

        const StudentData = await Student.findById({"_id":_id});
        console.log(StudentData)

        if(!StudentData)
        {
            res.status(404).send();
        }
        res.status(200).send(StudentData);
    }
    catch(error){
        res.status(400).send(error);
    }
})



router.delete('/students/:id', async(req, res)=>{

    try{
        const _id = req.params.id

        const DeleteStudentData = await Student.findByIdAndDelete(_id)

        if(!_id)
        {
            return res.status(400).send()
        }
       res.status(200).send({'Deleted User':DeleteStudentData})
    }
    catch(error){
        res.status(500).send(error)
    }
})


router.patch('/students/:id', async(req, res)=>{

    try{
        const _id = req.params.id
        const updateStudentData = await Student.findByIdAndUpdate(_id, req.body,{
            new : true 
        });

        if(!_id){
            return res.send(400).send()
        }
        res.send(updateStudentData)

    }
    catch(error){
        res.status(400).send(error)
    }
})

module.exports = router