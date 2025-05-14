import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Send a GET request to the placeholder API to retrieve posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response was successful
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

         // Parse the JSON response into a JavaScript object
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        // If any error occurs store the error message
        setError(err.message);
      }
    };

    // Calls the fetchPosts function 
    fetchPosts();
  }, []);

  return (
    // Renders blog posts
    <div>
      <h1>Blog Posts</h1>

      {error && (<p>Failed to load blog posts. {error}</p>)}

      {!error && posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
