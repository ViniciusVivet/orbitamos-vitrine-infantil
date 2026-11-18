export const store = {
  name: "Vitrine Infantil — uma demonstração Orbitamos",
  instagram: "https://www.instagram.com/orbitamosbr/",
  whatsapp: "5511949138973",
  whatsappLabel: "(11) 94913-8973",
  email: "",
};

export function getWhatsappLink(
  productName?: string,
  size?: string,
  color?: string,
  quantity?: number
) {
  let message: string;
  if (productName && size) {
    const colorLine = color ? `\nCor escolhida: ${color}` : "";
    const quantityLine = quantity ? `\nQuantidade: ${quantity}` : "";
    message = `Oi, Orbitamos! Vi a demonstração da Vitrine Infantil e gostaria de um catálogo parecido para minha loja. Testei esta seleção ilustrativa:\n\nProduto: ${productName}\nTamanho: ${size}${colorLine}${quantityLine}\n\nPodemos conversar sobre um projeto?`;
  } else if (productName) {
    message = `Oi, Orbitamos! Vi a demonstração da Vitrine Infantil e gostaria de um catálogo parecido. Produto ilustrativo: ${productName}. Podemos conversar?`;
  } else {
    message = "Oi, Orbitamos! Vi a demonstração da Vitrine Infantil e gostaria de conversar sobre um catálogo para minha loja.";
  }
  return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;
}
