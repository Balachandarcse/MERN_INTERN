const express=require('express')
const path=require('path')
const mdb=require("mongoose")
const dotenv=require("dotenv")
const Signup=require("./models/signupSchema")
const bcrypt=require("bcrypt")
const cors=require("cors")
const jwt=require("jsonwebtoken")

const app=express()

dotenv.config();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json())
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send("hi\n fellows");
})
app.get('/newPath',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

const verifyToken=(req,res,next)=>{
    var token=req.heders.authorization
    if(!token){
        res.status(401).send("request denied")
    }
    try{
        const user = jwt.verify(token,process.env.SECRET_KEY);
        req.user=user;
    }catch(err){
        res.status(400).send("token error")
    }
    next()
}
app.get('/json',verifyToken,(req,res)=>{
    res.json({message:"this is middleware check",user:req.user});
})

app.post("/signup", async(req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    var hashedPassword=await bcrypt.hash(password,10);
    try{
        const newCustomer=new Signup({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:hashedPassword
    });
    newCustomer.save();
    res.status(201).send("yooo!");
    console.log("value recived")
}catch(e){
    res.status(401).send("yooo!")
    console.log("unSuccessful")

}
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Signup.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" ,isvalid:false});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        const payload={email:user.email}
        const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1hr"});
        console.log(token);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" ,isvalid:false});
        }
        
        res.status(201).json({ message: "Login successful", user,isvalid:true ,token:token});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/update",async(req,res)=>{
    const user=await Signup.findOneAndUpdate({firstname:"luffy"},{$set:{firstname:"Monkey D Luffy"}});
    res.json("record updated");
    user.save();
});
app.listen(3001,()=>{
    console.log("server is started");
    
})

