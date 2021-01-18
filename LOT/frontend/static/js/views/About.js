import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <p>Lt. Commander Marty Sargeant of Marlborough over the last decade has been collecting pictures of all the service members who died in battle. This website is made to hold the biographies and stories of those who he has collected his photos of.</p>
        `;
    }
}