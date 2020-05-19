import React from "react";
import "./style.css";

import Principal from "../Principal";
import Restaurantes from "../Restaurantes";
import Sobre from "../Sobre";
import Contato from "../Contato";
import Footer from "../Footer";
import Criado from "../Criado";

export default function Home() {
	return (
		<div>
			<Principal />
			<Restaurantes />
			<Sobre />
			<Contato />
			<Footer />
			<Criado />
		</div>
	);
}
