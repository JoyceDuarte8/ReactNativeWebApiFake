import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import { buscaUsuario } from '../../servicos/requisicoes/usuarios';


export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

async function busca(){
        const resultado = await buscaUsuario(nomeUsuario)
        setNomeUsuario('')//limpa o campo de busca

        // Verifica se o resultado é verdadeiro
        if(resultado){
            setUsuario(resultado)
        }   
        else{
            Alert.alert('Usuário não encontrado')
            
            setUsuario({})//limpa o campo de busca
        }

    }

    return (
        <ScrollView>
            <View style={estilos.container}>
            {
                usuario?.login && //se usuario.login for verdadeiro
                //existir, exibe o que está abaixo que são os campos de foto e informações 
                <>
                    <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                    </View>
                    <Text style={estilos.textoNome}>{usuario.name}</Text>
                    <Text style={estilos.textoEmail}>{usuario.email}</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                            <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                        </View>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                            <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios',{id:usuario.id})}> 
                        <Text style={estilos.repositorios}>
                            Ver os repositórios
                        </Text>
                    </TouchableOpacity>
                </>
            }

                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}//função que atualiza o que foi digitao e inputado no perfil
                />
                
                <TouchableOpacity style={estilos.botao}
                    onPress={busca}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
