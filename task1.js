function func(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} - ${obj[key]}`)
        }
    }
}


// Проверка
const person = {
 city: "Moscow"
}

const student = Object.create(person)
student.ownCity = "Piter"
student.ownCollege = "Politechnical College"

for (let key in obj) {
    console.log(`${key} - ${obj[key]}`)
}
console.log('***********');
func(student)
