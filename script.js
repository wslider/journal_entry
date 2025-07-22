// custom css style sheet for time of day
// see Detour 365 project 

function updateCssTheme (){
    const now = new Date();
    const hour = now.getHours();
    linkElement = document.getElementById('customCssStyle');
    if (hour >= 6 && hour <= 16) {linkElement.href='styles.css';
    }
    else if (hour <20) {linkElement.href='evening.css';} 
    else {linkElement.href='night.css'}
}

updateCssTheme(); 

setInterval(updateCssTheme, 60000); 

// print date to form - read only 

function insertCurrentDate() {
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

const currentDateInput = document.getElementById('currentDateInput'); 
currentDateInput.innerText= formattedToday; 
}

insertCurrentDate();

setInterval(insertCurrentDate, 60000);

// submit form 

// get form output

// print to page 

// style page 