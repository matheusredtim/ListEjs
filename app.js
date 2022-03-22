const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const res = require('express/lib/response')
const Dates = require(__dirname+'/DateTime.js')



const app = express()
let items = 
['Frango',
'Carne',
'pure de batata']
let workIten = []

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'ejs');



app.get('/',(req,res)=>{
  dia = Dates()

    res.render('list',{diaSemana:dia,newItem:items})
})

app.post('/',(req,res)=>{
    console.log(req.body)
    let item  = req.body.iten
    if(req.body.list === 'Work'){
        workIten.push(item)
        res.redirect('/work')
    }else{
        items.push(item)
        res.redirect('/')

    }
    

  
})
app.get('/work',(req,res)=>{
    res.render('list',{diaSemana:'Work List', newItem:workIten})
})
app.post('/work' , (req,res)=>{
  
    // let item = req.body.iten
   
    res.redirect('/work')
})
app.get('/about',(req,res)=>{
    res.render('about')
})


app.listen(8080,()=>{
    console.log('serve rodando na porta 8080')
})