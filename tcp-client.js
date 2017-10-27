const net = require('net')

const options = {
    host: 'localhost',
    port: 3000 //eventually pass this in?
}

//OR

let opts = (host, port) => {
    return {
        host: host,
        port: port
    }
}

const client = net.createConnection({host: 'localhost', port: 3000}, () => {
    //when connected
    console.log('connected to server')
    //client.write('issa client testing 1-2-3') //dont write just yet
})


client.on('data', (data) => {
    console.log(data.toString())
    //client.end() // THIS METHOD CLOSES THE SOCKET. LEAVE OPEN UNLESS INTENTIONAL
})

client.on('end', () => {
    // on socket close....
    console.log('disconnected from the server')
})

