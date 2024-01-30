import express from "express";
import {db,firestore} from '../banco_de_dados/firebase';

const app = express();

app.listen(3000,function () {
    console.log('servicço rodando em http://localhost:3000');
});
