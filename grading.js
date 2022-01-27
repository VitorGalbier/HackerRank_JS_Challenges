let students = [73, 67, 38, 33];
function gradingStudents(grades) {
    console.log(grades)
    let novasNotas = grades.map(function(nota){
        if(nota>37){
            if(nota%5 >= 3){
                switch(nota%5){
                    case 3:
                        return nota + 2
                    case 4:
                        return nota + 1
                } 
            }
            else{
                return nota
            }
        }
        else{
            return nota
        }
    })
    console.log(novasNotas)
}

gradingStudents(students)