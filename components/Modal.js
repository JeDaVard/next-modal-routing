import styled from 'styled-components'

export default function Modal(props) {
	return (
		<>
			{
				props.isOpen && (
						<Back>
							<Close>
								<button onClick={props.onClose}>CLOSE</button>
							</Close>
							<Container>
								<h1>Modal</h1>
								{props.children}
							</Container>
						</Back>
					)
			}
		</>
	)
}

const Close = styled.div`
	position: absolute;
	left: 20px;
	top: 20px;
	cursor: pointer;	

	button {
		background: darkslateblue;
		outline: none;
		border: none;
		cursor: pointer;
		width: 60px;
		height: 60px;
		border-radius: 3px;
		color: white;
	}
`

const Back = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	height: 100vh;
	top: 0;
	background: rgba(0,0,0,.2);
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 90;
`

const Container = styled.div`
	margin: 0 auto;
	width: 400px;
	height: 600px;
	border: 10px solid DarkSlateBlue;
	z-index: 100;
	border-radius: 3px;

	video {
		width: 380px;
		height: 498px;
		object-fit: cover;
		outline: none;
	}
	h1 {
		text-align: center
	}
`