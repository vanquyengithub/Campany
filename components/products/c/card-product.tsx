import { getListByProductTitleId } from "@/data/product";
import { ProductCategory } from "@prisma/client";
import Li from "@/components/products/c/li-card-product";


export default async function CardProduct({ productCategory }: { productCategory: ProductCategory | any }) {

    return (
        <>
            <div className="clp-subcategories my-6">
                {productCategory?.map((productCategory: any) => (
                    <div className="subcat" key={productCategory.id}>
                        <div className="subcat-panel">
                            <a href="/l/archery"><h2>{productCategory.name}</h2></a>
                            <ul className="subcat-links">
                                <Li proCategoryListId={productCategory.id} />
                            </ul>
                        </div>
                        <img src={productCategory.image} alt={productCategory.name} />
                    </div>
                ))}
            </div>
        </>
    );
}