/**
 * Funções para manipulação dos dados de categorias.
 * - getCategorias: Retorna todas as categorias cadastradas.
 * - addCategoria: Adiciona uma nova categoria ao banco de dados.
 */


import database from './database.js';
import prompt from "prompt-sync";

/**
 * Repositório de categorias para manipular os dados armazenados no banco de dados.
 */
const categoriasRepository = {
    
    /**
     * Retorna todos os categorias no banco de dados.
     * @returns {Array} Lista de categorias.
     */
    getCategorias: () => database.categorias,

    /**
     * Salva um novo categoria no banco de dados.
     * @param {Object} categoria - O categoria a ser salvo.
     * @param {string} categoria.id - O id do categoria.
     * @param {string} categoria.titulo - O título do categoria.
     * @param {string} categoria.autor - O autor do categoria.
     * @param {string} categoria.editora - A editora do categoria.
     * @param {boolean} categoria.emprestado - Se o categoria está emprestado ou não.
     * @returns {Object} - O categoria salvo.
     */
    addCategoria: () => {
        const input = prompt();
        const newCategory = input('| Adicione uma Categoria: ');
        database.categorias.push(newCategory);
        
    }


};

export default categoriasRepository;