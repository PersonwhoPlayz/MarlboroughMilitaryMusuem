import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <section>
                <h1>Malrboro Military Museum</h1>
                <div class="img-list">
                <a href="/description?id=1" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 1">
                </a>
                <a href="/description?id=2" class="img__link" data-link>
                <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 2">
                </a>
                <a href="/description?id=3" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 3">
                </a>
                <a href="/description" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 4">
                </a>
                <a href="/description" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 5">
                </a>
                <a href="/description" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 6">
                </a>
                <a href="/description" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 7">
                </a>
                <a href="/description" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 8">
                </a>
                <a href="/description" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 9">
                </a>
                <a href="/description" class="img__link" data-link>
                    <img class="img-tile" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 10">
                </a>
                </div>
            </section>
        `;
    }
}