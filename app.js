const express = require("express")

const app=express();

const userModel= require("./models/user.js")
const postModel = require("./models/post.js")


app.get("/" , function(req,res){
    res.send("Kaam kar rha hai");
})


app.get("/create" , async function(req, res){

    let usercreate=await userModel.create({
        username:"sandy_7970",
    
        email:"sandeep@gmail.com",
        age:23,
       
    })
res.send(usercreate)
})

app.get("/post/create",  async function (req,res){

    let post =await postModel.create({
        postdata:"Bhai backend ka phela post hai",
        user:"6632815adfd5ac97c08751d3"
    })

    let user = await userModel.findOne({_id:"6632815adfd5ac97c08751d3"})
    user.post.push(post._id)
    await user.save()
    res.send({user, post})
})

app.listen(3000);