import classNames from "classnames";
import { useTags } from "./useTags";

interface TagProps {
    className?: string | string[];
    items: string[];
}

export const Tags = ({
    className,
    items,
}: TagProps) => {
    const { tags } = useTags(items);

    return (
        <div className={classNames("tags", className)}>
            {tags}
        </div>
    );
};