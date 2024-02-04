//conter as funções de requisição para a fake API

import api from '../../servicos/api';

export async function pegarRepositoriosDoUsuario(id){
    try{
        const resposta = await api.get(`/repos?postId=/${id}`)
        return resposta.data
    }catch(erro){
        return []
    }
}   


export async function salvarRegarRepositoriosDoUsuario(postId,nome,data,id){
    try{
           await api.put(`/repos/${id}`,{
             name: nome,
             data: data,
             postId:postId,
             id:id
        } )
        return "sucesso"
    }catch(erro){
        return "erro"
    }
}
    export async function criarRepositoriosDoUsuario(postId,nome,data){
        try{
               await api.post(`/repos`,{
                 name: nome,
                 data: data,
                 postId:postId,
            } )
            return "sucesso"
        }catch(erro){
            return "erro"
        }
    }


        export async function deletarRepositoriosDoUsuario(id){
            try{
                await api.delet(`/repos/${id}` )
                return "sucesso"
            }catch(erro){
                return "erro"
            }
        }