/**
 * The class Ball defines *Ball objects*. Ball objects have a size, position, speed, and color.
 */

// the word 'export' simply makes it available outside the file.
// the word `class` tells TypeScript we are defining a class of objects

/** Represents a single color box that will appear on the page */
export class Box {

    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private color: string;
    private divElement: HTMLDivElement;

    constructor() {
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;

        // saves the variables
        this.width = Math.round(Math.random() * 200 + 50);
        this.height = Math.round(Math.random() * 200 + 50);
        this.x = Math.round(Math.random() * (width - this.width));
        this.y = Math.round(Math.random() * (height - this.height));
        this.color = this.randomColor();

        // create a div element that has our variables
        this.divElement = this.buildTheDiv();
        // updates the this.divElement and updates the document to show it
        // the Model-View-Controller model would have us separate this into another class rather than do it here
        this.updateTheDocument();
    }

    private randomColor() {
        return "rgb(" +
            Math.floor(Math.random() * 256) + "," +
            Math.floor(Math.random() * 256) + "," +
            Math.floor(Math.random() * 256) + ")";
    }
    /** updates the web page so the box actually appears */

    private buildTheDiv() {
        // create a new box (a `div` in HTML speak) and set all of its CSS styles
        let divElement = <HTMLDivElement>document.createElement("div");
        divElement.style.position = "absolute";
        divElement.style.top = this.y + "px";
        divElement.style.left = this.x + "px";
        divElement.style.width = this.width + "px";
        divElement.style.height = this.height + "px";
        divElement.style.backgroundColor = this.color;
        return divElement;
    }

    private updateTheDocument() {
        if (this.divElement) {
            // Remove this box from the body if it already exists
            this.divElement.remove();
        }
        // add the box to the end of the body
        document.body.appendChild(this.divElement);

    }
}
