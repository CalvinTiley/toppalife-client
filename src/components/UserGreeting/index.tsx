import { useUserGreeting } from "./useUserGreeting";

export const UserGreeting = () => {
    const { avatar, name } = useUserGreeting();

    return (
        <div className="user-greeting">
            <div className="user-greeting__photo">
                {avatar}
            </div>

            <div className="user-greeting__text">
                <p className="user-greeting__welcome">Hello!</p>

                <p className="user-greeting__name">{name}</p>
            </div>
        </div>
    );
};