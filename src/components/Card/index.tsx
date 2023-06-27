import classNames from "classnames";

interface CardProps {
    children: React.ReactNode;
    className?: string | string[];
}

export const Card = ({
    className,
    children,
}: CardProps) => {
    return (
        <div className={classNames("card", className)}>
            {children}
        </div>
    );
};