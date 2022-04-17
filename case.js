

const verificarProdutos = function(opcao){
    switch(opcao) {        
            case 'hamburguer simples':
                alert('hamburguer simples está com preço de r$30,10')
                break;
            case 'hamburguer duplo':
                alert('hamburguer simples está com preço de r$38,10')
                break;
            case 'hamburguer bancon': 
                alert('hamburguer simples está com preço de r$40,10')
                break;
            case 'hamburguer duplo de banco':
                alert('hamburgue duplo banco 45,10')
                break;
            default:
                alert('Opção inválida')
                break;
    }
}