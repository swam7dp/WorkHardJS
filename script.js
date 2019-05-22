let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");

    }
}

start();


let appData = {
    budget: money,
    data: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется");
            if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("done")
                appData.expenses[a] = b;
            } else {
                i = i - 1;

            }

        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert("Вы бомж")
        } else {
            if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100) {
                alert("Средний уровень");
            } else {
                if (appData.moneyPerDay > 2000) {
                    alert("Высокий уровень достатка");
                } else {
                    alert("Не верное значение бюджета");
                }
            }
        }

    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процкнт");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {

            let a = prompt("Введите не обязательную статью расходов в этом месяце");
            if ((typeof(a)) === "string" && (typeof(a)) != null && a != "" && a.length < 50) {
                console.log("done")
                appData.optionalExpenses[i] = a;
            } else {
                i = i - 1;

            }

        }
    },
    chooseIncome: function() {
        for (i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный дохд? (Перечислети через запятую)", "");
            if ((typeof(items)) === "string" && (typeof(items)) != null && items != "") {
                appData.income = items.split(", ");
            } else {
                i = i - 1;
            }
        }

        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();
        appData.income.forEach(element => {
            alert("Способы доп. заработка: " + element);
        });
    }

};

console.log(appData);

for (key of appData) {

    console.log("Наша программа включает в себя данные:" + key + appData[key]);
}