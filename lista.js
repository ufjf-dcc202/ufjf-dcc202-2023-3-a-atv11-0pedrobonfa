const lista = ["Um", "Dois", "Três"];

function getLista()
{
    return lista;
}

export function limparLista()
{
    lista.splice(0);
}

export function adicionaNaLista(novoItem)
{
    lista.push(novoItem)
}
export {getLista};