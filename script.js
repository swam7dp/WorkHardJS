let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
var x = prompt("Введите обязательную статью расходов в этом месяце");
var y = +prompt("Во сколько обойдется");
let appData = {
    money: money,
    data: time,
    expenses: {
        [x]: y },
    optionalExpenses: {},
    income: [],
    savings: false
};



alert("Бюджет на один день: " + appData.money / 30);
console.log(appData);