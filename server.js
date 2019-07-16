const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { exec } = require('child_process');

io.on("connection", (socket) => {
    socket.on("cmd", (cmd) => {
        console.log("Handling request : " + cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            socket.emit("cmd return",stdout);
        });
    })
    socket.on("snmp_get_ip", (cmd) => {
        console.log("Handling request : " + cmd);
        exec("snmpwalk -v 2c -c public localhost iso.3.6.1.2.1.92.1.3.2.1.9.7.100.101.102.97.117.108.116.1.2 -Ov -Oq        ", (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            socket.emit("snmp_get_ip_return",stdout);
        });
    })
})
console.log("Server listening on port 3030")
http.listen(3030);