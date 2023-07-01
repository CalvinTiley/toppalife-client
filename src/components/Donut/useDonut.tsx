export const useDonut = (size: number, strokeWidth: number, value: number, valueLabel = "") => {
    const halfSize = (size * 0.5);
    const radius = halfSize - (strokeWidth * 0.5);
    const circumference = 2 * Math.PI * radius;

    const strokeValue = ((value * circumference) / 100);
    const strokeDasharray = `${strokeValue} ${circumference}`;

    const rotateValue = `rotate(-90 ${halfSize}, ${halfSize})`;

    const label = valueLabel ? (
        <tspan
            className="donut__value-label"
            x={halfSize}
            y={halfSize + 10}
        >
            {valueLabel}
        </tspan>
    ) : null

    return {
        halfSize,
        label,
        radius,
        rotateValue,
        strokeDasharray,
    };
};