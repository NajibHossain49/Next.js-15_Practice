import Link from 'next/link';

export default function ProductsPage() {
    const products = [
        { "id": "1", "name": "Product 1" },
        { "id": "2", "name": "Product 2" },
        { "id": "3", "name": "Product 3" },
        { "id": "4", "name": "Product 4" },
        { "id": "5", "name": "Product 5" },
        { "id": "6", "name": "Product 6" }
    ];

    return (
        <>
            <h1>Products</h1>
            <p>This is the products page.</p>
            <p>Here you can find a list of all our products.</p>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}