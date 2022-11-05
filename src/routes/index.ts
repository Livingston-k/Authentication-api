import express from 'express'
const router = express.Router()
import user from './user.routes'
import auth from './auth.routes'
router.use(user)
router.use(auth)
router.get('/health',(_,res)=>{
res.sendStatus(200)
})

export default router