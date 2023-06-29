import classNames from "classnames";

interface TagProps {
    className?: string | string[];
    items: string[];
}

export const Tags = ({
    className,
    items,
}: TagProps) => {
    return (
        <div className={classNames("tags", className)}>
            {items.map(tag => (
                <span key={tag} className="tags__item">{tag}</span>
            ))}
        </div>
    );
};