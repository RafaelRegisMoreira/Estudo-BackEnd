import { Router } from 'express';
import Category from '../../../models/Category.js';

export const categoriesRoutes = Router();

//categoriesRoutes.get('/', "NOME DO CONTROLER") vai estar no routes
//Async(req, res) => {} controller
//logicas e regras de negocio (try e catch) vai estar no service!!!
categoriesRoutes.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoriesRoutes.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

categoriesRoutes.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)

    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }

    await category.update(req.body);
    res.json(category)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});

categoriesRoutes.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)

    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }

    await category.destroy();
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})