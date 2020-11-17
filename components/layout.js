import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Layout = (props) => {
	const router = useRouter()

	return (
			<div>
				<Nav>
					<ul>
						<li>
							<Link href="/">
								<a>HOME</a>
							</Link>
						</li>
						{router.route.startsWith('/video') ? (<li>
													<a href="#">..playing...</a>
												</li>) :  <li>
							<Link href="/?video_page=letsSaySomeVideoID" as="/video_page">
								<a>WATCH</a>
							</Link>
						</li>}

						
					</ul>
				</Nav>
				{props.children}
			</div>	
		)
}

export default Layout

const Nav = styled.nav`
	background: purple; 
	padding: 10px;

	ul {
		list-style: none;
	}
	ul li {
		cursor: pointer;
		display: inline-block;
		margin-right: 20px
	}
`