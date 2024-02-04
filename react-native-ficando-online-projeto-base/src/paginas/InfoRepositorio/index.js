import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRegarRepositoriosDoUsuario ,deletarRepositoriosDoUsuario} from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function salvar(){
        const resultado = await salvarRegarRepositoriosDoUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id,)
        if(resultado ==="sucesso"){
            Alert.alert("Repositorio atualizado")
            navigation.goBack()
        } 
        
        else{
            Alert.alert("Erro ao atualizar o repositório")
        }

    }


    async function deletar(){
        const resultado = await salvarRegarRepositoriosDoUsuario(route.params.item.id)
        if(resultado ==="sucesso"){
            Alert.alert("Repositorio deletado")
            navigation.goBack()
        } 
        
        else{
            Alert.alert("Erro ao deletar o repositório")
        }


    }



    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}//valor do nome do repositório
                onChangeText={setNome}//atualiza o nome do repositório ao digitar no input e salvar

/>
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}//atualiza o data do repositório
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
