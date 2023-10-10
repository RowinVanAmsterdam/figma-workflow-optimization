import * as fs from 'fs';
const path = require('path');

// Load the tokens.json file
const tokensFilePath = path.join(__dirname, '../export-tokens.json');
const tokens = require(tokensFilePath);

// Function to generate CSS variable name from token name
function toCssVariableName(tokenName: string): string {
  return `--${tokenName.replace(/\./g, '-')}`;
}

// Function to generate CSS variable declaration
function toCssVariableDeclaration(tokenName: string, tokenValue: string): string {
  return `  ${toCssVariableName(tokenName)}: ${tokenValue};`;
}

// Function to recursively extract token values and generate CSS variables
function extractTokens(tokensObj: Record<string, any>, prefix = ''): string[] {
    let cssVariables: string[] = [];
    for (const [tokenName, tokenData] of Object.entries(tokensObj)) {
      if (typeof tokenData === 'object') {
        // Recursively process nested tokens
        cssVariables = cssVariables.concat(extractTokens(tokenData, `${prefix}${tokenName}.`));
      } else if (tokenData.value) {
        // Extract and format token values as CSS variables
        const cssVariableDeclaration = toCssVariableDeclaration(`${prefix}${tokenName}`, tokenData.value);
        cssVariables.push(cssVariableDeclaration);
  
        // Debugging: Output token name and value
        console.log(`Token Name: ${prefix}${tokenName}`);
        console.log(`Token Value: ${tokenData.value}`);
      }
    }
    return cssVariables;
  }

// Extract CSS variables from the tokens.json file
const cssVariables = extractTokens(tokens);

// Create a CSS file and write the CSS variable declarations
const cssContent = `:root {\n${cssVariables.join('\n')}\n}`;

fs.writeFile('tokens.css', cssContent, (err) => {
  if (err) {
    console.error('Error writing CSS file:', err);
  } else {
    console.log('CSS variables have been written to tokens.css');
  }
});
