require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middleware/notFond')
const errorMiddleware = require('./middleware/error')
const authRoute = require('./routes/auth-routes')
const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)

//notFound
app.use( notFound )

//error
app.use(errorMiddleware)


let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Post :', port))