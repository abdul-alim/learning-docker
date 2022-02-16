import express from "express";
import os from "os";

const app = express();

app.get('/', (req, res) => {

    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress


    res.send({
        message: 'Webhook docker is awesome!: 4......)',
        host: os.hostname(),
        ip: ip
    });
});

startApp();


function startApp() {
    app.listen(3000, () => {console.log(`Servers running on pid ${process.pid} port 3000`);});
}
