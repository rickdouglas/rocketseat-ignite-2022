import styles from '../styles/Post.module.css'
import profileImg from '../assets/profile.png'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([]);

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    const publishedDateRelative = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    function handleCreateComment(event) {
        event.preventDefault()
        setComments([...comments, comments.length + 1]);
    }
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={profileImg} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelative}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if (line.type === 'link') {
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div> 
        </article>
    )
} 