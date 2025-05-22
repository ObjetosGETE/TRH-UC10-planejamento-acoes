$(document).ready(function () {
  controleSetas();
  criaModal();
  controleBotoes();
  fraseAleatoria();
  $("#modalInicial").modal("show");
  resizeBodyConteudo();
  $(window).resize(function () {
    resizeBodyConteudo();
  });
});
let abrirModalFinal = false; 
function fraseAleatoria() {
 
  const opcoes = [
    {
      texto: "Gincanas e atividades ao ar livre",
      tipo: "positivo",
      feedback: `Isso mesmo! É possível realizar diversas atividades ao ar livre em praças públicas da cidade e/ou em locais que não necessitam de locação. Utilizando a criatividade, as gincanas podem ser muito divertidas, proporcionando integração dos colaboradores e suas famílias.`,
    },
    {
      texto: "Jogos em quadras e praças públicas",
      tipo: "positivo",
      feedback: `Que tal promover esportes como basquete, futebol, vôlei e handebol? Descubra as afinidades dos seus colaboradores, crie times e solicite o empréstimo dos equipamentos necessários.`,
    },
    {
      texto: "Piquenique",
      tipo: "positivo",
      feedback: `Mesmo sem recursos, é possível proporcionar um momento de integração e colaboração. Incentive os colaboradores a fornecerem um alimento e/ou bebida para essa ação. Com a colaboração de todos, será possível realizar um ótimo piquenique ao ar livre.`,
    },
    {
      texto: "Oficina de desenho",
      tipo: "positivo",
      feedback: `Verifique a viabilidade de utilizar folhas disponíveis na organização e solicite aos colaboradores que contribuam com o empréstimo de canetas, giz de cera e lápis de cor. Assim será possível proporcionar um momento de descontração com as crianças.`,
    },
    {
      texto: "Desafio de talentos",
      tipo: "positivo",
      feedback: `Realizar um concurso interno onde os colaboradores podem mostrar seus talentos em diversas áreas (música, dança, culinária, etc.) revela talentos escondidos, promove a integração entre os colaboradores e cria um ambiente divertido e descontraído.`,
    },
    {
      texto: "Programa de mentoria",
      tipo: "positivo",
      feedback: `Criar um programa onde colaboradores mais experientes podem mentorar os mais novos, compartilhando conhecimentos e experiências, desenvolve habilidades, promove o aprendizado contínuo, fortalece o senso de comunidade e valoriza o conhecimento interno.`,
    },
    {
      texto: "Dia do feedback",
      tipo: "positivo",
      feedback: `Dedicar um dia por mês para que os colaboradores possam dar e receber feedbacks construtivos sobre seu trabalho e desempenho. Melhora a comunicação interna, promove o desenvolvimento profissional e fortalece a cultura de feedback.`,
    },
    {
      texto: "Programa de Ideias",
      tipo: "positivo",
      feedback: `Criar um canal online ou físico onde os colaboradores podem compartilhar ideias de melhoria para a empresa. Estimula a participação dos colaboradores, valoriza suas opiniões e promove a inovação.`,
    },
    {
      texto: "Happy hour temático",
      tipo: "positivo",
      feedback: `Organizar um happy hour mensal com temas diferentes (ex: karaokê, jogos, etc.) para promover a integração e descontração entre os colaboradores. Fortalece os laços entre os colaboradores, melhora o clima organizacional e promove um ambiente de trabalho mais leve e divertido.`,
    },
    {
      texto: "Programa de qualidade de vida",
      tipo: "positivo",
      feedback: `Oferecer atividades gratuitas para os colaboradores, como aulas de yoga, meditação, ginástica laboral, etc. Melhora a saúde e o bem-estar dos colaboradores, reduz o estresse e promove um ambiente de trabalho mais equilibrado.`,
    },
    {
      texto: "Aluguel de piscina de bolinhas",
      tipo: "negativo",
      feedback: `Infelizmente a empresa não possui recursos para aluguel de brinquedos, mas você pode buscar alternativas gratuitas e/ou parcerias.`,
    },
    {
      texto: "Aluguel de cama elástica",
      tipo: "negativo",
      feedback: `Infelizmente a empresa não possui recursos para aluguel de brinquedos, mas você pode buscar alternativas gratuitas e/ou parcerias.`,
    },
    {
      texto: "Profissional para realizar recreação",
      tipo: "negativo",
      feedback: `Infelizmente a empresa não possui recursos para aluguel de brinquedos, mas você pode buscar alternativas gratuitas. Que tal incentivar os colaboradores a serem voluntários na recreação com as crianças? Incentive a realização de brincadeiras, conte histórias e torne esse dia especial para todos.`,
    },
    {
      texto: "Brindes",
      tipo: "negativo",
      feedback: `Infelizmente a empresa não possui recursos para a compra de brindes, mas com criatividade e um bom planejamento, a memória desse dia certamente será um bom presente.`,
    },
  ];

  function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const opcoesEmbaralhadas = embaralhar(opcoes.slice());

  $(".btn-opcoes").each(function (index) {
    const opcao = opcoesEmbaralhadas[index];
    if (opcao) {
      $(this).text(opcao.texto);
      $(this).data("titulo", opcao.texto);
      $(this).data("feedback", opcao.feedback);
      $(this).data("tipo", opcao.tipo);
    }
  });
  
  $("#modalFeedback").on("hidden.bs.modal", function () {
    if (abrirModalFinal) {
      abrirModalFinal = false;  
      $("#modalFinal").modal("show"); 
    }
  });
  
  $(".btn-opcoes").on("click", function () {
    const titulo = $(this).data("titulo");
    const texto = $(this).data("feedback");
    const tipo = $(this).data("tipo");
  
    $("#modalFeedbackLabel").text(titulo);
    $("#modalTextoFeedback").text(texto);
  
    if (tipo === "positivo") {
      $("#modalFeedback .modal-content")
        .removeClass("modal-negativo")
        .addClass("modal-positivo");
      $("#audio-acerto")[0].play();
      $(this).css("background-image", "url('assets/img/img-correto.png')");
    } else {
      $("#modalFeedback .modal-content")
        .removeClass("modal-positivo")
        .addClass("modal-negativo");
      $("#audio-errado")[0].play();
      $(this).css("background-image", "url('assets/img/img-errado.png')");
    }
  
    $(this).addClass("clicado");
    verificaFinalizacao();
  
    $("#modalFeedback").modal("show");
  });
}

