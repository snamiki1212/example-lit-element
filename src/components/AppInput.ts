import { LitElement, html, css, property } from 'lit-element';

export class AppInput extends LitElement {
  render() {
    return html` <div>
      <h1>My app</h1>
      <div>this is app render</div>
      <div>this is 2nd</div>
      <div><slot>this-is 3rd</slot></div>
      <div>this-is-4th</div>
    </div>`;
  }
}

export const customeElementName = 'app-input';
