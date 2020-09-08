var glob = require("glob")
var fs = require("fs")
var path = require("path")

glob('../**/*.mp3', {}, function (err, files) {
    var reponame = path.resolve(__dirname,'..').split('/').pop()
    var dd = 'laonayt/' + reponame + '@master'

    let result = [];
    files.forEach(item => {
        console.log(item)
        let arr = item.split('/')
        result.push({
            name: arr[2],
            artist: "专辑-" + arr[1],
            url: 'https://cdn.jsdelivr.net/gh/' + dd + item.slice(2),
            cover: 'https://cdn.jsdelivr.net/gh/' + dd + '/cover.png',
        })
    })
    var mm = path.resolve(__dirname,'..') + '/list.js'
    fs.writeFileSync(mm, "var xuwei = " + JSON.stringify(result))
})