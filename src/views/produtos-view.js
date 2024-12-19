/**
 * Interface para interação com o produto para gerenciamento de produtos.
 * - Exibe o menu de opções.
 * - Recebe dados do produto para listar, cadastrar, atualizar ou remover
produtos.
 */

// Importações necessárias
import PromptSync from "prompt-sync";
import utils from "../utils/format-util.js"
import menuPrincipal from "./main-view.js";
import produtosController from "../controllers/produtos-controller.js";

// Inicializando o prompt
const prompt = PromptSync();
const width = 80;

/**
 * Cadastra um novo produto no sistema.
 * Solicita os dados do produto (id, nome, categoria e quantidade) e os envia para o controlador.
 */
const cadastrarProduto = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Cadastrar produto", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const nome = prompt("| * Nome: ");
    const categoria = prompt("| * Categoria: ");
    const quantidade = prompt("| * quantidade: ");
    produtosController.addProduto({ id, nome, categoria, quantidade });
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("produto cadastrado com sucesso!", width));
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    produtoView();
};

/**
 * Edita os dados de um produto existente.
 * Busca o produto pelo id e permite alterar os dados (nome, categoria e quantidade).
 * Mantém os valores atuais caso o produto pressione Enter sem digitar nada.
 */
const atualizarProduto = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Editar produto", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const produto = produtosController.findProduto(id);
    if (produto) {
        console.log(utils.formatMessage(`Nome: ${produto.nome}`, width));
        console.log(utils.formatMessage(`Categoria: ${produto.categoria}`, width));
        console.log(utils.formatMessage(`Quantidade: ${produto.quantidade}`, width));
        console.log(utils.createBase(width));
        const quantidade = prompt("| * Nova quantidade: ") || produto.quantidade;
        const userUpdate = {quantidade };
        produtosController.addProduto(userUpdate);
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("produto editado com sucesso!", width));
        console.log(utils.createBase(width));
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("produto não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    produtoView();
};

/**
 * Exclui um produto do sistema.
 * Busca o produto pelo id e solicita confirmação antes de removê-lo.
 */
const removerProduto = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Remover Produto", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const produto = produtosController.findProduto(id);
    if (produto) {
        console.log(utils.formatMessage(`Nome: ${produto.nome}`, width));
        console.log(utils.formatMessage(`categoria: ${produto.categoria}`, width));
        console.log(utils.formatMessage(`quantidade: ${produto.quantidade}`, width));
        console.log(utils.createBase(width));
        const confirmacao = prompt("| * Deseja realmente excluir? (s/n): ");
        if (confirmacao === "s") {
            produtosController.removerProduto(id);
            console.log(utils.createBase(width));
            console.log(utils.formatMessage("produto excluído com sucesso!", width));
            console.log(utils.createBase(width));
        }
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("produto não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    produtoView();
};

/**
 * Lista todos os produtos cadastrados no sistema.
 * Exibe as informações de cada produto (id, nome, categoria e quantidade).
 */
const listarProdutos = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Todos os produtos", width));
    console.log(utils.createBase(width));
    produtosController.getProduto().forEach(produto => {
        console.log(utils.formatMessage(`id: ${produto.id}`, width));
        console.log(utils.formatMessage(`Nome: ${produto.nome}`, width));
        console.log(utils.formatMessage(`categoria: ${produto.categoria}`, width));
        console.log(utils.formatMessage(`quantidade: ${produto.quantidade}`, width));
        console.log(utils.formatMessage("", width));
    });
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    produtoView();
};

/**
 * Exibe o menu principal de gerenciamento de produtos.
 * Permite ao produto acessar as opções de cadastrar, editar, excluir, listar ou buscar produtos.
 */
const produtoView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu Produtos", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Cadastrar produto", width));
    console.log(utils.formatMessage("2 - Atualizar produto", width));
    console.log(utils.formatMessage("3 - Remover produto", width));
    console.log(utils.formatMessage("4 - Listar todos os produtos", width));
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            cadastrarProduto();
            break;
        case "2":
            atualizarProduto();
            break;
        case "3":
            removerProduto();
            break;
        case "4":
            listarProdutos();
            break;
        default:
            produtoView();
    }
};

// Exporta a visualização de produto
export default produtoView;
