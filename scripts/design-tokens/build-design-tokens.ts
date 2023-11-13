import StyleDictionaryPackage from "style-dictionary";
import { transformToEm } from "./helpers/transformToEm";
import { transformToPixels } from "./helpers/transformToPixels";

const sourcePath = "./src/design-tokens";
const outputPath = "./src/design-tokens/generated";
const tokenFilesToGenerate = ["design-tokens"];
const tokensToPx = ["fontSize", "spacing", "borderRadius", "borderWidth", "sizing", "dimension"];
const tokensToEm = ["letterSpacing"];

/**
 * Transform values to px
 */
StyleDictionaryPackage.registerTransform({
    name: "size/px",
    type: "value",
    matcher: (prop: any) => tokensToPx.includes(prop.attributes.category),
    transformer: (token: any) => transformToPixels(token.value.toString()),
});

/**
// Transform values to em
 */
StyleDictionaryPackage.registerTransform({
    name: "size/em",
    type: "value",
    transitive: true,
    matcher: (token: any) => tokensToEm.includes(token.type),
    transformer: (token: any) => transformToEm(token.value.toString()),
});

function getStyleDictionaryConfig(theme: string) {
    return {
        source: [`${sourcePath}/${theme}.json`],
        platforms: {
            css: {
                transforms: ["attribute/cti", "name/cti/kebab", "size/px", "size/em"],
                buildPath: `${outputPath}/css/`,
                files: [
                    {
                        destination: `${theme}.css`,
                        format: "css/variables",
                        selector: `.${theme}-theme`,
                    },
                ],
            },
            js: {
                name: "theme",
                transformGroup: "js",
                transforms: ["attribute/cti", "name/cti/pascal", "size/px", "size/em"],
                buildPath: `${outputPath}/js/`,
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

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT BRANDS AND PLATFORMS
tokenFilesToGenerate.map(function (theme) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

    StyleDictionary.buildPlatform("css");
    StyleDictionary.buildPlatform("js");

    console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
