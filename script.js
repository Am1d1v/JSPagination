

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
    loadPage(9)
}

// Load First page
const loadPage = (page) => {

    // Current Page
    posts.currentPage = page;

    // Page Posts
    let startPost = (posts.currentPage - 1) * posts.postsPerPage;

    //
    let endPost = startPost + posts.postsPerPage > posts.results.length ? posts.results.length : startPost + posts.postsPerPage;

    // Total Pages
    let totalPages = Math.ceil(posts.results.length / posts.postsPerPage);
    console.log(startPost, endPost)

    // Show Current Page
    output.innerHTML = `<h1>Page: ${posts.currentPage}</h1>`;

    // Load first 10 posts
    for (let i = startPost; i < endPost; i++) {
        console.log(posts.results[i]);

        // Show Loaded data in the DOM
        const div = document.createElement('div');
        div.textContent = `${i} ${posts.results[i].name.first}`;
        output.appendChild(div);
    }
}

window.addEventListener('load', () => {
    init();
});
