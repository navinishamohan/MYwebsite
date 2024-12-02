// Function to add a new blog
function addBlog() {
    // Get the blog title and content from the input fields
    const title = document.getElementById("blog-title").value.trim();
    const content = document.getElementById("blog-content").value.trim();
  
    if (title === "" || content === "") {
      alert("Both title and content are required!");
      return;
    }
  
    // Create a new blog post element
    const blogElement = document.createElement("article");
    blogElement.classList.add("blog-post");
    blogElement.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
    `;
  
    // Add the new blog post to the blog container
    const blogContainer = document.getElementById("blog-container");
    blogContainer.appendChild(blogElement);
  
    // Clear the input fields
    document.getElementById("blog-title").value = "";
    document.getElementById("blog-content").value = "";
  
    alert("Blog added successfully!");
  }
  
  // Attach event listener to the Add Blog button
  document.getElementById("add-blog-button").addEventListener("click", addBlog);
  