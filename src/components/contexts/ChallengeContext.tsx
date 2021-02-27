import { createContext, ReactNode, useState } from 'react';


interface challengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void; 
}

interface challengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({});

export function challengesProvider({ children } : challengesProviderProps) {
    
    const [ level, setLevel ] = useState(1);
    const [ currentExperience, setCurrentExperience ] = useState(0);
    const [ challengesCompleted, setChallengesCompleted ] =useState(0);
    
    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        alert('Começar novo desafio');
    }


    return (
        <ChallengesContext.Provider value={{
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp, 
            startNewChallenge,
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}