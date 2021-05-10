var x = 0;

export function none() { x = 0 }

export function grayscale({ data: d }) {
    let y = d.length * x;
    console.log(x);
    console.log(y);
    for (let i = 0; i < d.length; i += 4 + x) {
        const [r, g, b] = [d[i], d[i + 1], d[i + 2]];
        d[i] = d[i + 1] = d[i + 2] = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    x++;
};