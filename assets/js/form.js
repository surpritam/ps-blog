document.getElementById("blogForm").addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const blogTitle = document.getElementById("blogTitle").value;
    const content = document.getElementById("content").value;

    if (!username || !blogTitle || !content){
        alert('Please complete all fields');
        return;
    }
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({username, blogTitle, content});
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href="blog.html"

});