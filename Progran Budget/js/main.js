let money, time;
let appData = {
    budget: money,
    data: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    startProgram: false
};

let beginStarts = document.getElementById("start"),
    budgetVl = document.getElementsByClassName("budget-value")[0],
    daybudgetVl = document.getElementsByClassName("daybudget-value")[0],
    levelVl = document.getElementsByClassName("level-value")[0],
    expensesVl = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesVl = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeVl = document.getElementsByClassName("income-value")[0],
    monthsavingsVl = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsVl = document.getElementsByClassName("yearsavings-value")[0],
    expensesInput = document.querySelectorAll(".expenses-item"),
    btn = document.getElementsByTagName("button")[0],
    btn1 = document.getElementsByTagName("button")[1],
    btn2 = document.getElementsByTagName("button")[2],
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    checkbox = document.getElementById("savings"),
    sum = document.querySelector(".choose-sum"),
    percent = document.querySelector(".choose-percent"),
    yearVl = document.querySelector(".year-value"),
    monthVl = document.querySelector(".month-value"),
    dayVl = document.querySelector(".day-value");




beginStarts.addEventListener('click', function() {

    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");

    }

    appData.budget = money;
    appData.data = time;
    budgetVl.textContent = money.toFixed();
    yearVl.value = new Date(Date.parse(time)).getFullYear();
    monthVl.value = new Date(Date.parse(time)).getMonth() + 1;
    dayVl.value = new Date(Date.parse(time)).getDate();
    status = "click";
    appData.startProgram = true;
});

let prom;
btn.addEventListener('click', function() {
    if (appData.startProgram == true) {
        let sume = 0;
        for (let i = 0; i < expensesInput.length; i++) {
            let a = expensesInput[i].value,
                b = expensesInput[++i].value;
            if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sume += +b;
            } else {
                i = i - 1;

            }

        }
        expensesVl.textContent = sume;
        prom = sume / 30;
        console.log(expensesVl);
    }

});

btn1.addEventListener('click', function() {
    if (appData.startProgram == true) {
        for (let i = 0; i < optionalexpensesItem.length; i++) {

            let a = optionalexpensesItem[i].value;
            if ((typeof(a)) === "string" && (typeof(a)) != null && a != "" && a.length < 50) {
                console.log("done")
                appData.optionalExpenses[i] = a;
                optionalexpensesVl.textContent += appData.optionalExpenses[i] + " ";
            } else {
                i = i - 1;

            }

        }
    }

});

btn2.addEventListener('click', function() {
    if (appData.startProgram == true) {
        if (appData.budget !== undefined) {
            appData.moneyPerDay = (appData.budget / 30) - prom.toFixed();
            daybudgetVl.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelVl.textContent = "Вы бомж";
            } else {
                if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100) {
                    levelVl.textContent = "Средний уровень";
                } else {
                    if (appData.moneyPerDay > 2000) {
                        levelVl.textContent = "Высокий уровень достатка";
                    } else {
                        levelVl.textContent = "Не верное значение бюджета";
                    }
                }
            }

        } else {
            daybudgetVl.textContent = "Произошла ошибка";
        }
    }

});



chooseIncome.addEventListener('change', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeVl.textContent = appData.income;
});

checkbox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;

    } else {
        appData.savings = true;

    }
});

sum.addEventListener('input', function() {
    if (appData.savings == true) {
        let suma = +sum.value,
            percents = +percent.value;
        appData.monthIncome = suma / 100 / 12 * percents;
        appData.yearIncome = suma / 100 * percents;
        monthsavingsVl.textContent = appData.monthIncome.toFixed(1);
        yearsavingsVl.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let suma = +sum.value,
            percents = +percent.value;
        appData.monthIncome = suma / 100 / 12 * percents;
        appData.yearIncome = suma / 100 * percents;
        monthsavingsVl.textContent = appData.monthIncome.toFixed(1);
        yearsavingsVl.textContent = appData.yearIncome.toFixed(1);
    }

});