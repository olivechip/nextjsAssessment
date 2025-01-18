import Link from 'next/link';
import { fetchPostById } from '../../utils/api';

import "./blog-detail.css";

export default async function BlogDetail({ params }) {
    const { id } = await params;
    const post = await fetchPostById(id);

    return (
        <div className="wrapper">
            <div className="content">
                <div className="header">
                    <h1>{post.title}</h1>
                    <p>submitted by user {post.userId}</p>
                </div>

                <main className="main">
                    <p>{post.body}</p>
                </main>

                <div className="back-link">
                    <Link href="/"></Link>
                </div>
            </div>
        </div>
    );
}