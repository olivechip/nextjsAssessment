"use client";

import { useState, useEffect } from "react";
import { fetchPosts } from "./utils/api";
import { BlogPost } from "./BlogPost";

import styles from "./page.module.css";

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // initial render of all posts
  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchPosts();
        setAllPosts(posts);
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // update search term state
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // filters the posts by search term state
  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setPosts(filteredPosts);
    }

    setSearch("");
  };

  // resets everything
  const handleReset = () => {
    setSearch("");
    setPosts(allPosts);
  };

  // sanity check
  // console.log(posts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.page}>
      <div className="header">
        <h1>Blog Posts</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>

          <input
            id="search"
            placeholder="search by title..."
            value={search}
            onChange={handleSearch}>
          </input>

          <div className={styles.searchButtons}>
            <button className={styles.searchButton} type="submit">Search</button>
            <button className={styles.resetButton} onClick={handleReset}>Reset</button>
          </div>

        </form>
      </div>


      {posts.length > 0 ? (
        posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))
      ) : (
        <p>No matching posts found.</p>
      )}
    </div>
  );
}