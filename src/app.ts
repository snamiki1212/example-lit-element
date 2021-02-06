import { AppInput } from './components/AppInput';
import { MySite } from './components/MySite/index.js';
import { defineCustomElement } from './lib/utils';

[MySite, AppInput].map(klass => defineCustomElement(klass));
