const porta =3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extend:true}))

app.get('/produtos',(requ,res,next)=>{
    res.send({nome: 'Notebook',preco: 123.45})//Convertido para JSON
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta,()=>{
    console.log("Servidor está executando na porta "+porta)
})
