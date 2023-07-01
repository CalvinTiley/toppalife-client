import { Button } from "../Button";
import { useUserGreeting } from "./useUserGreeting";
import { ReactComponent as NotificationsIcon } from "../../assets/svg/notifications.svg";
import Icon from "../Icon";

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

            <Button className="button--user-greeting-notification">
                <Icon component={NotificationsIcon} />
            </Button>
        </div>
    );
};