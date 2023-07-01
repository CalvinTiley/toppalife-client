import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    isNavLink?: boolean;
    onClick?(event?: React.MouseEvent): void;
    variant?: "primary" | "secondary";
}

export const Button = ({
    children,
    className,
    href,
    onClick,
    variant = "primary",
    isNavLink,
    ...props
}: ButtonsProps) => {
    if (href && isNavLink) {
        return (
            <NavLink
                to={href}
                className={classNames("button", "button--link", `button--${variant}`, className)}
                aria-label={props["aria-label"]}
            >
                {children}
            </NavLink>
        )
    }

    if (href) {
        return (
            <Link
                to={href}
                className={classNames("button", "button--link", `button--${variant}`, className)}
                aria-label={props["aria-label"]}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classNames("button", `button--${variant}`, className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};