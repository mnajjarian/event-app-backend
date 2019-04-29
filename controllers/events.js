const eventsRouter = require('express').Router()
const fetch = require('node-fetch')

const baseUrl = 'https://api.hel.fi/linkedevents/v1/event/?include=location'


eventsRouter.get('/', async (req, res) => {
    const events = await fetch(baseUrl).then(response => response.json()).then(response => response)
    res.json(events)

})

eventsRouter.get('/:eventId', (req, res) => {
    const id = req.params.id
    const event = events.find(e => e.id === id)
    res.json(event)
})
module.exports = eventsRouter
