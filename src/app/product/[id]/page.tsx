// app/product/[id]/page.tsx
// Also note it's a server component
export default function ProductPage({ params }: { params: { id: string } }) {
    return (
        <div>

            <h1>This is the product page for product ID: {params.id}</h1>
        </div>
    );
}


