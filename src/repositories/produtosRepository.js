/**
 * Funções para manipulação dos dados de produtos.
 * - getProdutos: Retorna todos os produtos cadastrados.
 * - addProduto: Adiciona um novo produto ao banco de dados.
 * - findProduto: Busca um produto pelo ID.
 * - atualizarQuantidade: Atualiza a quantidade de um produto existente.
 * - removerProdutorProduto: removerProduto um produto pelo ID.
 */

import database from './database.js';
import prompt from "prompt-sync";

/**
 * Repositório de produtos para manipular os dados armazenados no banco de dados.
 */
const produtosRepository = {
    
    /**
     * Retorna todos os produtos no banco de dados.
     * @returns {Array} Lista de produtos.
     */
    getProduto: () => database.produtos,

    /**
     * Busca um produto pelo Id
     * @param {string} id - O Id do produto a ser buscado.
     * @returns {Object|undefined} O produto encontrado ou undefined se não encontrado.
     * */
    findProduto: (id) => database.produtos.find(produto => produto.id === id),

    /**
     * Salva um novo produto no banco de dados.
     * @param {Object} produto - O produto a ser salvo.
     * @param {string} produto.id - O id do produto.
     * @param {string} produto.titulo - O título do produto.
     * @param {string} produto.autor - O autor do produto.
     * @param {string} produto.editora - A editora do produto.
     * @param {boolean} produto.emprestado - Se o produto está emprestado ou não.
     * @returns {Object} - O produto salvo.
     */
    addProduto: (produto) => {
        const isProduto = produtosRepository.findProduto(produto.id)
        if (isProduto) {
            Object.assign(isProduto, produto);
            return isProduto;
        } else {
            produto.id = Date.now().toString();
            database.produtos.push(produto);
            return produto;
        }
    },

    atualizarQuantidade: (id) => {
        const input = prompt();
        const product = produtosRepository.find(produto => produto.id === id);
        const amountProduto = input('| Atualize a Quantidade: ');
        product.quantidade = amountProduto;
        database.produtos.quantidade = amountProduto;
        
    },

    /**
     * removerProduto um produto do banco de dados pelo ISBN.
     * @param {string} id - O id do produto a ser removido.
     */
    removerProduto: (id) => {
        const index = database.produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            database.produtos.splice(index, 1);
        } else {
            throw new Error(`produto com ID ${id} não encontrado.`);
        }
    }


};

export default produtosRepository;