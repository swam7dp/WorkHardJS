let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    data: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



;
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется");
    if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
        a != "" & b != "" && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b;
    } else {
        var size = Object.keys(appData.expenses).length;
        while (size <= 2) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется");
            if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
                a != "" & b != "" && a.length < 50) {
                console.log("done")
                appData.expenses[a] = b;
                var size = Object.keys(appData.expenses).length;
            }

        }

    };

    appData.moneyPerDay = appData.budget / 30;

}
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Вы бомж")
} else {
    if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100) {
        console.log("Средний уровень");
    } else {
        if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Не верное значение бюджета");
        }
    }
}
console.log(appData);



var size = Object.keys(appData.expenses).length;
console.log(size);