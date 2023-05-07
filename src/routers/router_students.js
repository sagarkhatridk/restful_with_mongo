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

router.get('/', async (req, res) => {
    res.send({
        "Greetings": "welcome to the https://www.sagarkhatri.cloud",
        "fields": {
            "name": {
                "type": String,
                "required": true,
                "min character": 3
            },
            "email": {
                "type": String,
                "required": true,
                "unique": true,
                "validaation": true
            },
            "phone": {
                "type": Number,
                "required": true,
                "unique": true,
                "min length": 10,
                "max length": 10
            },
            "address": {
                "type": String,
                "required": true,
                "unique": false,
                "validaation": false
            }
        },
        "method": {
            "post": "add your detials with post method",
            "get": "Get your informatiom with get method  https://www.sagarkhatri.cloud/students/id",
            "delete": "Delete your informatiom with delete method  https://www.sagarkhatri.cloud/students/id",
            "patch": "Update your informatiom with patch method  https://www.sagarkhatri.cloud/students/id",
            "get": "get all the recods of students https://www.sagarkhatri.cloud/students",
        },
        "configuration": {
            "language": "javascript",
            "env": "node",
            "framwork": "express",
            "hosting": "hostinger.com",
        }
    })
})



router.get('/students', async(req, res)=>{

    try{
        let page = Number(req.query.page) || 1
        let limit = Number(req.query.limit) || 3
    
        let skip  = (page - 1) * limit
        const studentsData = await Student.find({}).skip(skip).limit(limit)
        
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
