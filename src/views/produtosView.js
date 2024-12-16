/**
 * Interface para interação com o usuário para gerenciamento de produtos.
 * - Exibe o menu de opções.
 * - Recebe dados do usuário para listar, cadastrar, atualizar ou remover
produtos.
 */

// Importações necessárias
import PromptSync from "prompt-sync";
import utils from "../utils/format-util.js"
import menuPrincipal from "../views/mainView.js";

//import usuarioController from "../controllers/usuario-controller.js";

// Inicializando o prompt
const prompt = PromptSync();
const width = 80;

/**
 * Cadastra um novo usuário no sistema.
 * Solicita os dados do usuário (CPF, nome, fone e e-mail) e os envia para o controlador.
 */
const cadastrarUsuario = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Cadastrar usuário", width));
    console.log(utils.createBase(width));
    const cpf = prompt("| * CPF: ");
    const nome = prompt("| * Nome: ");
    const fone = prompt("| * Fone: ");
    const email = prompt("| * E-mail: ");
    usuarioController.save({ cpf, nome, fone, email });
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Usuário cadastrado com sucesso!", width));
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    usuarioView();
};

/**
 * Edita os dados de um usuário existente.
 * Busca o usuário pelo CPF e permite alterar os dados (nome, fone e e-mail).
 * Mantém os valores atuais caso o usuário pressione Enter sem digitar nada.
 */
const editarUsuario = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Editar usuário", width));
    console.log(utils.createBase(width));
    const cpf = prompt("| * CPF: ");
    const usuario = usuarioController.findByCpf(cpf);
    if (usuario) {
        console.log(utils.formatMessage(`Nome: ${usuario.nome}`, width));
        console.log(utils.formatMessage(`Fone: ${usuario.fone}`, width));
        console.log(utils.formatMessage(`E-mail: ${usuario.email}`, width));
        console.log(utils.createBase(width));
        const nome = prompt("| * Novo nome: ") || usuario.nome;
        const fone = prompt("| * Novo fone: ") || usuario.fone;
        const email = prompt("| * Novo e-mail: ") || usuario.email;
        const userUpdate = { cpf, nome, fone, email };
        usuarioController.save(userUpdate);
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Usuário editado com sucesso!", width));
        console.log(utils.createBase(width));
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Usuário não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    usuarioView();
};

/**
 * Exclui um usuário do sistema.
 * Busca o usuário pelo CPF e solicita confirmação antes de removê-lo.
 */
const removerProduto = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Remover Produto", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    //const usuario = usuarioController.findByid(id);
    if (//usuario) {
        console.log(utils.formatMessage(`Nome: ${usuario.nome}`, width));
        console.log(utils.formatMessage(`Fone: ${usuario.fone}`, width));
        console.log(utils.formatMessage(`E-mail: ${usuario.email}`, width));
        console.log(utils.createBase(width));
        const confirmacao = prompt("| * Deseja realmente excluir? (s/n): ");
        if (confirmacao === "s") {
            usuarioController.remove(cpf);
            console.log(utils.createBase(width));
            console.log(utils.formatMessage("Usuário excluído com sucesso!", width));
            console.log(utils.createBase(width));
        }
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Usuário não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    usuarioView();
};

/**
 * Lista todos os usuários cadastrados no sistema.
 * Exibe as informações de cada usuário (CPF, nome, fone e e-mail).
 */
const listarUsuarios = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Todos os usuários", width));
    console.log(utils.createBase(width));
    usuarioController.findAll().forEach(usuario => {
        console.log(utils.formatMessage(`CPF: ${usuario.cpf}`, width));
        console.log(utils.formatMessage(`Nome: ${usuario.nome}`, width));
        console.log(utils.formatMessage(`Fone: ${usuario.fone}`, width));
        console.log(utils.formatMessage(`E-mail: ${usuario.email}`, width));
        console.log(utils.formatMessage("", width));
    });
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    usuarioView();
};

/**
 * Busca um usuário pelo CPF.
 * Exibe as informações do usuário encontrado (nome, fone e e-mail).
 */
const buscarUsuario = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Buscar usuário por CPF", width));
    console.log(utils.createBase(width));
    const cpf = prompt("| * CPF: ");
    const usuario = usuarioController.findByCpf(cpf);
    if (usuario) {
        console.log(utils.formatMessage(`Nome: ${usuario.nome}`, width));
        console.log(utils.formatMessage(`Fone: ${usuario.fone}`, width));
        console.log(utils.formatMessage(`E-mail: ${usuario.email}`, width));
        console.log(utils.createBase(width));
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Usuário não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    usuarioView();
};

/**
 * Exibe o menu principal de gerenciamento de usuários.
 * Permite ao usuário acessar as opções de cadastrar, editar, excluir, listar ou buscar usuários.
 */
const usuarioView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu Usuários", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Cadastrar usuário", width));
    console.log(utils.formatMessage("2 - Editar usuário", width));
    console.log(utils.formatMessage("3 - Excluir usuário", width));
    console.log(utils.formatMessage("4 - Listar todos os usuários", width));
    console.log(utils.formatMessage("5 - Buscar usuário por CPF", width));
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            editarUsuario();
            break;
        case "3":
            removerProduto();
            break;
        case "4":
            listarUsuarios();
            break;
        case "5":
            buscarUsuario();
            break;
        default:
            usuarioView();
    }
};

// Exporta a visualização de usuário
export default usuarioView;
