import express from "express";


const app =express();
const port =3000;



app.get("/",(req,res)=>{
    var new_day =new Date();
    let DayOfWeek =new_day.getDay();
    res.render("index.ejs",{dayOfWeek : DayOfWeek});

});


app.listen(port,()=>{
    console.log(`listening on port ${port}`);

});