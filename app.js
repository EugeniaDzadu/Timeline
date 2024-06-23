const express = require('express')
const path = require('path');
const app = express();
app.use(express.urlencoded({extended:false}))
const frontEndRoutes = require('./routes/frontEndRoutes')

const port = process.env.Port || 2500

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', frontEndRoutes)

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const server = ()=>{
    try {
        app.listen(port ,()=>{
            console.log(`server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

server()
