function func(str, obj) {
    return str in obj
}


// Проверка
const person = {
 city: "Moscow"
}

const student = Object.create(person)
student.ownCity = "Piter"
student.ownCollege = "Politechnical College"

console.log(func('ownCity', student));
console.log(func('owlCity', student));
