const net = require('net')

const options = {
    port: 3000, //eventually pass this in?
    host: 'https://localhost'
}

//OR

let opts = (host, port) => {
    return {
        host: host,
        port: port
    }
}

const client = net.createConnection(opts, () => {
    //when connected
    console.log('connected to server')
    client.write('issa client testing 1-2-3')
})

client.on('data', (data) => {
    console.log(data.toString())
    client.end()
})

client.on('end', () => {
    console.log('disconnected from the server')
})

