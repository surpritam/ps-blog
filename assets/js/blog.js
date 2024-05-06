document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.blogTitle}</h3><p>${post.content}</p><small>Posted by ${post.username}</small>`;
        postsContainer.appendChild(postElement);
    });
});

