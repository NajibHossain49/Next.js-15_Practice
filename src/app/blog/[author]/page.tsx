import Link from 'next/link';

export default function AuthorPage({
  params,
}: {
  params: { author: string }; // This will be the author name from the URL
  // e.g., /blog/john will have params.author = 'john'
}) {
  // Mock posts data
  const posts = [
    { id: 'post1', title: 'First Post' },
    { id: 'post2', title: 'Second Post' },
    { id: 'post3', title: 'Third Post' },
    { id: 'post4', title: 'Fourth Post' },
    { id: 'post5', title: 'Fifth Post' },
    { id: 'post6', title: 'Sixth Post' },
    { id: 'post7', title: 'Seventh Post' },
    { id: 'post8', title: 'Eighth Post' },
    { id: 'post9', title: 'Ninth Post' },
    { id: 'post10', title: 'Tenth Post' },
    { id: 'post11', title: 'Eleventh Post' },
  ];

  return (
    <div>
      <h3>All Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${params.author}/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}