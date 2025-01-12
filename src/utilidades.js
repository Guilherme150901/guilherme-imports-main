export const catalogo = [
  {
    id: "1",
    nome: "Perfume Ferrari Black",
    marca: "Ferrari",
    preco: 250,
    nomeArquivoImagem: "produto1.jpg",
    feminino: false,
  },
  {
    id: "2",
    nome: "Perfume 212 vip",
    marca: "Carolina Herrera",
    preco: 530,
    nomeArquivoImagem: "produto2.jpg",
    feminino: false,
  },
  {
    id: "3",
    nome: "Perfume 212 vip black",
    marca: "Carolina Herrera",
    preco: 645,
    nomeArquivoImagem: "produto3.jpg",
    feminino: false,
  },
  {
    id: "4",
    nome: "Perfume One Million",
    marca: "Parfum",
    preco: 514,
    nomeArquivoImagem: "produto4.jpg",
    feminino: false,
  },
  {
    id: "5",
    nome: "Perfume Bleu de Chanel",
    marca: "Chanel",
    preco: 880,
    nomeArquivoImagem: "produto5.jpg",
    feminino: false,
  },
  {
    id: "6",
    nome: "Perfume CK One",
    marca: "Calvin Klein",
    preco: 283,
    nomeArquivoImagem: "produto6.jpg",
    feminino: false,
  },
  {
    id: "7",
    nome: "Perfume Good Girl",
    marca: "Carolina Herrera",
    preco: 776,
    nomeArquivoImagem: "produto7.jpg",
    feminino: true,
  },
  {
    id: "8",
    nome: "Perfume Sauvage Dior",
    marca: "Dior",
    preco: 800,
    nomeArquivoImagem: "produto8.webp",
    feminino: false,
  },
  {
    id: "9",
    nome: "Perfume Olympea",
    marca: "Paco Rabanne",
    preco: 510,
    nomeArquivoImagem: "produto9.webp",
    feminino: true,
  },
  {
    id: "10",
    nome: "Perfume 212 vip rose",
    marca: "Carolina Herrera",
    preco: 830,
    nomeArquivoImagem: "produto10.webp",
    feminino: true,
  },
  {
    id: "11",
    nome: "Perfume Dior J`ardore",
    marca: "Dior",
    preco: 450,
    nomeArquivoImagem: "produto11.png",
    feminino: true,
  },
  {
    id: "12",
    nome: "Perfume Black excess F",
    marca: "Paco Rabanne",
    preco: 305,
    nomeArquivoImagem: "produto12.webp",
    feminino: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);

  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  //<article class= "flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cartaoProdutoCarrinho = ` <img
        src="/imgs/${produto.nomeArquivoImagem}"
        alt="carrinho: ${produto.nome}" 
        class="h-16 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-lg">${produto.nome}</p>
        <p class="text-slate-600 text-lg">preço:R$${produto.preco} </p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
      </div>`;
  //<article class= "flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
