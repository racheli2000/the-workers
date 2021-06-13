
const router= require('express').Router();
const user= require('../controllers/user');

router.post('/checkPremission', user.checkPremission);

router.get('/getAllEmployed', user.getAllEmployed);

router.get('/getEmployeById/:id', user.getEmployeById);

router.post('/setNewEmploye', user.setNewEmploye);

router.post('/uptadeEmploye/:id', user.uptadeEmploye);

module.exports= router;
