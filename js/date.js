/************
Static Data
************/
const allTheMonths = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
const allTheDays = [
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat"
];

/************
Dynamic Data
************/
// Get and store current date and time with `new Date()` object
const dateNow = new Date();
// Check-Check: See all `Date()` methods and properties
console.log( dateNow );

const gotMonth = dateNow.getMonth();
// Get current day of the month
let gotDayOfMonth = dateNow.getDate();
// Get current year
const gotYear = dateNow.getFullYear();
// Get current day of the week
const gotDayOfWeek = dateNow.getDay();

// Check-Check: Is the data correct? 
console.log(gotMonth, gotDayOfMonth, gotYear, gotDayOfWeek);

/************
Get DOM Elements
************/
// Get the month
const month = document.querySelector(".month");
// Get day of the month
const dayOfMonth = document.querySelector(".dayOfMonth");
// Get year
const year = document.querySelector('.year');
// Get Day of Week
const dayOfWeek = document.querySelector('.dayOfWeek');


/************
Set DOM Elements
************/
// Set the month
month.innerText = allTheMonths[gotMonth];
// Set day of the month
dayOfMonth.innerText = gotDayOfMonth;
// Set the year
year.innerText = gotYear;
// Set the day of the week
dayOfWeek.innerText = allTheDays[gotDayOfWeek];