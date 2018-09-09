const superagent = require('superagent')

async function demo() {
    const response = await superagent.get('http://github.com')
    console.log(response.text)
}

demo()