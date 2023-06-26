import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as AddIcon } from "../../assets/svg/add.svg";
import { Button } from "../Button";
import Icon from "../Icon";

export const MobileBottomBar = () => {
    return (
        <footer className="mobile-bottom-bar">
            <div className="mobile-bottom-bar__container">
                <div className="mobile-bottom-bar__column mobile-bottom-bar__column--left">
                    <Button className="button--mobile-bar-navigation">
                        <Icon component={HomeIcon} />
                    </Button>

                    <Button className="button--mobile-bar-navigation">
                        <Icon component={HomeIcon} />
                    </Button>
                </div>

                <Button className="button--mobile-bar-center">
                    <Icon component={AddIcon} />
                </Button>

                <div className="mobile-bottom-bar__column mobile-bottom-bar__column--right">
                    <Button className="button--mobile-bar-navigation">
                        <Icon component={HomeIcon} />
                    </Button>

                    <Button className="button--mobile-bar-navigation">
                        <Icon component={HomeIcon} />
                    </Button>
                </div>
            </div>
        </footer>
    );
};