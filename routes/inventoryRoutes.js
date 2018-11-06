const db = require('../models')

module.exports = app => {
  app.get('/products', (req, res) => {
    db.products.findAll({})
      .then(r => res.json(r))
      .catch(e => console.log(e))
  })
  app.get('/products/:product_name', (req, res) => {
    db.products.findOne({ where: { name: req.params.product_name } })
      .then(r = res.json(r))
      .catch(e => console.log(e))
  })
  app.post('/products', (req, res) => {
    db.products.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/products/:product_name', (req, res) => {
    db.products.update(req.body, { where: { name: req.params.product_name } })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))

  })
  app.delete('/products/:product_name', (req, res) => {
    db.products.destroy({ where: { product_name: req.params.product_name } })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/products', (req, res) => {
    db.products.destroy({ where: {}, truncate: true })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}