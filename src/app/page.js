import { fetchPosts } from "./utils/api";
import { BlogPost } from "./BlogPost";

import styles from "./page.module.css";

export default async function Home() {
  const posts = await fetchPosts();

  console.log(posts);
  console.log(posts.length);
  return (
    <div className={styles.page}>
      {posts.map((post) => (
        <div key={post.id}>
          <BlogPost key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
}