const StyleDictionaryPackage = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

/**
 * Helper: Transforms dimensions to px
 */
function transformToPixels(value: string) {
    if (value.endsWith("px")) {
        return value;
    }
    return value + "px";
}

/**
 * Helper: Transforms letter spacing % to em
 */
function transformToEm(value: any) {
    if (value.endsWith("%")) {
        const percentValue = value.slice(0, -1);
        return `${percentValue / 100}em`;
    }
    return value;
}

/**
 * Transform fontSizes to px
 */
StyleDictionaryPackage.registerTransform({
    name: "size/px",
    type: "value",
    matcher: function (prop: any) {
        return ["fontSize", "spacing", "borderRadius", "borderWidth", "sizing", "dimension"].includes(prop.attributes.category);
    },
    transformer: (token: any) => transformToPixels(token.value.toString()),
});

/**
 * Transform letterSpacing to em
 */
StyleDictionaryPackage.registerTransform({
    name: "size/em",
    type: "value",
    transitive: true,
    matcher: (token: any) => token.type === "letterSpacing",
    transformer: (token: any) => transformToEm(token.value.toString()),
});

function getStyleDictionaryConfig(theme: string) {
    console.log("theme", theme);
    return {
        source: [`tokens/${theme}.json`],
        platforms: {
            css: {
                transforms: ["attribute/cti", "name/cti/kebab", "size/px", "size/em"],
                buildPath: `output/css/`,
                files: [
                    {
                        destination: `${theme}.css`,
                        format: "css/variables",
                        selector: `.${theme}-theme`,
                    },
                ],
            },
            js: {
                transformGroup: "js",
                transforms: ["attribute/cti", "name/cti/pascal", "size/px", "size/em"],
                buildPath: `output/js/`,
                files: [
                    {
                        destination: `${theme}.js`,
                        format: "javascript/es6",
                    },
                ],
            },
        },
    };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

["transformed-tokens"].map(function (theme) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

    StyleDictionary.buildPlatform("css");
    StyleDictionary.buildPlatform("js");

    console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
