const passo1 = (ctx, next) => {
    ctx.valor = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}
const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}
const abc = {}
exec(abc, passo1,passo2,passo3)
console.log(abc)
delete abc.valor
delete abc.valor2
delete abc.valor3
exec(abc, passo1,passo3)
console.log(abc)