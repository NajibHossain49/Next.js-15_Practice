import Link from "next/link";

export default function PostPage({
  params,
}: {
  params: { author: string; postId: string }; // This will be the postId from the URL based on the author
  // e.g., /blog/john/post1 will have params.author = 'john' and params.postId = 'post1'

}) {
  // In a real app, you'd fetch the post data based on params
  const post = {
    title: `Post ${params.postId}`,
    content: `This is the content of post ${params.postId} by ${params.author}`,
  };

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/blog/${params.author}`}>← Back to author`s posts!</Link>
    </article>
  );
}