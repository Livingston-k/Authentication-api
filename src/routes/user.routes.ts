import express from 'express'
const router = express.Router()

router.post('api/user',(req,res)=>{
res.sendStatus(200)
})

export default router