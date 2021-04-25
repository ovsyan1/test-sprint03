const validator = {
    get(target, prop) {
        return `Trying to acess the property '${prop}' ...
${target[prop]}`
    },
    set(target, prop, value) {
        console.log(`Setting value '${value}' to '${prop}'`)
        target[prop] = value
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new Error(`Uncaught TypeError: The '${prop}' is not an integer`)
            }
            if (value > 200) {
                throw new Error(`Uncaught RangeError: The '${prop}' is invalid`)
            }
        }
    }
};

let person = new Proxy({}, validator)

person.age = 100;
// Setting value '100' to 'age'
console.log(person.age)
// Trying to acess the property 'age' ...
// 100
person.gender = 'male';
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid
