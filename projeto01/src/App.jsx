import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ReinanGuilherme.png',
      name: 'Reinan Guilherme',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio, É um projeto que fiz no NLW return.'},
      {type: 'link', content: 'reinan.guilherme/doctorcare'}
    ],
    publishedAt: new Date('2023-03-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio, É um projeto que fiz no NLW return.'},
      {type: 'link', content: 'reinan.guilherme/doctorcare'}
    ],
    publishedAt: new Date('2023-03-05 20:00:00')
  },
]

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
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

export default App
