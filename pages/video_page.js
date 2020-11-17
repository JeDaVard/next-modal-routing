import Layout from '../components/layout'
import styled from 'styled-components'

export default function VideoPage() {
	return (
		<Layout>
	        <Video>
         		 <video playsInline loop autoPlay controls src="https://cdn.mml360.co/stories/videos/000/000/124/original/mp4/video_576.mp4"/>
        	</Video>
		</Layout>
		)
}

const Video = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
  video {
	width: 380px;
	height: 600px;
	object-fit: cover;
	outline: none;
  }
`