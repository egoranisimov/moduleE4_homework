function newEmptyObject() {
    const obj = {}
    return obj
}

// Проверка
const object = newEmptyObject

object.a = 1
console.log(typeof object);
console.log(object);
