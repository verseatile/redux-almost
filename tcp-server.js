const net = require('net')
const PORT = 3000

var clients = [];

const server = net.createServer((socket) => {

   socket.name = socket.remoteAddress + ":" + socket.remotePort

   // Welcome messaging
   socket.write('Welcome ' + socket.name + " !\n")

   clients = [...clients, socket.address()]



    socket.on('connect', () => {
        console.log('a new user has connected! IP: ' + socket.address() + " || " + socket.remoteAddress)
    })

    socket.on('error', () => {
        console.log('an error has occurred.')
    })

    var Broadcast = (message, sender) => {
        //for each in set of sockets, emit this message
        clients.map((client) => {
            if (client !== sender) { //dont send to sender
                client.write(message)
            }
        })
        process.stdout.write(message) // log to server output
    }

}).listen(PORT, () => console.log(`[  Listening on ${PORT}  ]`))

server.on('connection', () => {
    console.log('a new user has connected!')
})