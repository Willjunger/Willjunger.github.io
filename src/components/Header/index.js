import React from "react";
import "./style.css";

import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/images/logo.png";

export default function Header() {
	return (
		<header>
			<div className="container">
				<img src={Logo} alt="logo" className="logo" />
				<ul className="lista-link">
					<li>
						<Link smooth to="#principal">
							Principal
						</Link>
					</li>
					<li>
						<Link smooth to="#restaurante">
							Restaurantes
						</Link>
					</li>
					<li>
						<Link smooth to="#sobre">
							Sobre
						</Link>
					</li>
					<li>
						<Link smooth to="#contato">
							Contato
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
