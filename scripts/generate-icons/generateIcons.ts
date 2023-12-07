import { promises as fs, existsSync } from "fs";
import path from "path";
import { optimize } from "svgo";
import { toPascalCase } from "./helpers/toPascalCase";
import { getTsxContent } from "./helpers/getTsxContent";

const svgFolder = "./src/foundation/Icons/svg";
const tsxFolder = "./src/foundation/Icons/tsx";

async function convertSVGsToTSX() {
    try {
        // Create the output folder if it doesn't exist
        if (!existsSync(tsxFolder)) {
            await fs.mkdir(tsxFolder, { recursive: true });
        }

        const files = await fs.readdir(svgFolder);

        for (const file of files) {
            if (path.extname(file) === ".svg") {
                const svgPath = path.join(svgFolder, file);
                const svgContent = await fs.readFile(svgPath, "utf8");
                const optimizedSVG = optimize(svgContent, { path: svgPath });

                // Convert file name to PascalCase
                const componentName = toPascalCase(file.replace(".svg", "")) + "";
                const viewBoxMatch = svgContent.match(/viewBox=["'](.*?)["']/);
                const viewBox = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : "";

                // Remove SVG tags
                optimizedSVG.data = optimizedSVG.data.replace(/<svg[^>]*>|<\/svg>/g, "");

                const tsxContent = getTsxContent(componentName, viewBox, optimizedSVG.data);

                const tsxFilePath = path.join(tsxFolder, `${componentName}.tsx`);
                await fs.writeFile(tsxFilePath, tsxContent);
            }
        }
        console.log("Converted SVGs to TSX successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

convertSVGsToTSX();
