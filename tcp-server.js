const net = require('net')

var clients = [];

const server = net.createServer((socket) => {

   socket.name = socket.remoteAddress + ":" + socket.remotePort

   // Welcome messaging
   socket.write('Welcome ' + socket.name + " !\n")

   clients = [...clients, socket.address()]



    socket.on('connection', () => {
        console.log('a new user has connected! IP: ' + socket.address() + " || " + socket.remoteAddress)
    })

    socket.on('error', () => {
        console.log('an error has occurred.')
    })

    var Broadcast = (socket, message) => {
        //for each in set of sockets, emit this message

        socket.write(message)
    }

})