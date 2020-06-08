import { fromEvent } from 'rxjs';
import { SzBaseElement } from '../../../lib/base-element';
import template from './custom-element.html';
import './custom-element.scss';
export class RxjsCustomElement extends SzBaseElement {

    constructor() {
        super(template);
        console.log(this.elementRef);
        fromEvent(this, 'click').subscribe((data: Event) => console.log(data));
        fromEvent(this.children, 'click').subscribe(() => this.elementRef.h1.innerHTML = 'Anup Kumar Saw');
    }
}