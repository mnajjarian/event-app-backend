const eventsRouter = require('express').Router()
const fetch = require('node-fetch')

let baseUrl = 'https://api.hel.fi/linkedevents/v1/event/?include=location'


eventsRouter.get('/', async (req, res) => {
    const events = await fetch(baseUrl).then(response => response.json()).then(response => response)
    res.json(events)
    baseUrl = events.meta.next

})

module.exports = eventsRouter
