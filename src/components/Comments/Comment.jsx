import { ThumbsUp, Trash } from "phosphor-react"
import style from "./Comment.module.css"
import { Avatar } from "../Avatar/Avatar"
import { useState } from "react"

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleCommentDelete() {
        onDeleteComment(content)
        
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={style.Comment}>
            <Avatar hasBorder={false} src="https://pbs.twimg.com/profile_images/1703502153229254656/evMDQcpo_400x400.jpg" />

            <div className={style.CommentBox}>
                <div className={style.CommentContent}>
                    <header>
                        <div className={style.AuthorAndTime}>
                            <strong>Devon Lane</strong>

                            <time title="February 15th at 11 am" dateTime="2024-02-15 09:59:23">Cerca de 1h atrás</time>

                        </div>

                        <button onClick={handleCommentDelete} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}