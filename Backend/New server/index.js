import express from "express";

const app =express();
const port =3000;
app.get("/",(req,res)=>{

    res.send("<h1> hello world </h1>");

});
app.get("/contact",(req,res)=>{
    res.send("<h1> Contact </h1> <ul><li>No: 7820939853</li> <li>add :India </li><li>pin :416508 </li><li>Galli :Maruti Galli </li> </ul> ");

});
app.get("/about",(req,res)=>{
    res.send("<h1> About </h1>");

});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

});