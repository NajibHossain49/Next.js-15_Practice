"use client";

import { usePathname } from "next/navigation";
export default function NotFound() {

    const pathname = usePathname();
    const productId = pathname.split('/')[2]; // Extract productId from the path
    const reviewsId = pathname.split('/')[4]; // Extract reviewsId from the path

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Review {reviewsId} Not Found for Product {productId}</h1>
            <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}