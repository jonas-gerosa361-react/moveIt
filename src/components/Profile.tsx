import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jonas-gerosa361.png" alt="Imagem de perfil do usuário Jonas Gerosa"/>
            <div>
                <strong>Jonas Gerosa</strong>
                <p>
                    <img src="icons/level.svg" alt="icone de level up"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}