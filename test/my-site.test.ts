import { html, fixture, expect } from '@open-wc/testing';

import { MySite } from '../src/components/MySite.js';
// import '../src/components/my-site.js';

import { upperCamelCaseToKebabCase } from '../src/lib/utils';

const klass = MySite;
const kebab = upperCamelCaseToKebabCase(klass.name);
customElements.define(kebab, klass);

describe('MySite', () => {
  let element: MySite;
  beforeEach(async () => {
    element = await fixture(html`<my-site></my-site>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
