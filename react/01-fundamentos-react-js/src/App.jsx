import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post";
import './styles/global.css'
import styles from './App.module.css';
import profileImg from './assets/profile.png'

function App() {

  const mockPost = [
    {
      id: 1,
      author: {
        avatarUrl: {profileImg},
        name: 'Rick',
        role: 'front-end developer'
      },
      content: [
        { type: 'paragraph', content:'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'👉 jane.design/doctorcare' }

      ],
      publishedAt: new Date('2022-10-23 11:35:23'),
    },
    {
      id: 2,
      author: {
        avatarUrl: {profileImg},
        name: 'Teste',
        role: 'back-end developer'
      },
      content: [
        { type: 'paragraph', content:'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'👉 jane.design/doctorcare' }

      ],
      publishedAt: new Date('2022-05-17 11:35:23'),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {mockPost.map(post => {
            return(
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
