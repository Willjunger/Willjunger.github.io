import React from "react";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";

import Logo from "../../assets/images/logo.png";
import "./style.css";

export default function Footer() {
	return (
		<footer className="footer">
			<img src={Logo} alt="logo" className="logo-footer" />
			<div className="redes-sociais">
				<span className="titulo-sociais">Nossas Redes sociais:</span>
				<a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="sociais">
					<GrFacebook size={30} /> <span>Facebook</span>
				</a>
				<a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="sociais">
					<GrInstagram size={30} /> <span>Instagram</span>
				</a>
				<a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="sociais">
					<GrTwitter size={30} /> <span>Twitter</span>
				</a>
			</div>
		</footer>
	);
}
