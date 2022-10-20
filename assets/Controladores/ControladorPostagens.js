import React from 'react';

export class ControladorPostagens extends React.Component{

    static insere (postagem){
        setPostagens([...postagens, postagem]);
    }
    
    static state = React.useState( [
        {id:1,titulo:"O que é HTML",descricao:"Usado para criar sites"},
        {id:2,titulo:"Estilos de CSS",descricao:"Modifica os estilos do HTML"},
        {id:3,titulo:"JavaScript",descricao:"Linguagem de programação da web"},
    ]  );

    static setPostagens = state[1];

    static getPostagens() {

        return state [0];
    }

}