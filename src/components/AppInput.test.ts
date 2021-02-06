import { html, fixture, expect } from '@open-wc/testing';

import { AppInput } from './AppInput.js';

import { upperCamelCaseToKebabCase } from '../lib/utils';

const klass = AppInput;
const kebab = upperCamelCaseToKebabCase(klass.name);
customElements.define(kebab, klass);

describe('AppInput', () => {
  let element: AppInput;
  beforeEach(async () => {
    element = await fixture(html`<app-input></app-input>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  // it('passes the a11y audit', async () => {
  //   await expect(element).shadowDom.to.be.accessible();
  // });
});
