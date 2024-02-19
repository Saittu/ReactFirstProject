import { Post } from './components/Post/Post'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar/SideBar'

 
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      AvatarUrl: 'https://i.pinimg.com/75x75_RS/4d/78/9a/4d789a20ce3303751cb656b47550908a.jpg',
      name: 'Jane Floren',
      role: "UI"
    },
    content: [
                { type: 'paragraph', content: 'Fala galeraa 👋'},

                { type: 'paragraph', content: 'Acabei de subir mas um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

                { type: 'link', content: 'jane.design/doctorcare' }, 
    ],
    publishedAt: new Date('2024-02-18 20:00:00')
  },

  {
    id: 2,
    author: {
      AvatarUrl: 'https://i.pinimg.com/236x/94/d7/0f/94d70f63dfa0db8020b0333168a3b606.jpg',
      name: 'Devon Lane',
      role: "Dev front-end"
    },
    content: [
                { type: 'paragraph', content: 'Fala pessoal 👋'},

                { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},

                { type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design' }, 
    ],
    publishedAt: new Date('2024-02-18 23:34:01')
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
            {posts.map(post =>{
              return (
                <Post
                key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}

