const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { exec } = require('child_process');

io.on("connection", (socket) => {
    socket.on("cmd", (cmd) => {
        console.log("Handling request : ", cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            socket.emit("cmd return",stdout);
        });
    })
    socket.on("raspi_snmp_heat", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_heat_return",stdout);
        });
    })
    socket.on("raspi_snmp_ip", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_ip_return",stdout);
        });
    })
    socket.on("raspi_snmp_cpu_charge", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_cpu_charge_return",stdout);
        });
    })
    socket.on("raspi_snmp_uptime", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_uptime_return",stdout);
        });
    })
    socket.on("raspi_snmp_int", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_int_return",stdout);
        });
    })
})
console.log("Server listening on port 3030")
http.listen(3030);