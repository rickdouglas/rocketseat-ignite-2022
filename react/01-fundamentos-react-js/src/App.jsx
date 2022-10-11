import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './styles/global.css'
import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Aqui vai ficar os posts</p>
        </main>
        
      </div>
    </div>
  )
}

export default App
