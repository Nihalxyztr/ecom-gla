const { log } = require("console")
const app =require("./src/app")
const connect=require("./src/db/db")


const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log("Server is running on port no:",PORT);
    connect()
})