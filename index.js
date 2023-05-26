const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })

    );app.use(express.json());

app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')

})
var data;
app.post('/addkoshari', async (req, res) => {
    data = req.body;

  const post = await prisma.hamada.create({
  data
    })
  res.json({success : true})
//  res.json(post);
})


app.get('/result', (req, res) => {
    
  res.sendFile(__dirname +'/result.html')


})


app.listen(port, () => console.info(`A;; listening on port ${port}`))