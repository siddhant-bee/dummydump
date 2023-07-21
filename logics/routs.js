const express = require("express")
const router =express.Router();
const pool = require("../db")
const cors = require("cors")

router.use(cors())
router.use(express.json())


router.get("/",(req,res)=>{
   try {
    pool.query(`SELECT * FROM info`,(err,result)=>{
        if(!err)
        {
            res.send(result.rows)
        }
        else{
            console.log(err)
        }
    })
   } catch (err) {
    console.error(err.message)
   }
})

module.exports = router