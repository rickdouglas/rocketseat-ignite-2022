import styles from '../styles/Comment.module.css';
import profileImg from '../assets/profile.png'
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src={profileImg} />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Rick Douglas</strong>
                            <time title='11 de outubro as 12:30' dateTime='2022-10-12 18:42:30'>Publicado ha 1h</time>
                        </div>
                        <button title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>  
                    </button>
                </footer>
            </div>
        </div>
    )
}