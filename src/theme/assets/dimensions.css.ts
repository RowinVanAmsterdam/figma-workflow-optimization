import data from '../../../tokens/export-tokens.json';
import { dimensionSm } from '../../../build/js/variables.js'

const scale = data.core.dimension.scale.value;

export const dimensions = {
    xs: data.core.dimension.xs.value,
    sm: dimensionSm
};