import { useMemo, useState } from "react";

export const UserGreeting = () => {
    const [name] = useState<string>("Calvin Tiley");
    const initial = useMemo(() => name[0], [name]);
    const [image] = useState<string | null>(null);

    return (
        <div className="user-greeting">
            <div className="user-greeting__photo">
                {image ? (
                    <img src={image} />
                ) : (
                    <p className="user-greeting__initial">{initial}</p>
                )}
            </div>

            <div className="user-greeting__text">
                <p className="user-greeting__welcome">Hello!</p>

                <p className="user-greeting__name">Calvin Tiley</p>
            </div>
        </div>
    );
};