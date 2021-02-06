import { AppInput } from './components/AppInput';
import { MySite } from './components/MySite.js';
import { upperCamelCaseToKebabCase } from './lib/utils';

[MySite, AppInput].map(klass => {
  const kebab = upperCamelCaseToKebabCase(klass.name);
  customElements.define(kebab, klass);
});
