const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<head><title>My Document</title></head>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/create-user' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log("All chunks", message)
        })
    }
    if(url === '/users'){
        res.setHeader("Content-Type", "text/html")
        res.write('<html>')
        res.write('<head><title>My Document</title></head>')
        res.write('<body><ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
}

module.exports = requestHandler