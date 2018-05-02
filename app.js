const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors= require('cors')


const app = express()

app.use(cors())

mongoose.connect('mongodb://TM:123456@ds123926.mlab.com:23926/graphgl-db')
mongoose.connection.once('open', () => {
    console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}))

const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log('this app is now running on port 4000')