const lista = ["Um", "Dois", "Três"];

function getLista()
{
    return lista;
}

export function limpaLista()
{
    lista.splice(0);
}

export function adicionaNaLista(novoItem)
{
    lista.push(novoItem);
}

export function removeDaLista()
{
    lista.splice(1, 1);
}

export {getLista};