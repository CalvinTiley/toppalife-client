import classNames from "classnames";

interface ButtonProps {
    children: React.ReactNode;
    testId?: string;
    variant?: "primary" | "secondary";
}

export const Button = ({
    children,
    testId,
    variant = "primary",
}: ButtonProps) => {
    return (
        <button
            className={classNames("button", `button--${variant}`)}
            data-testid={testId}
        >
            {children}
        </button>
    );
};