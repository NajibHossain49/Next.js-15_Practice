import Link from 'next/link';
import { Metadata } from 'next';

// One wat to define metadata for a page is to use the `metadata` export
export const metadata: Metadata = {
  title: 'Blog Authors',
  description: 'List of blog authors',
}

// Another way to define metadata for a page is to use 
// export const metadata: Metadata = {
//   title: {
//     absolute: 'Blog Authors',
//   },
//   description: 'List of blog authors',
// }

export default function BlogHome() {
  const authors = [
    { id: 'john', name: 'John Doe' },
    { id: 'jane', name: 'Jane Smith' },
    { id: 'alex', name: 'Alex Johnson' },
    { id: 'emma', name: 'Emma Williams' },
    { id: 'mike', name: 'Mike Brown' },
    { id: 'lisa', name: 'Lisa Davis' },
    { id: 'tom', name: 'Tom Wilson' },
    { id: 'nina', name: 'Nina Moore' },
    { id: 'ryan', name: 'Ryan Taylor' },
    { id: 'zoe', name: 'Zoe Anderson' },
    { id: 'sam', name: 'Sam Thomas' },
    { id: 'kate', name: 'Kate Martin' },
    { id: 'dan', name: 'Dan Lee' },
    { id: 'mia', name: 'Mia White' },
    { id: 'chris', name: 'Chris Harris' }
  ];

  return (
    <div>
      <h1>Blog Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link href={`/blog/${author.id}`}>
              {author.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}