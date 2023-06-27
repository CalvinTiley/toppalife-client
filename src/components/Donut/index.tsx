import classNames from "classnames";

interface DonutProps {
    className?: string | string[];
    value: number;
    valueLabel?: string;
    size: number;
    strokeWidth?: number;
}

export const Donut = ({
    className,
    value = 30,
    valueLabel,
    size = 100,
    strokeWidth = 12,
}: DonutProps) => {
    const halfSize = (size * 0.5);
    const radius = halfSize - (strokeWidth * 0.5);
    const circumference = 2 * Math.PI * radius;

    const strokeValue = ((value * circumference) / 100);
    const strokeDasharray = `${strokeValue} ${circumference}`;

    const rotateValue = `rotate(-90 ${halfSize}, ${halfSize})`;

    return (
        <svg
            className={classNames("donut", className)}
            width={size}
            height={size}
        >
            <circle
                className="donut__track"
                r={radius}
                cx={halfSize}
                cy={halfSize}
                transform={rotateValue}
                style={{ strokeWidth: strokeWidth }}
            />

            <circle
                className="donut__progress"
                r={radius}
                cx={halfSize}
                cy={halfSize}
                transform={rotateValue}
                style={{ strokeWidth, strokeDasharray }}
            />

            <text
                className="donut__text"
                x={halfSize}
                y={halfSize}
                style={{ textAnchor: "middle" }}
            >
                <tspan className="donut__value">{value}</tspan>

                <tspan className="donut__percent">%</tspan>

                {valueLabel ? (
                    <tspan
                        className="donut__value-label"
                        x={halfSize}
                        y={halfSize + 10}
                    >
                        {valueLabel}
                    </tspan>
                ) : null}
            </text>
        </svg>
    );
}