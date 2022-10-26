import { ProductService } from "./product-service.class";

const form = document.getElementById("form") as HTMLFormElement;
const imgPreview = document.getElementById("imgPreview") as HTMLImageElement;

const productService = new ProductService();

form.image.addEventListener("change", (event: Event) => {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
        imgPreview.src = reader.result as string;
    });
});

form.addEventListener("submit", async e => {
    e.preventDefault();
    const product = {
        name: (form.name as unknown as HTMLInputElement).value,
        description: form.description.value,
        photo: imgPreview.src
    };

    try {
        await productService.add(product);
        location.assign("index.html");
    } catch (error) {
        console.error("Error creating the product: ", error);
    }
});
