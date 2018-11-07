const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3050

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ encoded: true }))
app.use(bodyParser.json())

require('./routes/inventoryRoutes')(app)
require('./models').sequelize.sync({force:true}).then(() => app.listen(3050, () => console.log('http://localhost:3050')))