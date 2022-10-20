import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const Artigo = (props) => {
    return ( 
        <View>
            <Modal animationType='slide' style={e.container} visible={props.exibeModal}>
                <TouchableOpacity onPress={()=>props.setExibeModal(false)} >
                    <Text style={e.fechar}>X</Text>
                </TouchableOpacity>
                <Text style={e.titulo} >{props.titulo}</Text>
                <Text style={e.descricao}>{props.descricao}</Text>
            </Modal>
        </View>
     );
}

const e = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    fechar:{
        textAlign:"right",
        fontSize:25,
        fontWeight: 'bold',
        padding:20,
    },
    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        textAlign:"center",

    },
    descricao:{
        margin:5,
        padding:10,
        borderWidth:1,
        borderColor:"#CCC"
    },
})
 
export default Artigo;