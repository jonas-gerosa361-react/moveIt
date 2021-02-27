import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            { hasChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe 400 xp
                    </header>
                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                    </main>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Icone de level up"/>
                    Avançe de level completando desafios
                </p>
                </div>
            ) }
            
        </div>
    );
}