import Link from "next/link";

export const BlogPost = ({ post }) => {
    return (
        <div>
            <h5>
                <Link href={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
            </h5>
        </div>
    )
}