import sytles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    return (
        <div className={sytles.completedChallengsContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}