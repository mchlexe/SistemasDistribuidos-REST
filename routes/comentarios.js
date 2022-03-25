/**
 * @swagger
 * components:
 *   schemas:
 *     comentarioCreate:
 *       type: object
 *       properties:
 *         bookId:
 *           type: integer
 *           description: ID do livo (Google Books API).
 *           example: 1
 *         username:
 *           type: string
 *           description: Nome do usuário que fez o comentário.
 *         texto:
 *           type: string
 *           description: Comentário sobre o livro.
 *     Comentario:
 *       allOf:
 *         - $ref: '#/components/schemas/comentarioCreate'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: ID do comentario.
 *             createdAt:
 *               type: string
 *               description: Data no formato ISO em que o comentário foi realizado.
 */

const express = require('express');
const router = express.Router();

// Importa o controller
const comentariosController = require('../controllers/comentariosController');

/**
 * @swagger
 * /comentarios:
 *   post:
 *     summary: Cria um novo comentario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/comentarioCreate'
 *     responses:
 *       201:
 *         description: Comentário criado
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 comentario:
 *                   $ref: '#/components/schemas/Comentario'
*/
router.post('/', comentariosController.comentarioCreate);

/**
 * @swagger
 * /comentarios/{id}:
 *   delete:
 *     summary: Apaga um comentario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico do comentario a ser apagado.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Comentario apagado.
*/
router.delete('/:id', comentariosController.comentarioDelete);

/**
 * @swagger
 * /comentarios/{bookId}:
 *   get:
 *     summary: Comentários de um livro.
 *     description: Recupera a lista de comentários de um livro.
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: ID numérico do livro para recuperar seus comentários.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Uma lista de comentários.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 comentario:
 *                   $ref: '#/components/schemas/Comentario'
*/
router.get('/:bookId', comentariosController.comentariosList);

module.exports = router;
