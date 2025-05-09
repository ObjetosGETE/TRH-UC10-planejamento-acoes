$(document).ready(function () {
    controleSetas();
    criaModal();





    $('.btn-criar-acao').on('click',function(){
        $('.tela-1').addClass('d-none');
        $('.tela-2').removeClass('d-none');
    })


    $('.btn-primeira-tela').on('click',function(){
        $('.tela-2').addClass('d-none');
        $('.tela-1').removeClass('d-none');
    })



    fraseAleatoria();
    
    
   

  });




function fraseAleatoria() {
    const frases = [
        'Gincanas e atividades ao ar livre',
        'Jogos em quadras e praças públicas',
        'Piquenique',
        'Oficina de desenho',
        'Desafio de talentos',
        'Programa de mentoria',
        'Dia do feedback',
        'Programa de Ideias',
        'Happy hour temático',
        'Programa de qualidade de vida',
        'Aluguel de piscina de bolinhas',
        'Aluguel de cama elástica',
        'Profissional para realizar recreação',
        'Brindes'
    ];

    // Função para embaralhar as frases
    function embaralhar(array) {
        return array.sort(() => Math.random() - 0.5);
    }


    const frasesAleatorias = embaralhar(frases.slice()); // cópia embaralhada
    $('.btn-opcoes').each(function (index) {
        const frase = frasesAleatorias[index];
        if (frase) {
            $(this).text(frase);
        }
    });
}

function criaModal() {
    const conteudosModal = {
        'btn-fev': {
            titulo: 'CARNAVAL',
            texto: `<strong> Planejamento da ação (Primeiro semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas para comemorar de forma consciente e segura.  
    Campanhas de incentivo à decoração das áreas/setores através de comunicações.`
        },
        'btn-mar': {
            titulo: 'DIA DA MULHER',
            texto: `<strong> Planejamento da ação (Primeiro semestre): </strong> <br>
    Cartão comemorativo a ser disseminado em diferentes canais, para o atendimento de todo o público-alvo da ação.`
        },
        'btn-abr': {
            titulo: 'PÁSCOA',
            texto: `<strong> Planejamento da ação (Segundo semestre): </strong> <br> 
    Cartão comemorativo a ser disseminado em diferentes canais, para o atendimento de todo o público-alvo da ação.  
    Brinde – Compra de tabletes de chocolate personalizados.`
        },
        'btn-mai': {
            titulo: 'DIA DO TRABALHO',
            texto: `<strong> Planejamento da ação (Segundo semestre): </strong> <br> 
    Cartão comemorativo agradecendo a dedicação e o comprometimento dos colaboradores a ser disseminado em diferentes canais.  
    Organização de gincana interna para integração e confraternização.`
        },
        'btn-jun': {
            titulo: 'DIA DA FAMÍLIA',
            texto: `<strong> Planejamento da ação (Terceiro semestre): </strong> <br> 
    Criação de um mural colaborativo com fotos das famílias dos colaboradores.`
        },
        'btn-ago': {
            titulo: 'ANIVERSÁRIO EMPRESA',
            texto: `<strong> Planejamento da ação (Terceiro semestre): </strong> <br> 
    Cartão comemorativo a ser disseminado em diferentes canais.  
    Celebração do aniversário da empresa com café da tarde e bolo.`
        },
        'btn-set': {
            titulo: 'SETEMBRO AMARELO',
            texto: `<strong> Planejamento da ação (Terceiro semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas e orientações para a prevenção do suicídio e a preservação da saúde mental.  
    Palestra em parceria com o Centro de Valorização da Vida (CVV).`
        },
        'btn-out': {
            titulo: 'OUTUBRO ROSA',
            texto: `<strong> Planejamento da ação (Quarto semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas e orientações para a prevenção do câncer de mama.  
    Divulgação de vídeo em parceria com o Instituto Nacional do Câncer (INCA).`
        },
        'btn-nov': {
            titulo: 'NOVEMBRO AZUL',
            texto: `<strong> Planejamento da ação (Quarto semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas e orientações para a prevenção do câncer de próstata.  
    Divulgação de vídeo em parceria com Instituto Nacional do Câncer (INCA).`
        },
        'btn-dez': {
            titulo: 'NATAL',
            texto: `<strong> Planejamento da ação (Quarto semestre): </strong> <br>
    Cartão comemorativo a ser disseminado em diferentes canais.  
    Brinde – Compra de brindes aos colaboradores.  
    Celebração de final de ano – Confraternização com os colaboradores.`
        }
    };

    // Associa os botões dinamicamente
    $.each(conteudosModal, function (classeBtn, dados) {
        $('.' + classeBtn).on('click', function () {
            $('#modalPlanejamentoLabel').text(dados.titulo);
            $('#modalTexto').html(dados.texto.replace(/\n/g, "<br>")); // quebra de linha
            $('#modalPlanejamento').modal('show');
        });
    });
}

function controleSetas() {
    $('.btn-avancar').on('click', function () {
        $('.parte-1').addClass('animando-sumir');
        setTimeout(() => {
            $('.parte-1').addClass('d-none').removeClass('animando-sumir');
            $('.parte-2').removeClass('d-none').addClass('animando-aparecer');
            setTimeout(() => {
                $('.parte-2').removeClass('animando-aparecer');
            }, 500);
        }, 500);
    });

    $('.btn-voltar').on('click', function () {
        $('.parte-2').addClass('animando-sumir');
        setTimeout(() => {
            $('.parte-2').addClass('d-none').removeClass('animando-sumir');
            $('.parte-1').removeClass('d-none').addClass('animando-aparecer');
            setTimeout(() => {
                $('.parte-1').removeClass('animando-aparecer');
            }, 500);
        }, 500);
    });

    $('.btn-avancar-tela2').on('click', function () {
        $('.parte-a').addClass('animando-sumir');
        setTimeout(() => {
            $('.parte-a').addClass('d-none').removeClass('animando-sumir');
            $('.parte-b').removeClass('d-none').addClass('animando-aparecer');
            setTimeout(() => {
                $('.parte-b').removeClass('animando-aparecer');
            }, 500);
        }, 500);
    });

    $('.btn-voltar-tela2').on('click', function () {
        $('.parte-b').addClass('animando-sumir');
        setTimeout(() => {
            $('.parte-b').addClass('d-none').removeClass('animando-sumir');
            $('.parte-a').removeClass('d-none').addClass('animando-aparecer');
            setTimeout(() => {
                $('.parte-a').removeClass('animando-aparecer');
            }, 500);
        }, 500);
    });
}







  