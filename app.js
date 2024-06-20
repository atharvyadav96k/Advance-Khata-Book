const express = require('express')
const app = express();
const userSchema = require("./routes/login")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/',function(req, res){
    res.render('index')
});
app.get('/login', function(req, res){
    res.render('login')
});
app.post('/login', async function(req, res){
    try{
        const user = await userSchema.findOne({email: req.body.email});
        if(user.password == req.body.password){
            res.send("login Successful")
        }else{
            res.send("login failed")
        }
    }catch(err){
        res.send(err)
    }
});
app.get('/register', function(req, res){
    res.render('register')
});
app.post("/register", async function(req, res){
    try{
        const user = await userSchema({
            email : req.body.email,
            password: req.body.password
        })
        await user.save();
        res.redirect("/login");
    }catch(err){
        res.send(err);
    }
    
});
app.listen(3000);