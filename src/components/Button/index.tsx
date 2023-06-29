import classNames from "classnames";
import { Link } from "react-router-dom";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    onClick?(event?: React.MouseEvent): void;
    variant?: "primary" | "secondary";
}

export const Button = ({
    children,
    className,
    href,
    onClick,
    type = "button",
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
                    type={type}
                >
                    {children}
                </button>
            )}
        </>
    );
};