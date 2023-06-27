import { DashProjectCard } from "../../types/card";
import { Card } from "../Card";

interface DashProjectsProps {
    cards: DashProjectCard[];
}

export const DashProjects = ({
    cards,
}: DashProjectsProps) => {
    return (
        <div className="dash-projects">
            {cards.map(item => (
                <Card className="card--dash-projects">
                    <div className="card__tags">
                        <div className="card__tag"></div>
                    </div>
                </Card>
            ))}
        </div>
    );
};