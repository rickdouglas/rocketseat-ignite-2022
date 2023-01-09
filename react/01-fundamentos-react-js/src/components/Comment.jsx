import styles from '../styles/Comment.module.css';
import profileImg from '../assets/profile.png'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {
    function handleDeleteComment() {
        onDeleteComment(content);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={profileImg} /> 
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Rick Douglas</strong>
                            <time title='11 de outubro as 12:30' dateTime='2022-10-12 18:42:30'>Publicado ha 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
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