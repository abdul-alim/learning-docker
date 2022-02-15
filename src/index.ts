import express from "express";
import os from "os";

const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'Webhook docker is awesome!: 1)',
        host: os.hostname()
    });
});

startApp();


function startApp() {
    app.listen(3000, () => {console.log(`Servers running on pid ${process.pid} port 3000`);});
}
