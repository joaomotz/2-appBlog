import React from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const e = StyleSheet.create({
    viewMenu:{
        flexDirection:"row",
    },
    text:{
        color:"white",
        textAlign:"center",
    },
    btn:{
        backgroundColor:"#303F9F",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 5,
    }
})

const Menu = () => {
    return (
        <View style={e.viewMenu} >
            <Botao title="Inicio" rota=""/>
            <Botao title="Postagens" rota="postagens" />
            <Botao title="Novo" rota="cadastro" />
        </View>
     );
}

const Botao = ( props ) => {
    return(
        <TouchableOpacity style={e.btn} >
            <Link to={`/${props.rota}`}>
                <Text style={e.text} >{props.title}</Text>
            </Link>
        </TouchableOpacity>
    )
}
 
export default Menu ;