import { getListByProductTitleId } from "@/data/product";

export default async function Li({ proCategoryListId }: { proCategoryListId: string }) {
    const product = await getListByProductTitleId(proCategoryListId)
    return (
        <>
            {product?.map((p) => (
                <li key={p.id}><a className="subcat-panel-1" href={`/products` + p.path || '#'}>{p.name}</a></li>
            ))}
        </>
    );
}