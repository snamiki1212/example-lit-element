// REF: https://stackoverflow.com/a/52349453/8842333
function upperCamelCaseToKebabCase(value: string) {
  return (
    value
      // first char to lower case
      .replace(/^([A-Z])/, $1 => $1.toLowerCase())
      // following upper chars get preceded with a dash
      .replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase())
  );
}

export function defineCustomElement<T>(klass: T) {
  const kebab = upperCamelCaseToKebabCase(((klass as unknown) as any).name);
  customElements.define(kebab, (klass as unknown) as any);
}
