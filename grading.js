let students = [73, 67, 38, 33];
function gradingStudents(grades) {
    for(var nota of grades){
        if(nota%5 < 3 && nota > 35){
            console.log("pegou")
        //     switch(nota%5){
        //         case 2:
        //             console.log(nota + 2)
        //             break;
        //         case 1:
        //             console.log(nota + 1)
        //             break;
        //     } 
        }
        // else{
        //     return nota
        // }
    }
}

gradingStudents(students)