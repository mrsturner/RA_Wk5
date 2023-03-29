// Import your http
const http = require("http")


// Create server with http
const server = http.createServer((req, res) => {
    console.log('server is created')
})



// Initial to Port

const PORT = 8800;


// Listen to server

server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))