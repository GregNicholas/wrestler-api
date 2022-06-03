const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const wrestlers = {
    'randy savage': {
        'birthDate': 'November 15, 1952',
        'birthName': 'Randall Mario Poffo',
        'nickName': 'Macho Man',
        'birthLocation': 'Columbus, Ohio',
        'championships': 6,
        'photo': 'https://i.pinimg.com/originals/82/b9/67/82b967d8fe4c622637576eb1ea21f9ef.jpg'
    },
    'hulk hogan': {
        'birthDate': 'August 11, 1953',
        'birthName': 'Terry Eugene Bollea',
        'nickName': 'Hollywood Hogan',
        'birthLocation': 'Agusta, Georgia',
        'championships': 12,
        'photo': 'https://www.wwe.com/f/styles/gallery_img_s/public/rd-talent/Stat/hulk_hogan_stat.png'
    },
    'scott hall': {
        'birthDate': 'October 20, 1958',
        'birthName': 'Scott Oliver Hall',
        'nickName': 'Razor Ramon',
        'birthLocation': "St. Mary's County, Maryland",
        'championships': 1,
        'photo': 'https://www.wwe.com/f/styles/gallery_img_l/public/all/2018/01/007_STARS_05161995_0002--d47ac550ce2dcba3209f1864765463d9.jpg'
    },
    'kevin nash': {
        'birthDate': 'July 9, 1959',
        'birthName': 'Kevin Scott Nash',
        'nickName': 'Big Sexy',
        'birthLocation': 'Detroit, Michigan',
        'championships': 6,
        'photo': 'https://www.wwe.com/f/styles/gallery_img_l/public/all/2018/07/001_WWE-Encyclopedia2489--cd563cbacaca3feda1a9d6e289ce0924.jpg'
    },
    'sting': {
        'birthDate': 'March 20, 1959',
        'birthName': 'Steve Borden',
        'nickName': 'Sting',
        'birthLocation': 'Omaha, Nebraska',
        'championships': 13,
        'photo': 'https://img.bleacherreport.net/img/images/photos/003/583/482/1a89da4594ad0af3959dd864ce81871a_crop_north.jpg?1458254312&w=3072&h=2048'
    },
    'unknown': {
        'birthDate': '0',
        'birthName': '',
        'nickName': '',
        'birthLocation': '',
        'championships': 0,
        'photo': ''
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(wrestlers)
})

app.get('/api/:name', (request, response) => {
    const wrestlerName = request.params.name.toLowerCase()
    if(wrestlers[wrestlerName]){
        response.json(wrestlers[wrestlerName])
    } else {
        response.json(wrestlers['unknown'])
    }
})

// app.get('/api/:wrestlerName', (request, response) => {
//     const wrestlersName = request.params.wrestlerName.toLowerCase()
//     if(wrestlers[wrestlersName]){
//         response.json(wrestlers[wrestlersName])
//     } else {
//         response.json(wrestlers['not found'])
//     }
// })

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Go catch it!`)
})