// app/blog/[...slug]/page.tsx

type Props = {
  params: {
    slug?: string[];
  };
};

export default function BlogPage({ params }: Props) {
  const slug = params.slug || [];

  // Example logic to simulate route handling
  if (slug.length === 0) {
    return <h1>📰 Blog Home</h1>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📄 Blog Dynamic Page</h1>
      <p>Current Slug Path:</p>
      <pre style={{ background: '#f0f0f0', padding: '1rem' }}>
        {JSON.stringify(slug, null, 2)}
      </pre>
    </div>
  );
}
