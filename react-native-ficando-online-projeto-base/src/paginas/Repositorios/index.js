import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { pegarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios';
import { useIsFocused } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused()//useIsFocused é um hook que retorna true se a tela estiver em foco e false se não estiver

    useEffect(async()=>{//useEffect com async que faz a requisição dos repositórios do usuário
         const resultado = await pegarRepositoriosDoUsuario(route.params.id)//pega o id do usuário da rota
         setRepo(resultado)//atualiza a quantidade de repoisitorios do usuario
    },[estaNaTela])

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio',{id: route.params.id})}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>

            <FlatList
                data={repo}
                style={{width: '100%'}}
                keyExtractor={repo => repo.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', {item})}
                    >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizar em {item.name}</Text>

                    </TouchableOpacity>
                )}
                >
            </FlatList>
        </View>
    );
}
