

const pagination = document.querySelector('.pages');
const output = document.querySelector('output');

// Fetch Users Data
const init = async function(){

    const dataRequest = await fetch('https://randomuser.me/api/?results=100');

    // Users JSON Format Data
    const formatedData = await dataRequest.json();
    console.log(formatedData.results);
}

window.addEventListener('load', () => {
    init();
});
