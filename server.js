const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const wrestlers = {
    'randy savage': {
        'age': 40,
        'birthName': 'Randall Mario Poffo',
        'birthLocation': 'Columbus, Ohio'
    },
    'hulk hogan': {
        'age': 42,
        'birthName': 'Terry Bollea',
        'birthLocation': 'Agusta, Georgia'
    },
    'big sexy': {
        'age': 38,
        'birthName': 'Kevin Scott Nash',
        'birthLocation': 'Detroit, Michigan'
    },
    'not found': {
        'message': 'wrestler not found'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:wrestlerName', (request, response) => {
    const wrestlersName = request.params.wrestlerName.toLowerCase()
    if(wrestlers[wrestlersName]){
        response.json(wrestlers[wrestlersName])
    } else {
        response.json(wrestlers['not found'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})