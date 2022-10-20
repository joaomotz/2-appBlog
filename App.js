import { View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Inicio from './assets/Paginas/Inicio';
import Menu from './assets/Componentes/Menu';
import Cadastro from './assets/Paginas/Cadastro';
import Postagens from './assets/Paginas/Postagens';
import React from 'react';

export default function App() {

	const banco = [
		{id:1,titulo:"O que é HTML",descricao:"Usado para criar sites"},
		{id:2,titulo:"Estilos de CSS",descricao:"Modifica os estilos do HTML"},
		{id:3,titulo:"JavaScript",descricao:"Linguagem de programação da web"},
	]

	const [ postagens , setPostagens ] = React.useState( banco );

	const insere = (postagem) => {
		setPostagens([...postagens, postagem]);
	}

	return (
		<View>
			<NativeRouter>

				<Menu/>

				<Routes>
					<Route path='/' element={<Inicio/>} />
					<Route path='/cadastro' element={<Cadastro insere={insere} postagens={postagens} setPostagens={setPostagens} />} />
					<Route path='/postagens' element={<Postagens postagens={postagens} />} />
				</Routes>

			</NativeRouter>
		</View>
  	);
}