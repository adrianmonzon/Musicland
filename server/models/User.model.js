const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        default: 'Músico', 
        require: true
    },
    description: String,

    instrument: {
        type: String,
        enum: ['Guitarra eléctrica', 'Guitarra española', 'Batería', 'Bajo', 'Piano', 'Voz', 'Trompeta', 'Acordeón', 'Saxofón', 'Trombón', 'Tuba', 'Gaita', 'Violín', 'Clarinete', 'Violonchelo', 'Contrabajo', 'Fagot', 'Ukelele']    
    },

    age: {
        type: Number,
        min: 16 
    },

    image: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
    },    
    username: {
        type: String,
        default: 'Usuario', 
        require: true
    },
    password: String,
    role: {
        type: String,
        enum: ['ADMIN', 'USER', 'GUEST'],
        default: 'GUEST'
    },
    email: String,
    location: {                 
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
