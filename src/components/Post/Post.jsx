import style from "./Post.module.css"

import { Comment } from "../Comments/Comment"
import { Avatar } from "../Avatar/Avatar"

export function Post(props) {
    return (
        <article className={style.Post}>
            <header>
                <div className={style.author}>
                    <Avatar src="https://i.pinimg.com/75x75_RS/4d/78/9a/4d789a20ce3303751cb656b47550908a.jpg" />

                    <div className={style.authorInfo}>
                        <strong>Jane Floren</strong>
                        <span>UI/UX</span>
                    </div>
                </div>

                <time title="February 15th at 11 am" dateTime="2024-02-15 09:59:23">Publicado há 1h</time>
            </header>

            <div className={style.content}>

                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto </a>{' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat</a>
                </p>

            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário "
                />
                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={style.CommentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}