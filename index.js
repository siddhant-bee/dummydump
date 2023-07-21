const express = require("express")
const router = require("./logics/routs")
const app = express()
const cors = require("cors")
PORT=3000
const pool = require("./db")


 


app.use(cors());
app.use(express.json());
//try 1

app.use("/api/v1/student",router)
 // try 2

app.post('/entry',async (req,res)=>{
try {
    const {name ,email , age} = req.body
    
    const pp = await pool.query(`INSERT INTO info (name ,email , age)VALUES(  '${name}',  '${email}', ${age});`,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("inserstin was succesfull")
        }
    })
} catch (err) {
    console.error(err.message)
    
}
    // res.send("sb sahi chal rha h bhai")
})


app.listen(PORT,console.log(`SERVER IS LISTENING AT PORT ${PORT} . . .`))