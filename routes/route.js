const router = require('express').Router();
const User = require('../model/User');





router.get('/',(req,res)=>{
    res.render('index.ejs',{name: 'Kyle'});
});

router.get('/login', (req,res)=>{
    res.render('login.ejs');
});

router.get('/register',(req,res)=>{
    res.render('register.ejs')
});

router.post('/register',async (req,res)=>{
    
    //creating user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(error){
        res.status(400).send(error.message);
    }
});

module.exports = router;