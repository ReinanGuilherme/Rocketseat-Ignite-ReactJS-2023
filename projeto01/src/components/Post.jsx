import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://avatars.githubusercontent.com/u/103908900?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Reinan Guilherme</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio ás 08:13' dateTime='2023-02-04 15:15'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de subir mais um projeto no meu portifolio.</p>
                <p><a href="#">ReinanGuilherme</a></p>
                <p><a href="#">#novoprojeto #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}