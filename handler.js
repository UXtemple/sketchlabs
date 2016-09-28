const fetch = require('node-fetch')

function submit(jobId, data) {
  fetch(`https://loxo.co/api/365/jobs/${jobId}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `Basic `
    }
  }).then(console.log.bind(console)).catch(console.error.bind(console))
}

module.exports = (req, res, next) => {
  if (req.url === '/submit') {
    let data = "";
    req.on('data', function(chunk){ data += chunk})
    req.on('end', function(){
      req.rawBody = data;
      req.jsonBody = JSON.parse(data);

      console.log('data', data)

      submit(req.jsonBody.jobId, {
        name: req.jsonBody.name,
        website: req.jsonBody.website,
        phone: `cv:${req.jsonBody.cv};web:${req.jsonBody.website}`
      })

      res.end()
    })
  } else {
    next()
  }
}
