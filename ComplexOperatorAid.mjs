
// Complex division function
export function complexDivision(a, b) {
    const denominator = b.x * b.x + b.y * b.y;
    
    if (denominator === 0) {
        return { x: NaN, y: NaN };
    }
    
    const real = (a.x * b.x + a.y * b.y) / denominator;
    const imaginary = (a.y * b.x - a.x * b.y) / denominator;

    return { x: real, y: imaginary };
}

// Complex multiplication function
export function complexMultiplication(a, b) {
    const real = a.x * b.x - a.y * b.y;
    const imaginary = a.x * b.y + a.y * b.x;

    return { x: real, y: imaginary };
}

// Complex add function
export function complexAdd(a, b) {
    const real = a.x + b.x;
    const imaginary = a.y + b.y;

    return { x: real, y: imaginary };
}

export function complexAdd3(a, b, c) {
  const real = a.x + b.x + c.x;
  const imaginary = a.y + b.y + c.y;
  
  return { x: real, y: imaginary };
}