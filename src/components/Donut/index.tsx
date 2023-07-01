import classNames from "classnames";
import { useDonut } from "./useDonut";

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
    const {
        halfSize,
        label,
        radius,
        rotateValue,
        strokeDasharray,
    } = useDonut(size, strokeWidth, value, valueLabel);

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
                style={{ strokeWidth }}
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

                {label}
            </text>
        </svg>
    );
}