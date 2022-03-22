module.exports = date

     function date(){
         
         let hoje = new Date()
         let options = { weekday: 'long', month: 'long', day: 'numeric' };
         
         let dia = hoje.toLocaleDateString("pt-BR",options)
         return dia
        }
        
    