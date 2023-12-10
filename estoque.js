let estoque = {
    'joao': [
      {'tipo': 'maca', 'quantidade': 1},
    ],
    'maria': [
      {'tipo': 'maca', 'quantidade': 2},
    ],
  };
  function getEstoque() {
    return structuredClone(estoque);
  }
  
  function transacaoNoEstoque(origem, destino, tipo, quantidade) {
    if (!estoque[origem] && origem !== "pomar") {
      estoque[origem] = [];
    }
  
    if (!estoque[destino] && destino !== "pomar") {
      estoque[destino] = [];
    }
  
    if (quantidade < 0 || origem === destino) {
      return;
    }
  
    if (destino === "pomar") {
      let itemEncontrado = estoque[origem].find(item => item.tipo === tipo);
  
      if (itemEncontrado) {
        itemEncontrado.quantidade = Math.max(0, itemEncontrado.quantidade - quantidade);
      }
  
      return;
    }
  