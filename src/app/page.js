import { fetchPosts } from "./utils/api";
import { BlogPost } from "./BlogPost";

import styles from "./page.module.css";

export default async function Home() {
  const posts = await fetchPosts();

  // check
  console.log(posts);

  return (
    <div className={styles.page}>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.content}>
          <BlogPost key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
}