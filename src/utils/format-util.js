
const utils = {
    
    formatMessage(message, width) {
        const padding = width - message.length - 4; // 4 é para os espaços e as barras verticais
        const paddedMessage = message + " ".repeat(padding > 0 ? padding : 0); // Adiciona espaços se necessário
        return `| ${paddedMessage} |`;
    },
    
    createBase(width) {
        return "+".padEnd(width - 1, "-") + "+";
    }

}

export default utils;
