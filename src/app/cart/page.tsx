// app/cart/page.tsx

export default function CartPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    return (
        <div>
            <h1>This is Cart Page</h1>
            <h2>Search param `item`: {searchParams.item}</h2>
        </div>
    );
}
