import React from "react";
import classNames from "classnames";

export interface IIconProps {
    className?: string;
    component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    testId?: string;
};

export const Icon: React.FC<IIconProps> = ({
    className,
    component: SVG,
    testId,
}) => (
    <div
        className={classNames("icon", className)}
        data-testid={testId}
    >
        <SVG />
    </div>
);

export default Icon;