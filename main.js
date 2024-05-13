import {renderizarCatalogo} from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { 
    atualizarPrecoCarrinho,
    inicializarCarrinho, 
    renderizarProdutosCarrinho, 
} from "./src/menu.Carrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();




