"use client";

import { useState, useEffect } from "react";
import { fetchPosts } from "./utils/api";
import { BlogPost } from "./BlogPost";

import styles from "./page.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // console.log(posts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.page}>
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className={styles.content}>
            <BlogPost post={post} />
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}