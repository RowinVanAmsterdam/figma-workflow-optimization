export const getTsxContent = (componentName: string, viewBox: string, svgContent: string) =>
`export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg${viewBox} width="1em" height="1em" fill="currentColor" focusable="false" {...props}>
            ${svgContent}
        </svg>
    );
};`;
