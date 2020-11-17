import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Modal from '../components/Modal'

export default function Home() {
  const router = useRouter()
  return (
    <Layout>
      <div style={{padding: '50px'}}>
        <h3>
          Welcome Home
        </h3>
        <p>
          Click on WATCH to open the modal with video, and then refresh the page
        </p>
      </div>
       <Modal isOpen={!!router.query.video_page} onClose={() => router.back()}>
              <video playsInline loop autoPlay controls src="https://cdn.mml360.co/stories/videos/000/000/124/original/mp4/video_576.mp4"/>
       </Modal>
    </Layout>
  )
}
