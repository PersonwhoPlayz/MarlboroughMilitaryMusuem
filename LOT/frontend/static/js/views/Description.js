import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.descriptonId = params.id;
        this.setTitle("Description");
    }


      

    async getHtml() {
        return `
            <section>
                <h1>Example Name</h1>
                <div class="img-desc">
                    <img class="img-full" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&amp;quality=90&amp;v=1530129081" alt="Test image 1">
                </div>
                <p>Description</p>
            </section>
        `;
    }
}
