
import BannerProduct from "@/components/products/c/banner-product";
import CardProduct from "@/components/products/c/card-product";
import { getProductCategory, getProductTitle } from "@/data/product";
import { useState, useEffect } from "react";

export default async function Page() {
    const product = await getProductTitle('/c/shooting')
    const productCategory = await getProductCategory('/c/shooting');

    return <>
        {product && <BannerProduct productTitle={product} />}
        {productCategory && <CardProduct productCategory={productCategory} />}
    </>;
}