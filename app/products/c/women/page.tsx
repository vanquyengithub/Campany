
import CardProduct from "@/components/products/c/card-product";
import { getProductTitle } from "@/data/product";
import { useState, useEffect } from "react";

export default async function Page() {
    const product = await getProductTitle('/c/women')
    return <>
        {product && <CardProduct productTitle={product} />}
    </>;
}