function criaModal() {
  const conteudosModal = {
    "btn-fev": {
      titulo: "CARNAVAL",
      texto: `<strong> Planejamento da ação (Primeiro semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas para comemorar de forma consciente e segura.  
    Campanhas de incentivo à decoração das áreas/setores através de comunicações.`,
    },
    "btn-mar": {
      titulo: "DIA DA MULHER",
      texto: `<strong> Planejamento da ação (Primeiro semestre): </strong> <br>
    Cartão comemorativo a ser disseminado em diferentes canais, para o atendimento de todo o público-alvo da ação.`,
    },
    "btn-abr": {
      titulo: "PÁSCOA",
      texto: `<strong> Planejamento da ação (Segundo semestre): </strong> <br> 
    Cartão comemorativo a ser disseminado em diferentes canais, para o atendimento de todo o público-alvo da ação.  
    Brinde – Compra de tabletes de chocolate personalizados.`,
    },
    "btn-mai": {
      titulo: "DIA DO TRABALHO",
      texto: `<strong> Planejamento da ação (Segundo semestre): </strong> <br> 
    Cartão comemorativo agradecendo a dedicação e o comprometimento dos colaboradores a ser disseminado em diferentes canais.  
    Organização de gincana interna para integração e confraternização.`,
    },
    "btn-jun": {
      titulo: "DIA DA FAMÍLIA",
      texto: `<strong> Planejamento da ação (Terceiro semestre): </strong> <br> 
    Criação de um mural colaborativo com fotos das famílias dos colaboradores.`,
    },
    "btn-ago": {
      titulo: "ANIVERSÁRIO EMPRESA",
      texto: `<strong> Planejamento da ação (Terceiro semestre): </strong> <br> 
    Cartão comemorativo a ser disseminado em diferentes canais.  
    Celebração do aniversário da empresa com café da tarde e bolo.`,
    },
    "btn-set": {
      titulo: "SETEMBRO AMARELO",
      texto: `<strong> Planejamento da ação (Terceiro semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas e orientações para a prevenção do suicídio e a preservação da saúde mental.  
    Palestra em parceria com o Centro de Valorização da Vida (CVV).`,
    },
    "btn-out": {
      titulo: "OUTUBRO ROSA",
      texto: `<strong> Planejamento da ação (Quarto semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas e orientações para a prevenção do câncer de mama.  
    Divulgação de vídeo em parceria com o Instituto Nacional do Câncer (INCA).`,
    },
    "btn-nov": {
      titulo: "NOVEMBRO AZUL",
      texto: `<strong> Planejamento da ação (Quarto semestre): </strong> <br>  
    Informativos aos colaboradores em diferentes canais, com dicas e orientações para a prevenção do câncer de próstata.  
    Divulgação de vídeo em parceria com Instituto Nacional do Câncer (INCA).`,
    },
    "btn-dez": {
      titulo: "NATAL",
      texto: `<strong> Planejamento da ação (Quarto semestre): </strong> <br>
    Cartão comemorativo a ser disseminado em diferentes canais.  
    Brinde – Compra de brindes aos colaboradores.  
    Celebração de final de ano – Confraternização com os colaboradores.`,
    },
  };

  $.each(conteudosModal, function (classeBtn, dados) {
    $("." + classeBtn).on("click", function () {
      $("#modalPlanejamentoLabel").text(dados.titulo);
      $("#modalTexto").html(dados.texto.replace(/\n/g, "<br>"));
      $("#modalPlanejamento").modal("show");
      $("#audio-clique")[0].play();
    });
  });
}

