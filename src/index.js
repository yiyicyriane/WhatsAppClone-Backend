import app from './app.js';

import dotenv from "dotenv";//导入dotenv模块，用于加载和使用.env文件中的环境变量

//dotEnv config
//dotenv是一个用来加载环境变量的工具。它会读取.env文件并把其中的内容加载到process.env中。
dotenv.config();//读取项目根目录下的.env文件，并将文件中的环境变量加载到process.env中,通过读取process.env访问这些环境变量

//env variables
const PORT = process.env.PORT;//设置端口，从process.env中获取一个名为PORT的环境变量，指定服务器运行的端口号

app.listen(PORT,() => {
    console.log(`server is listening at ${PORT}...`);
});//启动服务器，使它监听PORT上的请求
