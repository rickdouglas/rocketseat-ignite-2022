import styles from '../styles/Post.module.css'
import profileImg from '../assets/profile.png'
import { Comment } from './Comment'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={profileImg} />
                    <div className={styles.authorInfo}>
                        <strong>Rick Douglas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de outubro as 12:30' dateTime='2022-10-12 18:42:30'>Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href=''> jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto </a>
                    <a href="">#nlw </a>
                    <a href>#rocketseat</a>
                </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
} 