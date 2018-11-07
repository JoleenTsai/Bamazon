const db = require('../models')

module.exports = app => {
  app.get('/products', (req, res) => {
    db.products.findAll({})
      .then(r => res.json(r))
      .catch(e => console.log(e))
  })
  app.get('/products/:id', (req, res) => {
    db.products.findOne({ where: { id: req.params.id } })
      .then(r = res.json(r))
      .catch(e => console.log(e))
  })
  app.post('/products', (req, res) => {
    db.products.findOrCreate(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/products/:id', (req, res) => {
    db.products.update(req.body, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))

  })
  app.delete('/products/:id', (req, res) => {
    db.products.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/products', (req, res) => {
    db.products.destroy({ where: {}, truncate: true })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}