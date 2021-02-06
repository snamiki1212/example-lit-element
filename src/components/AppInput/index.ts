import { LitElement, html, css, property } from 'lit-element';
// import ScssStyle from './style.scss';

export class AppInput extends LitElement {
  @property({ type: Boolean }) isOn = true;

  static styles = [
    // ScssStyle,
    css`
      h1 {
        color: red;
      }
      .second {
        color: blue;
      }
    `,
  ];

  clickButton() {
    this.isOn = !this.isOn;
  }

  render() {
    return html` <div>
      <h1>My app</h1>
      <div>this is app render</div>
      <div class="second">this is 2nd</div>
      <div><slot>this-is 3rd</slot></div>
      <div>
        <button @click="${this.clickButton}">click me</button>
        ${this.isOn ? html`On` : html`OFF`}
      </div>
      <div class="fourth">this-is-4th</div>
    </div>`;
  }
}

export const customeElementName = 'app-input';
