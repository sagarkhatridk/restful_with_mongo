const express = require('express')
const app = express()
const port  = process.env.PORT || 3000
const StudentRouter = require('./routers/router_students')

app.use(express.json())
app.use(StudentRouter)
require('./db/conn')



app.listen(port, ()=>{
    console.log(`connection Done on http://localhost:${port}`)
})