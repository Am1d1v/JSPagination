

const pagination = document.querySelector('.pages');
const output = document.querySelector('.output');
const posts = {
    postsPerPage: 10,
    currentPage: 1,
    results: null
}

// Fetch Users Data
const init = async function(){

    try {

        const dataRequest = await fetch('https://randomuser.me/api/?results=100');

        // Users JSON Format Data
        const formatedData = await dataRequest.json();

        // All fetched results
        posts.results = (formatedData.results);
        loadPage(1)

    } catch (error) {
        console.log(error)
    }
}

// Load First page
const loadPage = (page) => {

    // Clear Previous Pagionation
    pagination.innerHTML = '';

    // Current Page
    posts.currentPage = page;

    // Page Posts
    let startPost = (posts.currentPage - 1) * posts.postsPerPage;

    //
    let endPost = startPost + posts.postsPerPage > posts.results.length ? posts.results.length : startPost + posts.postsPerPage;

    // Total Pages
    let totalPages = Math.ceil(posts.results.length / posts.postsPerPage);

    // Show Current Page
    output.innerHTML = `<h1>Page: ${posts.currentPage}</h1>`;

    // Show All Pages
    const pageOutput = document.createElement('div');
    pageOutput.classList.add('pageOutput');
    

    for (let i = 0; i < totalPages; i++) {
        const span = document.createElement('span');
        span.textContent = i + 1;

        // Change Page
        span.addEventListener('click', () => {
            loadPage(i + 1);
        })
        
        if(i + 1 === posts.currentPage){
            span.classList.add('active');
        }

        pageOutput.append(span);
    }

    // Load first 10 posts
    for (let i = startPost; i < endPost; i++) {

        // User's data
        const person = posts.results[i];
        console.log(person);

        // Show Loaded data in the DOM
        const details = document.createElement('div');
        details.innerHTML = `<h3>${i + 1} Name: ${person.name.first} ${person.name.last}</h3> <p>Email: ${posts.results[i].email}</p> <p>Phone: ${person.phone}</p>`;
        details.classList.add('person');
        
        output.appendChild(details);
    }

    pagination.appendChild(pageOutput);
}

window.addEventListener('load', () => {
    init();
});
