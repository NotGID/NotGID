fetch('https://json.ngid.my.id/posts.json')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('blog-posts');

        // Urutkan posts berdasarkan id (besar → kecil)
        posts.sort((a, b) => b.id - a.id);

        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'post';
            postEl.innerHTML = `
                <h2>${post.title}</h2>
                <small>${post.date}</small>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
                
            `;
            container.appendChild(postEl);
        });
    })
    .catch(err => console.error('Error loading posts:', err));
