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
    const experiences = formData.get('experiences');
    const steps = formData.get('steps');
    const currentDate = new Date().toLocaleString();

document.getElementById('outputDate').innerText = currentDate;
document.getElementById('outputName').innerText = `Name: ${name}`;
document.getElementById('outputHighlight').innerText = `Highlight: ${highlight}`;
document.getElementById('outputWins').innerText = `Wins: ${wins}`;
document.getElementById('outputGratitude').innerText = `Gratitude: ${gratitude}`;
document.getElementById('outputLessons').innerText = `Lessons: ${lessons}`;
document.getElementById('outputInspiration').innerText = `Inspiration: ${inspiration}`;
document.getElementById('outputExperiences').innerText = `Experiences: ${experiences}`;
document.getElementById('outputSteps').innerText = `Steps: ${steps}`;
    ;});




