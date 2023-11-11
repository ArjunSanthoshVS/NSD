const mongoose = require('mongoose');

module.exports = () => {
    try {
        mongoose.connect("mongodb+srv://arjunsanthosh738:OIlLSfkUZy57ndPO@cluster0.b3vsava.mongodb.net/NSD")
        console.log("Connected Successfully...!")
    } catch (error) {
        console.log("Not Connected...!")
    }
}



// OIlLSfkUZy57ndPO