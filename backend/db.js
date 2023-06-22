const mongoose = require('mongoose');

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://shashankkrishu99:5la0gKbzM5IPTChK@cluster0.jfkofr6.mongodb.net/",
        {
            useUnifiedTopology:true
        })


        console.log(`db connection established.... ${conn.connection.host}`)
    } catch (error) {

        console.log(error.message);
        process.exit();
        
    }
}


module.exports = connectdb