import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hey there Welcome to Finley's WebPage</h1>")
});

app.get("/about",(req,res)=>{
    res.send("<p>Well I am a Student at riara university doing Computer science</p>")
});

app.get("/contact",(req,res)=>{
    res.send("<p>Email me at finley.mwachia12@gmail.com</p>")
})

app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
});