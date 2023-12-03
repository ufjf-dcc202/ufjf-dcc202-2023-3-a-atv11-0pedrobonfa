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
    lista.push(novoItem)
}

export function removeDaLista(itemDaLista)
{
    if (((itemDaLista >= 0) && (itemDaLista < lista.length))) {
        lista.splice(itemDaLista, 1);
    }
}
export {getLista};