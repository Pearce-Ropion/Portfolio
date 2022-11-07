module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
    'jsx-a11y': {
      components: {
        // Custom components
        Link: 'a',

        // Raw HTML Tags
        A: 'a',
        Abbr: 'abbr',
        Address: 'address',
        Area: 'area',
        Article: 'article',
        Aside: 'aside',
        Audio: 'audio',
        B: 'b',
        Bdi: 'bdi',
        Bdo: 'bdo',
        Big: 'big',
        Blockquote: 'blockquote',
        Body: 'body',
        Br: 'br',
        Button: 'button',
        Canvas: 'canvas',
        Caption: 'caption',
        Cite: 'cite',
        Code: 'code',
        Col: 'col',
        Colgroup: 'colgroup',
        Data: 'data',
        Datalist: 'datalist',
        Dd: 'dd',
        Del: 'del',
        Details: 'details',
        Dfn: 'dfn',
        Dialog: 'dialog',
        Div: 'div',
        Dl: 'dl',
        Dt: 'dt',
        Em: 'em',
        Embed: 'embed',
        Fieldset: 'fieldset',
        Figcaption: 'figcaption',
        Figure: 'figure',
        Footer: 'footer',
        Form: 'form',
        H1: 'h1',
        H2: 'h2',
        H3: 'h3',
        H4: 'h4',
        H5: 'h5',
        H6: 'h6',
        Header: 'header',
        Hgroup: 'hgroup',
        Hr: 'hr',
        Html: 'html',
        I: 'i',
        Iframe: 'iframe',
        Img: 'img',
        Input: 'input',
        Ins: 'ins',
        Kbd: 'kbd',
        Keygen: 'keygen',
        Label: 'label',
        Legend: 'legend',
        Li: 'li',
        Main: 'main',
        Map: 'map',
        Mark: 'mark',
        Menu: 'menu',
        Menuitem: 'menuitem',
        Meter: 'meter',
        Nav: 'nav',
        Noindex: 'noindex',
        Noscript: 'noscript',
        Ol: 'ol',
        Optgroup: 'optgroup',
        Option: 'option',
        Output: 'output',
        P: 'p',
        Param: 'param',
        Picture: 'picture',
        Pre: 'pre',
        Progress: 'progress',
        Q: 'q',
        Rp: 'rp',
        Rt: 'rt',
        Ruby: 'ruby',
        S: 's',
        Samp: 'samp',
        Slot: 'slot',
        Section: 'section',
        Select: 'select',
        Small: 'small',
        Source: 'source',
        Span: 'span',
        Strong: 'strong',
        Sub: 'sub',
        Summary: 'summary',
        Sup: 'sup',
        Svg: 'svg',
        Table: 'table',
        Template: 'template',
        Tbody: 'tbody',
        Td: 'td',
        Textarea: 'textarea',
        Tfoot: 'tfoot',
        Th: 'th',
        Thead: 'thead',
        Time: 'time',
        Tr: 'tr',
        Track: 'track',
        U: 'u',
        Ul: 'ul',
        Video: 'video',
        Wbr: 'wbr',
        Webview: 'webview',
      },
    },
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
  },

  plugins: ['react', 'jsx-a11y'],

  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],

  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector:
          'ImportDeclaration[source.value="react"] > :matches(ImportDefaultSpecifier, ImportNamespaceSpecifier)',
        message:
          "Please use named react imports instead. (ie. `import { useState } from 'react';`",
      },
    ],

    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'ignore' },
    ],
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': 'error',
  },
};