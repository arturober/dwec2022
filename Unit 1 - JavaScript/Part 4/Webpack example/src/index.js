import { SERVER } from "./constants.js";
import { ProductService } from "./product-service.class.js";
import {DateTime} from "luxon";

import css from "../styles.css";
import productTemplate from "../templates/product.hbs";

console.log(DateTime.now().setZone("America/New_York").minus({weeks:1}).endOf("day").toISO());

const tbody = document.querySelector("#table tbody");

const productService = new ProductService();

function appendProduct(product) {
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
