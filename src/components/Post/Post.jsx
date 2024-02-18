import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import style from "./Post.module.css"

import { Comment } from "../Comments/Comment"
import { Avatar } from "../Avatar/Avatar"

export function Post({ author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    return (
        <article className={style.Post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.AvatarUrl} />

                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={style.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }    
                })}
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