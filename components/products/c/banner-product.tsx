import { ProductTitle } from "@prisma/client";


export default async function BannerProduct({ productTitle }: { productTitle: ProductTitle }) {

    return (
        <>
            <div>
                <img src={productTitle?.image || ''} className="w-full h-auto rounded-sm" alt="hunting" />
            </div>
        </>
    );
}