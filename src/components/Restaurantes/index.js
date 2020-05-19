import React from "react";
import "./styles.css";

import Rest1 from "../../assets/images/rest1.jpg";
import Rest2 from "../../assets/images/rest2.jpeg";
import Rest3 from "../../assets/images/rest3.jpg";

export default function Restaurantes() {
	return (
		<section className="lista-restaurantes" id="restaurante">
			<h1 className="titulo-section">Nossos Restaurantes</h1>
			<div className="restaurantes">
				<div className="restaurante">
					<img src={Rest1} alt="restaurante 1" />
					<span>Absolutto</span>
					<p>Silvio Santos Ipsum Ha hai. Bem boladoam, bem boladoam. Bem gozadoam. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? O arriscam tuduam, valendo um milhão de reaisuam. Eu só acreditoammmm.... Vendoammmm. É por sua conta e riscoamm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Você veio da caravana de ondeammm?</p>
				</div>
				<div className="restaurante">
					<img src={Rest2} alt="restaurante 2" />
					<span>Nejar</span>
					<p>Silvio Santos Ipsum Ha hai. Bem boladoam, bem boladoam. Bem gozadoam. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? O arriscam tuduam, valendo um milhão de reaisuam. Eu só acreditoammmm.... Vendoammmm. É por sua conta e riscoamm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Você veio da caravana de ondeammm?</p>
				</div>
				<div className="restaurante">
					<img src={Rest3} alt="restaurante 3" />
					<span>SibiPirina</span>
					<p>Silvio Santos Ipsum Ha hai. Bem boladoam, bem boladoam. Bem gozadoam. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? O arriscam tuduam, valendo um milhão de reaisuam. Eu só acreditoammmm.... Vendoammmm. É por sua conta e riscoamm? Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Você veio da caravana de ondeammm?</p>
				</div>
			</div>
		</section>
	);
}
