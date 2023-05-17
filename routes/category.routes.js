const router=require('express').Router()

const categoryController=require('../controller/category.controller')

router.get('/show-form',categoryController.showForm)
router.post('/create-category',categoryController.addCategory)
router.get('/view-category', categoryController.viewCategory)



module.exports=router
