import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import style from "./Post.module.css"

import { Comment } from "../Comments/Comment"
import { Avatar } from "../Avatar/Avatar"
import { useState } from "react"

export function Post({ author, publishedAt, content}) {
    const [comments, setComments ] = useState([
        "post muito bacana em",
    ])

    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    
    function handleCreateNewComment() {
        event.preventDefault()

        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    function deleteComment(commentToDelete){
        const CommentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(CommentsWithoutDeleteOne)
    }

    const isNewCommentInputEmpty = newCommentText.length === 0

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
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }    
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário "
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <footer>
                    <button type="submit" disabled={isNewCommentInputEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={style.CommentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>

        </article>
    )
}