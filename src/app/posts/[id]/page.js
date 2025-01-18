import Link from 'next/link';
import { fetchPostById } from '../../utils/api';

export default async function BlogDetail({ params }) {
    const { id } = await params;
    const post = await fetchPostById(id);

    return (
        <div>
            <div className="header"><h1>{post.title}</h1>
                <p>submitted by user {post.userId}</p>
            </div>

            <div>
                <p>{post.body}</p>
            </div>

            <div>
                <Link href="/">back to home page</Link>
            </div>
        </div>
    );
}