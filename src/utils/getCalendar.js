// Скрипт написан мной 15.01.2023 "на коленке" для этого задания
// Неделя начинается с понедельника

let now = new Date(); // Сегодня
// let now = new Date(2022, 11, 14, 2, 3, 4, 567); // проверка
let resultNow = now.getDate();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let day = now.getDay();
let wDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
let wDaysFull = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let Months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
let MonthsModified = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

let firstDayThisMonth = new Date(year, month, 1); // устанавливаем дату первого числа текущего месяца
let firstWdayThisMonth = firstDayThisMonth.getDay(); // из нее вычисляем день недели первого числа текущего месяца
let quantityDaysPrevMonth =
  firstWdayThisMonth === 0 ? 6 : firstWdayThisMonth - 1; // вычисляем сколько нужно взять дней предыдущего месяца

let result = [];

for (let index = quantityDaysPrevMonth; index > 0; index -= 1) {
  let day = new Date(year, month, 1 - index);
  result.push({
    number: day.getDate(),
    month: "prev",
    now: false,
  });
}

let firstDayNextMonth = new Date(year, month + 1, 1); // устанавливаем дату первого числа следущего месяца
let quantityDaysThisMonth = (firstDayNextMonth - firstDayThisMonth) / 8.64e7; // устанавливаем количество дней этого месяца

for (let index = 0; index < quantityDaysThisMonth; index += 1) {
  let day = new Date(year, month, index + 1);
  result.push({
    number: day.getDate(),
    month: "this",
    now: date === index + 1,
  });
}

let quantityDaysNextMonth =
  7 - ((quantityDaysPrevMonth + quantityDaysThisMonth) % 7);

for (let index = 0; index < quantityDaysNextMonth; index += 1) {
  let day = new Date(year, month + 1, index + 1);
  result.push({
    number: day.getDate(),
    month: "next",
    now: false,
  });
}

let arrResult = [];
for (let index = 0; index < result.length; index += 7) {
  arrResult.push(result.slice(index, index + 7));
}

let data = {
  now: {
    year: year,
    month: Months[month],
    monthMod: MonthsModified[month],
    wDay: wDays[day === 0 ? 6 : day - 1],
    wDayFull: wDaysFull[day === 0 ? 6 : day - 1],
    date: date,
  },
  arrResult,
};

export default data;
