import express from "express"; //导入express框架，用于创建web服务器

//create express app
const app = express();//用express创建一个web应用的实例

app.get("/", (req,res) => {
    res.send("hello from server");
})

export default app;