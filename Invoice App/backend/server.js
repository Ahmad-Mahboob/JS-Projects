const http = require('http');
const port = 3000
let data = {name: "Ahmad"}

let app = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.setHeader("Content-Type" , "text/plain")
        res.write('Hello World')
        res.end()
    }
    if(req.url == '/dashboard'){
        res.setHeader("Content-Type" , "text/plain")
        res.write('Hello Dashboard')
        res.end()
    }
    if(req.url == '/sign-up'){
        res.setHeader("Content-Type" , "text/plain")
        res.write('Hello Sign Up')
        res.end()
    }
    if(req.url == '/log-in'){
        res.setHeader("Content-Type" , "text/plain")
        res.write('Hello Login')
        res.end()
    }
    if(req.url == '/api/user' && req.method == "POST"){
        res.setHeader("Content-Type" , "text/plain")
        res.write(JSON.stringify(data))
        res.end()
    }
})



app.listen(port, ()=>{
    console.log(`Server is running at: http://localhost:${port}`)
})