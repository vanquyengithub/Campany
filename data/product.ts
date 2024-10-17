import { db } from "@/lib/db";

export const getProductTitle = async (path: string) => {
  try {
    
    
    const product = await db.productTitle.findFirstOrThrow({
      where: { path },
    });
    return product;
  } catch (error) {
    console.log(error);
    
    return null;
  }
};

export const getProductCategory = async (path: string) => {
  try {
    const product = await db.productCategory.findMany({
      where: { path },
    });
    return product;
  } catch (error) {
    console.log(error);
    
    return null;
  }
};

export const getListByProductTitleId = async (id: string) => {
  try {
    const product = await db.productCategoryList.findMany({
      where: { productCategoryId:id },
    });
    return product;
  } catch (error) {
    console.log(error);
    
    return null;
  }
};