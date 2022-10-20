import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const e = StyleSheet.create({
    container:{
        
    },
    title:{
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
    },
    text:{
        color:"white",
        textAlign:"center",
    },
    textInput:{
        padding:15,
        borderWidth: 1,
        margin:5,
        borderColor: "#CCC"
    },
    btn:{
        marginTop:20,
        backgroundColor:"#303F9F",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 5,
        width:"20%",
        margin:"auto",
    }
})

const Cadastro = (props) => {

    const [ titulo, setTitulo ] = React.useState("");
    const [ descricao , setDescricao ] = React.useState("");

    const salvar = (map) => {

        const postagem = {
            id: map.length + 1 ,
            titulo: titulo,
            descricao: descricao
        }

        props.insere( postagem );

    }

    return ( 
        <View>
            <Text style={e.title} >Cadastro de Postagens</Text>
            <TextInput placeholder='Digite um Titulo' style={e.textInput} onChangeText={(e)=>setTitulo(e)}/>
            <TextInput placeholder='Digite o texto' style={e.textInput} multiline={true} numberOfLines={4} onChangeText={(e)=>setDescricao(e)}/>
            <TouchableOpacity style={e.btn} onPress={()=>salvar(props.postagens)} >
                <Text style={e.text} >
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
     );
}
 
export default Cadastro ;