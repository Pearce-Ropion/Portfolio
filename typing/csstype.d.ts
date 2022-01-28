import * as CSS from 'csstype';

declare module 'csstype' {
    interface Properties {
        '--fa-primary-color'?: CSS.Property.Color;
        '--fa-primary-opacity'?: CSS.Property.Opacity;

        '--fa-secondary-color'?: CSS.Property.Color;
        '--fa-secondary-opacity'?: CSS.Property.Opacity;
    }

    interface PropertiesFallback {
        '--fa-primary-color'?: CSS.Property.Color;
        '--fa-primary-opacity'?: CSS.Property.Opacity;

        '--fa-secondary-color'?: CSS.Property.Color;
        '--fa-secondary-opacity'?: CSS.Property.Opacity;
    }
}
