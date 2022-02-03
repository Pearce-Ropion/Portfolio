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

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&display=swap"
                rel="stylesheet"
            />

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
