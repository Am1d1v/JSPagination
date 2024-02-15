

const pagination = document.querySelector('.pages');
const output = document.querySelector('.output');
const posts = {
    postsPerPage: 10,
    currentPage: 1,
    results: null
}

// Fetch Users Data
const init = async function(){

    const dataRequest = await fetch('https://randomuser.me/api/?results=100');

    // Users JSON Format Data
    const formatedData = await dataRequest.json();

    // All fetched results
    posts.results = (formatedData.results);
    loadPage(1)
}

// Load First page
const loadPage = (page) => {
    // Load First Page
    posts.currentPage = page;

    // Show Current Page
    output.innerHTML = `<h1>Page: ${posts.currentPage}</h1>`;

    // Load first 10 posts
    for (let i = 0; i < posts.postsPerPage; i++) {
        console.log(posts.results[i]);

        // Show Loaded data in the DOM
        const div = document.createElement('div');
        div.textContent = `${posts.results[i].name.first}`;
        output.appendChild(div);
    }
}

window.addEventListener('load', () => {
    init();
});
