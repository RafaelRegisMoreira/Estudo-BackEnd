import { Router } from 'express';
import Product from '../../../models/Product.js';

export const productRoutes = Router();

// Endpoints para Produtos
productRoutes.get('/', async (req, res) => { // controller
    try {
        const products = await Product.findAll({
            include: ['estoque', 'imagem', 'avaliacoes']
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

productRoutes.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body, {
            include: ['estoque', 'imagem', 'avaliacoes']
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

productRoutes.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: ['estoque', 'imagem', 'avaliacoes']
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.update(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).
            json({ error: error.message });
    }
});

productRoutes.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.destroy();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

