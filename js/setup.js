$('.owl-carousel').owlCarousel({
    loop:true, /* ativa o efeito de loop */
    margin:10, /* margem entre os items */
    nav:true, /* ativa botão de navegação */
    responsive:{
        0:{
            items:3 /*Quando a tela tiver 0px ou mais, mostra 1 item na tela */
        },
        600:{
            items:4 /*Quando a tela tiver 600px ou mais, mostra 3 itens na tela */
        },
        1000:{
            items:5 /*Quando a tela tiver 1000px ou mais, mostra 5 itens na tela */
        }
    }
})