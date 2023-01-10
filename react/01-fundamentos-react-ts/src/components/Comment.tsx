import styles from '../styles/Comment.module.css';
import profileImg from '../assets/profile.png'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content:string,
    onDeleteComment: (comment:string) => void
}

export function Comment({content, onDeleteComment}:CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeCount() {
        setLikeCount((likes) => {return likes +1})
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={profileImg} alt='' /> 
            
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
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>  
                    </button>
                </footer>
            </div>
        </div>
    )
}