import type { ComputedRef } from 'vue';

export interface DynamicObject {
  [key: string]: any;
}

type MetaTagOptions = Record<string, any> & {
  template?: (attributeValue: string) => string;
};

export interface MetaOptions {
  title?: string | ComputedRef<string>;
  titleTemplate?(title: string): string;
  meta?: { [name: string]: MetaTagOptions };
  link?: { [name: string]: Record<string, string> };
  script?: { [name: string]: Record<string, string> };
  htmlAttr?: { [name: string]: string | undefined };
  bodyAttr?: { [name: string]: string | undefined };
  noscript?: { [name: string]: string };
}
