const app = require('express')()
const rateLimit = require('express-rate-limit')
const apiRouter = require('./routes/apiRouter.js');
const Client = require('./client/Client.js')


const client = new Client({intents: 3276799})
client.setup(process.env.TOKEN)


app.get('/', function (req, res) {
  res.status(400).send({'Error': 'Sim'})
})

app.listen(3000, () => {
  console.log('{ Nexter - API } [ Status ] Online!')
})

const limiter = rateLimit({
	windowMs: 60000, 
	max: 10, 
  message: {'message': 'Rate-Limit atingido, aguarde 60 segundos'},
	standardHeaders: true, 
	legacyHeaders: false, 
})

app.use('/api', limiter)
app.use('/api', apiRouter)
