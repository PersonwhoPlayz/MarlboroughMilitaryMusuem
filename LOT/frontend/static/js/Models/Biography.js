export class Biography {
    constructor(title, url, description) {
        this.title = title;
        this.url = url;
        this.description = description;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    seturl(url) {
        this.url = url;
    }

    getTitle() {
        return this.url;
    }
    
    setDescription(description) {
        this.description = description;
    }

    getTitle() {
        return this.description;
    }


}