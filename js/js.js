let budget = prompt()

let taxes = budget / 100 * 10
let needs = budget / 100 * 45
let wishes = budget / 100 * 25
let savings = budget / 100 * 20

let money = {
    need: needs,
    wish: wishes,
    save: savings
}

console.log(money);