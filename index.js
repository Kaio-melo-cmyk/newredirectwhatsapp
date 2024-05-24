const express = require('express');
const app = express();
const port = 3000;

// Lista de números de telefone para redirecionar
const phoneNumbers = [
    '5585989002145',
    '5585988683953',
];

// Função para escolher um número aleatório
function getRandomPhoneNumber() {
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    return phoneNumbers[randomIndex];
}

app.get('/', (req, res) => {
    const phoneNumber = getRandomPhoneNumber();
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    res.redirect(whatsappUrl);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
