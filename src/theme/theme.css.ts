import { createTheme } from '@vanilla-extract/css';
import { vars } from './contract.css';
import { mapDesignTokensToTheme } from './helpers/mapDesignTokensToTheme';
import * as designTokens from '../../output/js/transformed-tokens'; 

export const generatedTheme = createTheme(vars, mapDesignTokensToTheme(designTokens) );
export const generatedDarkTheme = createTheme(vars, mapDesignTokensToTheme(designTokens) );


// export const themeClass = createTheme(vars, {
//     color: {
//       background: '#fff',
//       font: '#222',
//       link: '#748ea5',
//       orange: '#ff9f1c',
//       button: {
//         color: '#516373',
//         hover: {
//           backgroundColor: '#fcfcfd',
//           color: '#516373'
//         }
//       },
//       divider: 'linear-gradient(180deg,#e6e6e6 0,#e6e6e6 48%,#fff)'
//     },
//     font: fonts,
//     breakpoints: {
//       values: breakpoints
//     }
//   });

//   export const darkThemeClass = createTheme(vars, {
//     color: {
//       background: '#1E1E1E',
//       font: '#fff',
//       link: '#cfe2f4',
//       orange: '#ff9f1c',
//       button: {
//         color: '#FFF',
//         hover: {
//           backgroundColor: '#3d3d3d',
//           color: '#FFF'
//         }
//       },
//       divider: 'linear-gradient(180deg,#5c5c5c 0,#5c5c5c 48%,#1E1E1E)'
//     },
//     font: fonts,
//     breakpoints: {
//       values: breakpoints
//     }
//   });