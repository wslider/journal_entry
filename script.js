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

// form and output 

const form = document.getElementById('form');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const highlight = formData.get('highlight');
    const wins = formData.get('wins'); 
    const gratitude = formData.get('gratitude');
    const lessons = formData.get('lessons');
    const inspiration = formData.get('inspiration');
    const interesting = formData.get('interesting');
    const steps = formData.get('steps');
    const currentDate = new Date().toLocaleString();

    output.innerHTML = `
        <h2>Journal Entry: </h2><h2>${currentDate}</h2>
        <h3>Name: ${name}</h3>
        <h3>Highlight: ${highlight}</h3>
        <h3>Wins: ${wins}</h3>
        <h3>Gratitude:${gratitude}</h3>
        <h3>Lessons:${lessons}</h3>
        <h3>Inspiration:${inspiration}</h3>
        <h3>Intersting:${interesting}</h3>
        <h3>Steps:${steps}</h3>
    `;});




