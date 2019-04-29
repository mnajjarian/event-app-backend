const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const eventsRouter = require('./controllers/events')

app.use(cors())
app.use(bodyParser.json())
eventsRouter.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static('build'))

app.use('/api/events', eventsRouter)

const error = (request, response) => response.status(404).send({ error: 'unknown endpoint' })

app.use(error)

const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})