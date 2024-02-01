import express from 'express';
import { db, firestore } from '../banco_de_dados/firebase';

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bem-vindo')
});

app.listen(3000, function () {
    console.log('servicço rodando em http://localhost:3000');
});

app.post('/usuario', async (req, res) => {
    const nome = req.body.nome
    const email=req.body.email
    const telefone= req.body.telefone

    try {
        const docRef = await firestore.addDoc(firestore.collection(db, 'usuario'), {
            nome: nome,
            email:email,
            telefone:telefone
        })
        res.send("Usuário  adicionado com sucesso" + docRef.id);
    } catch (e) {
       console.log(e)
       res.status(500).send(e)
    }
});

