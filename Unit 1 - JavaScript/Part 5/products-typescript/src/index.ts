import { SERVER } from "./constants";
import { ProductService } from "./product-service.class";
import {DateTime} from "luxon";

import "../styles.css";
import { Product } from "./interfaces/product.js";
const productTemplate: (product: Product) => string = require("../templates/product.hbs");

console.log(DateTime.now().setZone("America/New_York").minus({weeks:1}).endOf("day").toISO());

const tbody = document.querySelector("#table tbody");

const productService = new ProductService();

function appendProduct(product: Product) {
    let prodHTML = productTemplate({...product, photo: `${SERVER}/${product.photo}`});

    const tr = document.createElement("tr");
    tr.innerHTML = prodHTML;

    tr.querySelector("button").addEventListener("click", async () => {
        await productService.delete(product.id);
        tr.remove();
    });

    tbody.append(tr);
}

async function getProducts() {
    try {
        const products = await productService.getProducts();
        products.forEach(p => appendProduct(p));
    } catch (error) {
        console.error("Error loading products: ", error);
    }
}

getProducts();
