const express = require('express');
require('dotenv').config();

const urlApi = process.env.FAKEAPI;

async function getProduct(req, res) {

  try {

    const fetch = await import('node-fetch');

    const response = await fetch.default(urlApi);

    if (!response.ok) {
      throw new Error("Error al obtener la información de la API");
    }

    const data = await response.json();

    const products = data.map((producto) => ({
      imagen: producto.image,
      nombre: producto.title,
      precio: producto.price,
    }));

    res.json(products);
  } catch (error) {
    console.error(error);

    res.status(404).json({
      error: "Información no encontrada",
    });
  }
}

module.exports = getProduct;