import { createContext, ReactNode, useState } from 'react';
import challenges from '../../../challenges.json';

interface challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface challengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: challenge;
    experienceNeeded: number;
    levelUp: () => void;
    startNewChallenge: () => void; 
    resetChallenge: () => void;
}

interface challengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as challengesContextData);

export function ChallengesProvider({ children } : challengesProviderProps) {
    
    const [ level, setLevel ] = useState(1);
    const [ currentExperience, setCurrentExperience ] = useState(0);
    const [ challengesCompleted, setChallengesCompleted ] =useState(0);
    const experienceNeeded = Math.pow((level + 1) * 4, 2);
    const [ activeChallenge, setActiveChallenge ] = useState(null);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge(challenge) {
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider value={{
            level, 
            currentExperience, 
            challengesCompleted, 
            activeChallenge,
            experienceNeeded,
            levelUp, 
            startNewChallenge,
            resetChallenge,
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}