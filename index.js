var HTMLParser = require('node-html-parser').parse
var axios = require('axios')
const fs = require('fs')

axios({
  url: 'http://localhost:3000/index.html',
  method: 'get'
}).then(response => {
  let html = HTMLParser(response.data)
  let els = Array.from(html.querySelectorAll(".pane-legend-item-value"))
  let dados = []
  els.map(el => dados.push(parseFloat(el.innerHTML.replace(/ /, ""))))
  fs.writeFile("./dados.txt", dados.join("\n"), (err) => {
      if(err) {
          console.log("Deu Ruim!", err)
      }
      console.log("Deu Boa!")
  }) 
})
