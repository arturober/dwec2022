import { Http } from "./http.class";
import { SERVER } from "./constants";
import { Product } from "./interfaces/product";
import { ProductResponse, ProductsResponse } from "./interfaces/responses.js";

export class ProductService {
    private http: Http;

    constructor() {
        this.http = new Http();
    }

    async getProducts() {
        const resp = await this.http.get<ProductsResponse>(`${SERVER}/products`);
        return resp.products;
    }

    async add(product: Product) {
        const resp = await this.http.post<ProductResponse>(`${SERVER}/products`, product);
        return resp.product;
    }

    async update(product: Product) {
        const resp = await this.http.put<ProductResponse>(`${SERVER}/products/${product.id}`, product);
        return resp.product;
    }

    delete(id: number) {
        return this.http.delete<void>(`${SERVER}/products/${id}`);
    }
}
