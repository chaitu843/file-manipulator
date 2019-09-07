let express = require('express'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    PORT = 3000;

app.use(express.urlencoded());

app.post('/create', (req, res) => {
    let data = `Component Name passed is ${req.body.componentName1}`;
    if(!fs.existsSync('output')) fs.mkdirSync('output')
    fs.writeFileSync('./output/config.xml', data);
    res.sendFile(path.join(__dirname, 'success.html'));
})

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`listening to ${PORT}`))