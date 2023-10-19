import data from '../../../tokens/export-tokens.json';

const scale = data.core.dimension.scale.value;

function calculateValue(expression: string): number {
  const tokens = expression.match(/[^{}]+/g);

  if (tokens) {
    const dimensions = data.core.dimension;

    let result = tokens.reduce((acc, token) => {
      console.log('token', token)
      const dimensionValue = parseFloat(token);
      return acc * dimensionValue;
    }, 1);

    return result;
  }

  return parseFloat(expression) || 0;
}

export const dimensions = {
    xs: data.core.dimension.xs.value,
    sm: calculateValue(data.core.dimension.sm.value),
  };