
const { getTodosLivros,insereLivro, modificaLivro} = require('../servicos/livro')
const { getLivroPorId } = require('../servicos/livro')

function getLivros(req, res)  {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch (err){
        res.status(500)
        res.send(err.message)
    }
}


function getLivro(req, res)  {
    try{
        const id =  req.params.id
        if(id && Number(id)){
            const livro = getLivroPorId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("Id inválido")
        }
      
    }catch (err){
        res.status(500)
        res.send(err.message)
    }
}


function postLivro(req, res)  {
    try{
        const livroNovo =  req.body
        if(req.body.nome){
            insereLivro(livroNovo)
        res.status(201)
        res.send("livro inserido com sucesso")
        }else{
            res.status(422)
            res.send("O campo nome é obrigatório")
        }
        
    }catch (err){
        res.status(500)
        res.send(err.message)
    }
}

function patchLivro(req, res)  {

    try{
        const id= req.params.id
        const body = req.body

        if(id && Number(id)){
        modificaLivro(body,id)
        res.send("Item modificado com sucesso")
        }else{
            res.status(422)
            res.send("Id inválido")
        }
    }catch(err){
        res.status(500)
        res.send(err.message)
    }
}

// function deleteLivro(req, res)  {

//     try{
//         const id = req.params.id

//         if(id && Number(id)){
//         deletaLivroPorId(id)
//         res.send("livro deletado com sucesso")
//         }else{
//             res.status(422)
//             res.send("Id inválido")
//         }
//     }catch(err){
//         res.status(500)
//         res.send(err.message)
//     }
// }
module.exports ={
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    // deleteLivro
}