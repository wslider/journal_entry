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

// submit form and print to html page

// style page 