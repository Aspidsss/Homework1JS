let input = prompt("Введите значение:")
let number = +input
if (isNaN (number)) {
    console.log("Упс,кажется,вы ошиблись")
} else if (typeof number === "number") {
        if (number % 2 === 0) {
            console.log("четное число")
        } else
            console.log("нечетное число")
        }
 