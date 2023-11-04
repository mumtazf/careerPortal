import express from 'express'



const router = express.Router()
//everything user
router.get('/user', sequelize.)
router.post('/user', sequelize.createUser)
router.patch('/user', sequelizer)
router.delete('/user',sequelize)
//everything company
router.get('/company',sequelize)
router.get('/company/constraint', sequelize)
router.post('/company', sequelize)
router.patch('/company/:id', sequelize)
router.delete('/company', sequelize)
//everything posts
router.get('/post', route_functions)
router.get('/post/constraint', route_functions)
router.post('/post', route_functions)
router.patch('/post/:id', route_functions)
router.delete('/post', route_functions)

export default router