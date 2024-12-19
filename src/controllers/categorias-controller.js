/**
 * Funções de lógica de negócio para categorias.
 * - listarCategorias: Retorna todas as categorias.
 * - cadastrarCategoria: Valida e adiciona uma nova categoria.
 */

import categoriasRepository from "../repositories/categorias-repository";

const categoriasController = {
    getCategorias: () => categoriasRepository.getCategorias(),
    addCategorias: () => categoriasRepository.addCategoria()
}

export default categoriasController;