const express = require('express');
require("dotenv").config();

const apiUrl = process.env.FAKEAPI;

async function getDescription(req, res) {
    
    try {
        
        const fetch = await import ('node-fetch');

        const response = await fetch.default(apiUrl);

        if(!response.ok){
            throw new Error('Error al obtener la información de la API')
        }

        const data = await response.json();

        const description = data.map((descripcion) => ({
            id: descripcion.id,
            imagen: descripcion.image,
            nombre: descripcion.title,
            descripcion: descripcion.description,
            precio: descripcion.price,
            categoria: descripcion.category,
        }));

        res.json(description)
    } catch (error) {
        console.error(error);

        res.status(404).json({
            error: "Información no encontrada"
        });
    }
}

module.exports = getDescription;