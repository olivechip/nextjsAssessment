import Link from "next/link";

export const BlogPost = ({ post }) => {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
        </div>
    )
}