let name = prompt("Digite seu nome:")
let money = Number(prompt("Digite o valor que você tem disponível:"))
let travelTo = prompt(
    "Para onde você deseja ir?\n" +
    "1. Disney (R$ 15.000)\n" +
    "2. Madrid (R$ 12.000)\n" +
    "3. Maceió (R$ 8.000)\n" +
    "4. Ribeirão Preto (R$ 5.000)"
)

switch (travelTo) {
    case "1":
        if (money >= 15000) {
            alert("Arrume suas malas, " + name + "! Você vai para Disney!")
        } else {
            alert("Você precisa economizar " + String(15000 - money) + " reais para essa viagem")
        }
    break
    case "2":
        if (money >= 12000) {
            alert("Arrume suas malas, " + name + "! Você vai para Madrid!")
        } else {
            alert("Você precisa economizar " + String(12000 - money) + " reais para essa viagem")
        }
    break
    case "3":
        if (money >= 8000) {
            alert("Arrume suas malas, " + name + "! Você vai para Maceió!")
        } else {
            alert("Você precisa economizar " + String(8000 - money) + " reais para essa viagem")
        }
    break
    case "4":
        if (money >= 5000) {
            alert("Arrume suas malas, " + name + "! Você vai para Ribeirão Preto!")
        } else {
            alert("Você precisa economizar " + String(5000 - money) + " reais para essa viagem")
        }
    break
    default:
        alert("Digite uma opção válida!")
    break
}
