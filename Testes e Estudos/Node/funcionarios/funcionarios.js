const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response => {
    funcionarios = response.data
    funcionario_filtrado = funcionarios.filter(f => f.pais=="China" && f.genero=='F').sort((a,b)=>a.salario-b.salario)
    func_escolhido = funcionario_filtrado[0]
    console.log(func_escolhido)
})