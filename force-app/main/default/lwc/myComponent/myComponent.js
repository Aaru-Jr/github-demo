import { LightningElement, track } from 'lwc';

export default class MyComponent extends LightningElement {
    @track message = 'Hello, World!';

    get greeting() {
        return `Hello, ${this.message}!`;
    }
}