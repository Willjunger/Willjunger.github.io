import React from "react";
import "./style.css";

export default function Contato() {
	return (
		<section className="section-contato" id="contato">
			<span className="titulo-contato">Entre em contato</span>
			<form className="formulario">
				<label>Nome</label>
				<input type="text" placeholder="Digite seu nome" />
				<label>Email</label>
				<input type="email" placeholder="Digite seu e-mail" />
				<label>Título</label>
				<input type="text" placeholder="Digite o título da sua mensagem" />
				<label>Mensagem</label>
				<textarea rows="8" placeholder="Digite sua mensagem"></textarea>
				<button>Enviar</button>
			</form>
		</section>
	);
}
