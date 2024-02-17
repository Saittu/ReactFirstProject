import { ThumbsUp, Trash } from "phosphor-react"
import style from "./Comment.module.css"
import { Avatar } from "../Avatar/Avatar"

export function Comment() {
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

                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}