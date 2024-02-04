//Função: Realiza a requisição E DE BUSCA DE UM USUÁRIO para a API e retorna os dados do usuário
import api from '../api'

export async function buscaUsuario(nomeUsuario){
    try{
        const resultado = await api.get(`/users?login=${nomeUsuario}`);
        return resultado.data[0];
    }
    catch(error){
        console.log(error);
        return {}
    }
}