function controleBotoes() {
  $(".btn-criar-acao").on("click", function () {
    $("#audio-clique")[0].play();
    $(".tela-1").addClass("d-none");
    $(".tela-2").removeClass("d-none");
    $("#modalInstrucao").modal("show");
  });

  $(".btn-primeira-tela").on("click", function () {
    $("#audio-clique")[0].play();
    $(".tela-2").addClass("d-none");
    $(".tela-1").removeClass("d-none");
  });

  $(".btn-continuar").on("click", function () {
    $("#audio-clique")[0].play();
    $("#modalInstrucao").modal("hide");
    $("#modalInstrucao").on("hidden.bs.modal", function () {
      $("#modalInstrucao2").modal("show");
    });
  });

  $(".btn-fechar-modal").on("click", function () {
    $("#audio-clique")[0].play();
    $(".modal-backdrop").remove();
    $("body").removeClass("modal-open").css("padding-right", "");
  });
}

function controleSetas() {
  const TEMPO_ANIMACAO = 500;

  function transicao(parteAtual, parteDestino, novaImagem = null) {
    parteAtual.addClass("animando-sumir");
    if (novaImagem) {
      $('.img-bg-tela-1').attr('src', novaImagem);
    }
    setTimeout(() => {
      parteAtual.addClass("d-none").removeClass("animando-sumir");
      parteDestino.removeClass("d-none").addClass("animando-aparecer");
      setTimeout(() => {
        parteDestino.removeClass("animando-aparecer");
      }, TEMPO_ANIMACAO);
    }, TEMPO_ANIMACAO);
  }

  $(".btn-avancar").on("click", function () {
    transicao($(".parte-1"), $(".parte-2"), 'assets/img/bg-tela-1-a.png');
  });

  $(".btn-voltar").on("click", function () {
    $("#audio-clique")[0].play();
    transicao($(".parte-2"), $(".parte-1"), 'assets/img/bg-tela-1.png');
  });

  $(".btn-avancar-tela2").on("click", function () {
    $("#audio-clique")[0].play();
    transicao($(".parte-a"), $(".parte-b"));
  });

  $(".btn-voltar-tela2").on("click", function () {
    $("#audio-clique")[0].play();
    transicao($(".parte-b"), $(".parte-a"));
  });
}

function verificaFinalizacao() {
  const botoesPositivos = $(".btn-opcoes").filter(function () {
    return $(this).data("tipo") === "positivo";
  });

  const todosClicados = botoesPositivos.toArray().every(function (botao) {
    return $(botao).hasClass("clicado");
  });

  if (todosClicados) {
    abrirModalFinal = true;  // Marca para abrir depois do feedback
  }
}

function escalaProporcao(largura, altura) {
  var larguraScreen = $(window).width();
  var alturaScreen = $(window).height();
  var proporcaoAltura = (alturaScreen * 100) / altura;
  var proporcaoLargura = (larguraScreen * 100) / largura;
  var proporcao, larguraAltura, larguraAlturaAuto;

  if (proporcaoAltura < proporcaoLargura) {
    larguraAltura = "height";
    larguraAlturaAuto = "width";
    proporcao = proporcaoAltura / 100;
  } else {
    larguraAltura = "width";
    larguraAlturaAuto = "height";
    proporcao = proporcaoLargura / 100;
  }

  console.log(proporcao, proporcaoAltura, proporcaoLargura);
  return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyConteudo() {
  var proporcao1920 = escalaProporcao(1920, 1080)[0];

  $(".conteudo").css({
    transform: "scale(" + proporcao1920 + ")",
    "transform-origin": "center center",
  });

  var proporcao900;

  if ($(window).width() < 992) {
    proporcao900 = escalaProporcao(900, 576)[0];
  } else {
    proporcao900 = 1;
  }
}
