import { Category, OrderDetail } from "@shared/service-proxies/service-proxies";

export interface product {
    id: number;
    productName: string | undefined;
    productPrice: number | undefined;
    description: string | undefined;
    fullDescription: string | undefined;
    image: string;
    isFeatured: boolean | undefined;
    categoryId: number | undefined;
    categoryFk: Category;
    orderDetails: OrderDetail[] | undefined;
    quantity :undefined | number,
   

}