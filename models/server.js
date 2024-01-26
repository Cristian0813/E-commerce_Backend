const express = require('express');
const cors = require('cors');
const axios = require('axios');

const apiRouter = express.Router();
const apiUrl = process.env.FAKESTORE;

apiRouter.get('/products', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    const transformedData = transformProductData(response.data);
    res.json(transformedData);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching productos' });
  }
});

apiRouter.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    const response = await axios.get(`${apiUrl}/products/${id}`);
    const transformedData = transformProductData([response.data])[0];
    res.json(transformedData);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching producto' });
  }
});

// Función para transformar la respuesta de la API
function transformProductData(apiData) {
  return apiData.map(product => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: {
      rate: parseFloat(product.rating.rate), // Convert the rating to a float
      count: product.rating.count,
    },
  }));
}

module.exports = apiRouter;