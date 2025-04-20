"use client";
import { useRouter, redirect } from "next/navigation";


export default function OrderProduct() {
    const router = useRouter();

    const handleOrder = () => {
        // Perform order logic here
        console.log("Order placed!");
        router.push("/"); // Redirect to the success page
        redirect("/"); // Redirect to the success page
        // Alternatively, you can use the router.push method
    };

    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleOrder}>Place Order</button>
        </div>
    );
}