import styles from '../styles/Sidebar.module.css'
import profileImg from '../assets/profile.png'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50' 
            />
        
            <div className={styles.profile}>
                <Avatar hasBorder={true} src={profileImg} />
                <strong>Rick Douglas</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}