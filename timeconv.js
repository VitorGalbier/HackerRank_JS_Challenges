// O desafio é criar um conversor de tempo
// sempre que for passado o horario em PM, deve retornar >12h
// será passada uma string
// estarei sempre somando 1 a partir de 12 ou somando 12 a partir de s
let horario = "12:40:03M"
//parseInt(horario.slice(0, 2)) + 12)// parseint = transforma string em int
// horario.slice(0, 2)) //extrai uma parte da string
function timeConversion(s){
    if(s.includes("AM") === true && s.includes("12") === true){
        s = s.replace("12", "00")
        s = s.slice(0, -2)
        console.log(s) 
    }
    else if(s.includes("PM") === true){ //procura pela por um pedaço em uma string, se houver true
        if(s.includes("12") === true){
            s = s.slice(0, -2)
            console.log(s)
        }
        else{
            s = (parseInt(s.slice(0, 2)) + 12)  + s.substring(2)  //o que eu fiz foi transformar apenas os 2 primeiros em int para poder somar 12
            s = s.slice(0, -2)
            console.log(s)
        }
    }
    else{
        s = s.slice(0, -2)
        console.log(s)
    }
}
timeConversion(horario)