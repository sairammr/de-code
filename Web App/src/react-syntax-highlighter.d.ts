declare module 'react-syntax-highlighter' {
    import * as React from 'react';

    export const Prism: React.FC<any>;
    export const Light: React.FC<any>;
    export const Dark: React.FC<any>;
    export const SolarizedDark: React.FC<any>;
    export const SolarizedLight: React.FC<any>;

    // Add other components or types as needed
}
declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
    const styles: any;
    export default styles;
}
// react-syntax-highlighter-styles.d.ts
declare module 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark' {
    const solarizedDark: any;
    export default solarizedDark;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
    const styles: any;
    export default styles;
}

