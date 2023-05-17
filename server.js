const express = require('express')
require('dotenv').config()
const app = express()
const path = require('path')
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, 'public')))
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.set('view engine', 'ejs')
app.set('views', 'views')

const categoryRoutes = require('./routes/category.routes')
app.use(categoryRoutes)
const productRoutes=require('./routes/product.routes')
app.use(productRoutes)

mongoose.set('strictQuery', false)
const dbDriver =
  'mongodb+srv://trisharati:vE9tAJ40v0HkfNxX@cluster0.kkmvasl.mongodb.net/Aggregate'

const port = process.env.PORT || 2000

mongoose
  .connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log('DB is connected')
      console.log(`server is running at @ http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.log('DB is not Connected')
  })
