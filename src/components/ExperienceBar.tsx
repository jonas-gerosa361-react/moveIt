import { useContext } from 'react';
import styles from '../styles/components/ExperienceBar.module.css';
import { ChallengesContext } from './contexts/ChallengeContext';

export function ExperienceBar() {

    const { currentExperience, experienceNeeded } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceNeeded;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>
                {experienceNeeded} xp
            </span>
        </header>
    );
}