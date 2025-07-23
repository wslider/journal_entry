// custom css style sheet for time of day
// see Detour 365 project 

function updateCssTheme (){
    const now = new Date();
    const hour = now.getHours();
    linkElement = document.getElementById('customCssStyle');
    if (hour >= 6 && hour <= 16) {linkElement.href='daytime.css';
    }
    else if (hour <20) {linkElement.href='evening.css';} 
    else {linkElement.href='night.css'}
}

updateCssTheme(); 

setInterval(updateCssTheme, 60000); 

// print date to page

function insertDate(){
document.getElementById("currentDate").innerText = new Date();
}

insertDate();

setInterval(insertDate, 60000);

// form and output variables

const form = document.getElementById('form');
const output = document.getElementById('output');



// get form output

// print to page 

// style page 