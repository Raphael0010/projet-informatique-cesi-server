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
    socket.on("raspi_snmp_disk_total", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_disk_total_return",stdout);
        });
    })
    socket.on("raspi_snmp_disk_free", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_disk_free_return",stdout);
        });
    })
    socket.on("raspi_snmp_memory_total", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_memory_total_return",stdout);
        });
    })
    socket.on("raspi_snmp_memory_free", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_memory_free_return",stdout);
        });
    })
    socket.on("raspi_snmp_memory_free", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("raspi_snmp_memory_free_return",stdout);
        });
    })
    socket.on("switch_snmp_liste_interface", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("switch_snmp_liste_interface_return",stdout);
        });
    })
    socket.on("switch_snmp_liste_interface_connectee", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("switch_snmp_liste_interface_connectee_return",stdout);
        });
    })
    socket.on("switch_snmp_ventilo", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("switch_snmp_ventilo_return",stdout);
        });
    })
    socket.on("switch_snmp_debit_entrant", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("switch_snmp_debit_entrant_return",stdout);
        });
    })
    socket.on("switch_snmp_debit_sortant", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("switch_snmp_debit_sortant_return",stdout);
        });
    })
    socket.on("switch_snmp_name", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("switch_snmp_name_return",stdout);
        });
    })
    socket.on("switch_snmp_ip", (cmd) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Handling request : ", cmd , " => " + stdout);
            socket.emit("switch_snmp_ip_return",stdout);
        });
    })
    socket.on("switch_config_change_name", (cmd) => {
        console.log("Handling request : ", cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Finish : ", cmd);
        });
    })
    socket.on("switch_config_createVlan", (cmd) => {
        console.log("Handling request : ", cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Finish : ", cmd);
        });
    })
    socket.on("switch_config_turnOn", (cmd) => {
        console.log("Handling request : ", cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Finish : ", cmd);
        });
    })
    socket.on("switch_config_turnOff", (cmd) => {
        console.log("Handling request : ", cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Finish : ", cmd);
        });
    })
    socket.on("switch_config_deleteVlan", (cmd) => {
        console.log("Handling request : ", cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            console.log("Finish : ", cmd);
        });
    })
})
console.log("Server listening on port 3030")
http.listen(3030);