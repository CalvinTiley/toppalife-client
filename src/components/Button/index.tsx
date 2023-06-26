import classNames from "classnames";
import { Link } from "react-router-dom";

interface ButtonsProps {
    children: React.ReactNode;
    className?: string | string[];
    href?: string;
    onClick?(event?: React.MouseEvent): void;
    variant?: "primary" | "secondary";
}

export const Button = ({
    children,
    className,
    href,
    onClick,
    variant = "primary",
}: ButtonsProps) => {
    return (
        <>
            {href ? (
                <Link
                    to={href}
                    className={classNames("button", "button--link", `button--${variant}`, className)}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={classNames("button", `button--${variant}`, className)}
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
        </>
    );
};