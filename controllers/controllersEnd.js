const home = (req , res)=>{
    res.sendFile('index')
}

module.exports = {
    home
}