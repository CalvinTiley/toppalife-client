import classNames from "classnames";
import { Tag } from "../../types/tag";

interface TagProps {
    className?: string | string[];
    items: Tag[];
}

export const Tags = ({
    className,
    items,
}: TagProps) => {
    return (
        <div className={classNames("tags", className)}>
            {items.map(item => (
                <span className={classNames("tags__item", `tags__item--${item.variant}`)}>{item.label}</span>
            ))}
        </div>
    );
};