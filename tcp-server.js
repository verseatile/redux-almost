const net = require('net')
const PORT = 3000

var clients = [];

const server = net.createServer((socket) => {

   //request user input to customize socket.name
   socket.name = socket.remoteAddress + ":" + socket.remotePort

   // Welcome messaging
   socket.write('Welcome ' + socket.name + " !\n")
   broadcast(`${socket.name} has joined the room`)

   clients = [...clients, socket]

   socket.destroyed ? console.log("Socked has been destroyed...was this intended?") : "socket is not destroyed..no need for this message"



    // socket.on('connect', () => {
    //     console.log('a new user has connected! IP: ' + socket.address() + " || " + socket.remoteAddress)
    // })

    socket.on('data', (data) => {
        process.stdout.write(data.toString('utf-8')) //console your own messages? maybe delete
        broadcast(`${socket.name}>: ${data}`, socket ) //when data comes into the server, send to all users
    })

    socket.on('error', () => {
        console.log('an error has occurred.')
    })

    socket.on('end', () => {
        broadcast(`{$socket.name}> has left the room`)
    })

    var broadcast = (message, sender) => {
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