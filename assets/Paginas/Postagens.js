import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Artigo from '../Componentes/Artigo';

const Postagens = (props) => {
    
    const [exibeModal, setExibeModal] = React.useState(false);
    const [artigoSelecionado, setArtigoSelecionado] = React.useState(null);

    const abreModal = (p) =>{
        setExibeModal(true)
        setArtigoSelecionado(p)
    }

    return (
        <View>

            <Text style={e.title}>Conradito Blog</Text>

            {
            props.postagens == 0 ? <Text> Nenhuma postagem encontrada </Text> : 

            <View>
            {
                props.postagens.map(p => {
                    return<View key={p.id}>
                        <View style={e.container} >
                            <Text style={e.text} >{p.titulo}</Text>
                            <TouchableOpacity style={e.btn} onPress={ ()=> abreModal(p) } >
                                <Text style={e.textbtn}>Saiba mais</Text>
                            </TouchableOpacity>
                        </View>
                </View> 

                })
            }
            </View>
            }

            <Artigo titulo={artigoSelecionado?.titulo} descricao={artigoSelecionado?.descricao} exibeModal={exibeModal} setExibeModal={setExibeModal} />

        </View>      
     );
}

const e = StyleSheet.create({
    container:{
        margin:20,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth: 1,
        borderColor: "#CCC",
    },
    text:{
        fontWeight:"bold",
        fontSize: 15,
    },
    title:{
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
    },
    textbtn:{
        color:"white",
        
    },
    btn:{
        backgroundColor:"#303F9F",
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
})
 
export default Postagens;