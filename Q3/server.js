// Create an http server
const http = require('http')

const localhost = 'localhost'
const port = 8000

const server = http.createServer((request, response) => {
    // Return “Hello world” from the response
response.end('Hello world')
}
    )

    server.listen(port, localhost, () => {
        console.log(`Server is running on http://${localhost}:${port}`)
    }
    )
