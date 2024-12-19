/**
 * Interface para interação com o usuário para gerenciamento de categorias.
 * - Exibe o menu de opções.
 * - Recebe dados do usuário para listar ou cadastrar categorias.
 */

import PromptSync from "prompt-sync";
import utils from "../utils/format-util.js";
import categoriasController from "../controllers/categorias-controller.js";
import menuPrincipal from "./main-view.js";

// Inicializando o prompt
const prompt = PromptSync();
const width = 80;

/**
 * Cadastra um novo categoria no sistema.
 * Solicita os dados do categoria (id, nome, categoria e quantidade) e os envia para o controlador.
 */
const cadastrarCategoria = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Cadastrar categoria", width));
    console.log(utils.createBase(width));
    const categoria = prompt("| * Adicione a categoria: ");
    categoriasController.addCategorias({ categoria });
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("categoria cadastrado com sucesso!", width));
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    categoriaView();
};

/**
 * Lista todos os categorias cadastrados no sistema.
 * Exibe as informações de cada categoria (id, nome, categoria e quantidade).
 */
const listarCategorias = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Todos os categorias", width));
    console.log(utils.createBase(width));
    categoriasController.getCategorias().forEach(categoria => {
        console.log(utils.formatMessage(`categoria: ${categoria.categoria}`, width));
        console.log(utils.formatMessage("", width));
    });
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    categoriaView();
};

/**
 * Exibe o menu principal de gerenciamento de categorias.
 * Permite ao categoria acessar as opções de cadastrar, editar, excluir, listar ou buscar categorias.
 */
const categoriaView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu categorias", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Cadastrar categoria", width));
    console.log(utils.formatMessage("2 - Listar categoria", width));
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            cadastrarCategoria();
            break;
        case "2":
            listarCategorias();
            break;
        default:
            categoriaView();
    }
};

// Exporta a visualização de categoria
export default categoriaView;