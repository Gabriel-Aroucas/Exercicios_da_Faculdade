//new Date().getDay() retorna o dia da semana (0, 2,..., 6)

var num_dia = new Date().getDay();
switch(num_dia){
    case 0 : dia="Domingo"
    break;
    case 1 : dia="Segunda-feira"
    break;
    case 2 : dia="Terça-feira"
    break;
    case 3 : dia="Quarta-feira"
    break;
    case 4 : dia="Quinta-feira"
    break;
    case 5 : dia="Sexta-feira"
    break;
}
console.log("O dia da semana é:", dia);

//if (num_dia == 0){
//    dia = "Domingo";
//} else if(num_dia == 1){
//    dia = "Segunda-feira";
//} else if(num_dia == 2){
//    dia = "Terça-feira";
//} else if(num_dia == 3){
//    dia = "Quarta-feira";
//} else if(num_dia == 4){
//    dia = "Quinta-feira";
//} else if(num_dia == 5){
//    dia = "Sexta-feira";
//} else if(num_dia == 6){
//    dia = "Sábado";
//}
console.log("O dia da semana é:", dia);