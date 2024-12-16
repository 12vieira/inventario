import PromptSync from "prompt-sync";
//import utils from "./utils/format-util.js";
import utils from "../utils/format-util.js";

import usuarioView from "./usuario-view.js";
import livroView from "./livro-view.js";

const prompt = PromptSync();

const menuPrincipal = () => {
    console.clear();
    const width = 80;
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Sistema de Inventário", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Gerenciar Produtos", width));
    console.log(utils.formatMessage("2 - Gerenciar Categorias", width));
    console.log(utils.formatMessage("3 - Gerar Relatórios", width));
    console.log(utils.formatMessage("0 - Sair", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Escolha a opção desejada: ");
    switch (opcao) {
        case "0":
            process.exit();
        case "1":
            //produtoView();
            break;
        case "2":
            //categoriaView();
            break;
        case "3":
            //relatorioView;
            break;
        default:
            menuPrincipal();
    }
}

export default menuPrincipal;