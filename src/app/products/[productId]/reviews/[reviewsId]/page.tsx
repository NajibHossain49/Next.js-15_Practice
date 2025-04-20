import { notFound } from "next/navigation";
export default async function ProductReview({params}: {params: {productId: string, reviewsId: string}}) {
    const { productId, reviewsId } = params;

    // Simulating a condition where the productId or reviewsId is invalid
    if (parseInt(reviewsId) > 100 || !productId || !reviewsId) {
        return notFound();
    }
    return (
        <>
        <h1>Product Review</h1>
        <p>Review content goes here...</p>
        <p>Product ID: {productId}</p>
        <p>Review ID: {reviewsId}</p>
        </>
    );
}