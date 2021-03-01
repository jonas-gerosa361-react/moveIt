import { useContext } from 'react';
import sytles from '../styles/components/CompletedChallenges.module.css';
import { ChallengesContext } from './contexts/ChallengeContext';

export function CompletedChallenges() {

    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={sytles.completedChallengsContainer}>
            <span>
                Desafios Completos
            </span>
            <span>
                {challengesCompleted}
            </span>
        </div>
    );
}