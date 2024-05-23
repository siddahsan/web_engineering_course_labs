import React, { useState } from 'react'
import './FetchPosts.css'

const FetchPosts = () => {

    const [posts1, setPosts1] = useState([])
    const [posts2, setPosts2] = useState([])


    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const newData = data.slice(0,3);
                setPosts1(prevPosts => [...prevPosts, ...newData]);
            })
            .catch(console.error);
    }

    const loadMore = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const newData = data.slice(0,3);
                setPosts2(prevPosts => [...prevPosts, ...newData]);
            })
            .catch(console.error);
    }

    return (
        <div className='split-screen'>
            <div className='split-screen-section'>
                <li>{posts1.length}</li>
                <button onClick={fetchPosts}>Fetch Posts</button>
                {
                    posts1.map(post => (
                        <>
                            <h1>ID: {post.id}</h1>
                            <h3>Title: {post.title}</h3>
                            <p>Desc: {post.body}</p>
                        </>))
                }
            </div>
            <div className='split-screen-section'>
                <li>{posts2.length}</li>
                <button onClick={loadMore}>Load More</button>
                {
                    posts2.map(post => (
                        <>
                            <h1>ID: {post.id}</h1>
                            <h3>Title: {post.title}</h3>
                            <p>Desc: {post.body}</p>
                        </>))
                }
            </div>
        </div>
    )
}

export default FetchPosts