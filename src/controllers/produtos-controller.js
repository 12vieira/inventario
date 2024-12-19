/**
 * Funções de lógica de negócio para produtos.
 * - listarProdutos: Retorna todos os produtos.
 * - cadastrarProduto: Valida e adiciona um novo produto.
 * - atualizarProduto: Valida e atualiza a quantidade de um produto
existente.
 * - removerProduto: Valida e remove um produto.
 */

import produtosRepository from "../repositories/produtos-repository";

const produtosController = {
    addProduto: (produto) => produtosRepository.addProduto(produto),
    removerProduto: (id) => produtosRepository.removerProduto(id),
    atualizarQuantidade: (id) => produtosRepository.atualizarQuantidade(id),
    getProduto: () => produtosRepository.getProduto(),
    findProduto: (id) => produtosRepository.findProduto(id)

}

export default produtosController;