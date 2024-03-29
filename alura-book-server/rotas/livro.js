
const { Router } = require("express")
const { getLivros,getLivro, postLivro, patchLivro} = require ("../controladores/livro")
const router = Router() 

router.get('/', getLivros )

//get por id:
router.get('/:id', getLivro )

router.post('/', postLivro)

router.patch('/:id',patchLivro)

// router.delete('/:id', deleteLivro)


module.exports = router
