const http = require('http');
const PORT = 5000
http.createServer((req,res) => {
    res.write("Server is running on port 5000");
    res.end();
})