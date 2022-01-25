import { FC, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react';

interface GatsbyHTMLProps {
    htmlAttributes: HtmlHTMLAttributes<HTMLHtmlElement>;
    headComponents: ReactNode;
    bodyAttributes: HTMLAttributes<HTMLBodyElement>;
    preBodyComponents: ReactNode;
    body: string;
    postBodyComponents: ReactNode;
}

export const HTML: FC<GatsbyHTMLProps> = ({
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
}) => (
    <html {...htmlAttributes}>
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            <meta property="og:locale" content="en_US" />

            {headComponents}
        </head>
        <body {...bodyAttributes}>
            {preBodyComponents}

            <div
                key="body"
                id="___gatsby"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: body }}
            />

            {postBodyComponents}
        </body>
    </html>
);

export default HTML;
