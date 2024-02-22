import express from 'express';
import { db, firestore } from '../banco_de_dados/firebase';
import cors from "cors"

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({
    "origin":"*",
    "methods":"GET,HEAD,PUT,PATH,POST,DELETE",
}))

app.get('/', (req, res) => {
    res.send('Bem-vindo')
});


app.post('/formulario', async (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone
    const feedback = req.body.feedback

    try {
        const docRef = await firestore.addDoc(firestore.collection(db, 'formulario'), {
            nome: nome,
            email: email,
            telefone: telefone,
            feedback:feedback,
        })
        res.send("Resposta enviada com sucesso" + docRef.id);
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
});

app.get('/listarFormulario', async (req, res) => {
      try{
        const formulario = await firestore.getDocs(firestore.collection(db, 'formulario'))

    

        const formulariolistar = formulario.docs.map((doc) => ({
            id:doc.id,
           ...doc.data(),
        }))
    
        res.send(formulariolistar)
        }catch(e){
         console.log("erro ao listar formulario" + e)
         res.status(500).send("erro ao listar formulario:"+ e)
      }

})


app.put('/atualizarFormulario/:id',async(req,res)=>{
    const id=req.params.id
    const nome=req.body.nome

    try {
        await firestore.updateDoc(firestore.doc(db,"formulario",id),{
            nome:nome,
        })
        res.send('formulario atualizado com sucesso!')
    } catch (e) {
        console.log('Erro ao atualizar o formulario:'+ e)
        res.status(500)
    }
})

app.delete('/deletarFormulario/:id', async (req,res) => {
    const id= req.params.id
    try {
        await firestore.deleteDoc(firestore.doc(db,'formulario',id))
        res.send("formulario deletado com sucesso")
    } catch (e) {
        console.log('Erro ao deletar o formulario'+e)
        res.status(500).send('Erro ao deletar o formulario'+e)
    }
})

app.listen(3000, function () {
    console.log('servicço rodando em http://localhost:3000');
});

