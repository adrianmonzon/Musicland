const mongoose = require('mongoose');
const User = require('../models/User.model');

const dbtitle = 'musicAppDB';
mongoose.connect(`mongodb://localhost/${dbtitle}`), { useUnifiedTopology: true, useNewUrlParser: true }

User.collection.drop()


const users = [
    {
        name: 'Carlos',
        description: 'Busco gente con quien formar un grupo para mejorar y dar conciertos',
        instrument: 'Trompeta',
        age: 30,
        username: 'carlos24',
        password: 'popino',
        role: 'USER',
        email: 'popino@gmail.com',
        image: 'https://images.unsplash.com/photo-1496866613897-3bc4c95f9574?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        location: {
            type: 'Point',
            coordinates: [40.41837, -3.68295]
        },
    },

    {
        name: 'Juan',
        description: 'Me gustaría gente para tocar unos temas y pasar un buen rato',
        instrument: 'Saxofón',
        age: 30,
        username: 'juan14',
        password: 'popino',
        role: 'USER',
        email: 'popino@gmail.com',
        image: 'https://images.unsplash.com/photo-1471565661762-b9dfae862dbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        location: {
            type: 'Point',
            coordinates: [42.34106, -3.70184]
        },
    },

    {
        name: 'César',
        description: 'Llevo años tocando la guitarra y me gustaría formar un grupo',
        instrument: 'Guitarra española',
        age: 29,
        username: 'pepe56',
        password: 'popino',
        role: 'USER',
        email: 'popino@gmail.com',
        image: 'https://images.unsplash.com/photo-1566327949737-a9c624adb260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        location: {
            type: 'Point',
            coordinates: [39.46975, -0.37739]
        },
    },

    {
        name: 'Manu',
        description: 'Me gustaría encontrar gente con la que tocar piezas famosas de cuerda',
        instrument: 'Violín',
        age: 35,
        username: 'manu89',
        password: 'popino',
        role: 'USER',
        email: 'popino@gmail.com',
        image: 'https://images.unsplash.com/photo-1485810051991-f2b8593e6732?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=714&q=80',
        location: {
            type: 'Point',
            coordinates: [42.13615, -0.4087]
        },
    },

    {
        name: 'Richi',
        description: 'Me gusta la música, llevo 3 años tocando la trompeta y ojalá encontrar gente con quien tocar',
        instrument: 'Trompeta',
        age: 25,
        username: 'richi00',
        password: 'popino',
        role: 'USER',
        email: 'adrianfrasquet@gmail.com',
        image: 'https://images.unsplash.com/photo-1583236753515-7e06aae56395?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        location: {
            type: 'Point',
            coordinates: [40.41837, -3.68295]
        },
    },

    {
        name: 'Óscar',
        description: 'Quisiera juntarme con dos o tres miembros y dar conciertos por ahí',
        instrument: 'Batería',
        age: 27,
        username: 'oscar78',
        password: 'popino',
        role: 'USER',
        email: 'popino@gmail.com',
        image: 'https://images.unsplash.com/photo-1518499845966-9a86ddb68051?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        location: {
            type: 'Point',
            coordinates: [40.62862, -3.16185]
        },
    }
]


User
    .create(users)
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))





