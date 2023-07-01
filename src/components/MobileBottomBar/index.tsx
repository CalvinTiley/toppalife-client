import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/svg/projects.svg";
import { ReactComponent as CalendarIcon } from "../../assets/svg/calendar.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/settings.svg";
import { ReactComponent as AddIcon } from "../../assets/svg/add.svg";
import { Button } from "../Button";
import Icon from "../Icon";

export const MobileBottomBar = () => {
    return (
        <footer className="mobile-bottom-bar">
            <nav className="mobile-bottom-bar__container">
                <div className="mobile-bottom-bar__column mobile-bottom-bar__column--left">
                    <Button className="button--mobile-bar-navigation" aria-label="Home Link" isNavLink href="/">
                        <Icon component={HomeIcon} />
                    </Button>

                    <Button className="button--mobile-bar-navigation" aria-label="Projects Link" isNavLink href="/projects">
                        <Icon component={ProjectsIcon} />
                    </Button>
                </div>

                <Button className="button--mobile-bar-center" aria-label="Add Task Link">
                    <Icon component={AddIcon} />
                </Button>

                <div className="mobile-bottom-bar__column mobile-bottom-bar__column--right">
                    <Button className="button--mobile-bar-navigation" aria-label="Calendar Link" isNavLink href="/calendar">
                        <Icon component={CalendarIcon} />
                    </Button>

                    <Button className="button--mobile-bar-navigation" aria-label="Settings Link" isNavLink href="/settings">
                        <Icon component={SettingsIcon} />
                    </Button>
                </div>
            </nav>
        </footer>
    );
};