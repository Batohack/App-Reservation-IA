const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "Bienvenue sur l'API de Réservation IA",
    sprint: 1,
    features: ["Auth Propriétaire", "Gestion Appartements"]
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
