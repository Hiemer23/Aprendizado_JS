const schedule = require ('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * *',function (){
    console.log("Executando Tarefa 1:",new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log("Cancelamento da Tarefa 1")
}, 20000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 14;
rule.minute = 02;

const job = schedule.scheduleJob(rule, function(){
  console.log('Today is recognized by Rebecca Black!');
});