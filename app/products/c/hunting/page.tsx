
import BannerProduct from "@/components/products/c/banner-product";
import CardProduct from "@/components/products/c/card-product";
import { getProductTitle, getProductCategory } from "@/data/product";
import { useState, useEffect } from "react";

export default async function Page() {
    const product = await getProductTitle('/c/hunting')
    const productCategory = await getProductCategory('/c/hunting');

    return <>
        {product && <BannerProduct productTitle={product} />}
        {productCategory && <CardProduct productCategory={productCategory} />}
    </>;
}