const app = require("./src/app");
const connect = require("./src/db/db");

const PORT = process.env.PORT || 3000;

connect().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port no:", PORT);
    });
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});
