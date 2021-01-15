// * IIFE for Fetching Blog Data
(async function fetchBlogs() {
  // Check if sessionStorage Contains Blog Data
  if (sessionStorage.getItem('blogData') !== null) {
    injectBlogData(JSON.parse(sessionStorage.getItem('blogData')));
  } else {
    // Make API CALL to fetch Data
    const res = await fetch(
      'https://www.googleapis.com/blogger/v3/blogs/3263602042122260502/posts?key=AIzaSyAx5Uf4c_26OHE47MII94f70NO89kNsqaM'
    );

    // Error While Fetching Data from API
    if (res.status !== 200) {
      console.log('Error! While Fetching Blogs');
      document.querySelector('.slide_1').textContent = "Error While Fetching Blogs..."
      return;
    }
    const data = await res.json();
    sessionStorage.setItem('blogData', JSON.stringify(data));
    injectBlogData(data);
  }
})();

// * Injects Blog Data in Splide HTML Block
function injectBlogData(data) {
  // console.log(data);

  // Destructure Data
  const { items: posts, nextPageToken } = data;

  // Select All Blogs
  const blogs = document.querySelectorAll('.blog');

  // Loop Over Each Blog and Inject HTML in it
  blogs.forEach((blog, blogIndex) => {
    // Create HTML Elements
    const h2 = document.createElement('h2');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const h4 = document.createElement('h4');
    const br = document.createElement('br');

    // ? See if I can use splide id's instead of creating new classes of my own (After Configuring Webpack)
    const currentBlogPost = document.querySelector(`.slide_${blogIndex + 1}`);

    // Destructure Blog Data
    let { content, labels, published, title, url } = posts[blogIndex];

    // Add Blog Data to HTML Elements
    h2.innerHTML = title;
    currentBlogPost.appendChild(h2);
    // Create Labels
    labels.forEach((labelText) => {
      let newLabel = document.createElement('span');
      newLabel.classList.add('tag');
      newLabel.textContent = labelText;
      h5.appendChild(newLabel);
    });
    // currentBlogPost.(br);
    currentBlogPost.appendChild(h5);
    currentBlogPost.appendChild(br);
    // Blog Content
    p.innerHTML = content;
    currentBlogPost.appendChild(p);
    // Format Date
    let formatedDate = new Date(published).toDateString().split(' ');
    formatedDate = `${formatedDate[1]} ${formatedDate[2]}, ${formatedDate[3]}`;
    h4.innerHTML = formatedDate;
    currentBlogPost.appendChild(h4);
  });
}

// * Splide Code
new Splide('.splide', {
  type: 'fade',
  perPage: 1,
  padding: {
    right: '5rem',
    left: '5rem',
  },
}).mount();

// * A Function for trnsparencig the next and prev btn on blog section
function frontendVisibility() {
  if (currentPost === 0) {
  }
}
