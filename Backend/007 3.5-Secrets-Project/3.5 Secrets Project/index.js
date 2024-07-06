//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import {fileURLToPath} from "url";
import bodyParser  from "body-parser";
const app =express();
const port =3000;

var password="";

app.use(bodyParser.urlencoded({extended:true}));

function pass(req,res,next){
    console.log(req.body);
    password =req.body["password"];

    next();
}
app.use(pass);

const _dirname =dirname(fileURLToPath(import.meta.url));


app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/public/index.html")
})

app.post("/check",(req,res)=>{
    if(password==="ILoveProgramming"){
        res.sendFile(_dirname+"/public/secret.html");
    }
    else{
        res.sendFile(_dirname+"/public/index.html");
    }
})

app.listen(port,()=>{

    console.log(`Listening on the port ${port}`);
})