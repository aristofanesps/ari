
const dominioAtual = window.location.hostname;
if(dominioAtual==='https://aristofanesps.github.io/ari/aeroporto.html'{
  function obterDataHoraFormatada() {
    var data = new Date();
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };

    // Formate a data e hora
    var dataHoraFormatada = data.toLocaleString("pt-BR", options);
    return dataHoraFormatada;
  }

  // Seu JavaScript existente
  // ...
  // Função para carregar o estoque do armazenamento local
  function carregarEstoqueDoLocalStorage() {
    var estoqueSalvo = localStorage.getItem("estoque");

    if (estoqueSalvo) {
      estoque = JSON.parse(estoqueSalvo);
      exibirEstoque();
      calcularSomaEstoque();
    }
  }

  // Função para salvar o estoque no armazenamento local
  function salvarEstoqueNoLocalStorage() {
    localStorage.setItem("estoque", JSON.stringify(estoque));
  }

  // Função para carregar os dados do scroll-container do armazenamento local
  function carregarDadosDoLocalStorage() {
    var dadosSalvos = localStorage.getItem("dadosScrollContainer");

    if (dadosSalvos) {
      document.getElementById("recebimentosTbody").innerHTML = dadosSalvos;
    }
  }

  // Função para salvar os dados do scroll-container no armazenamento local
  function salvarDadosNoLocalStorage() {
    var dadosScrollContainer = document.getElementById("recebimentosTbody").innerHTML;
    localStorage.setItem("dadosScrollContainer", dadosScrollContainer);
  }

  var estoque = localStorage.getItem("estoque")
? JSON.parse(localStorage.getItem("estoque"))
: {
  "Luva de Látex (amarela)": 2,
  "Luva Nitrílica (verde)": 10,
  "Luva Pigmentada (algodão)": 10,
  "Luva Nitrilon": 12,
  "Avental de Napa (preto)": 12,
  "Colete Refletivo": 12,
  "Máscara PFF2 (azul)": 12,
  "Protetor Auricular": 12,
  "Óculos de Segurança": 12,
  "Boné": 12,
  "Boné Árabe": 12,
  "Capa de Chuva": 12



};

  // Carregue o estoque e os dados do scroll-container ao inicializar a página
  carregarEstoqueDoLocalStorage();
  carregarDadosDoLocalStorage();

  function registrarRecebimento() {
    var productName = document.getElementById("productName").value;
    var receivedByName = document.getElementById("receivedByName").value;
    var matricula = document.getElementById("matricula").value;
    var currentDate = obterDataHoraFormatada(); // Obtém a data e hora atuais

    if (productName && receivedByName && matricula) {
      var tableBody = document.getElementById("recebimentosTbody");

      if (estoque[productName] > 0) {
        var newRow = tableBody.insertRow(tableBody.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = matricula;
        cell2.innerHTML = receivedByName;
        cell3.innerHTML = productName;
        cell4.innerHTML = currentDate;

        estoque[productName]--;
        exibirEstoque();
        salvarDadosNoLocalStorage();

        document.getElementById("receivedByName").value = "";
        document.getElementById("matricula").value = "";
      } else {
        alert("Estoque do produto " + productName + " esgotado!");
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }

  function exibirEstoque() {
    document.getElementById("estoqueInicialLatex").innerText = estoque["Luva de Látex (amarela)"];
    document.getElementById("estoqueInicialNitrilica").innerText = estoque["Luva Nitrílica (verde)"];
    document.getElementById("estoqueInicialPigmentada").innerText = estoque["Luva Pigmentada (algodão)"];
    document.getElementById("estoqueInicialNitrilon").innerText = estoque["Luva Nitrilon"];
    document.getElementById("estoqueInicialAvental").innerText = estoque["Avental de Napa (preto)"];
    document.getElementById("estoqueInicialColete").innerText = estoque["Colete Refletivo"];
    document.getElementById("estoqueInicialMascara").innerText = estoque["Máscara PFF2 (azul)"];
    document.getElementById("estoqueInicialProtetor").innerText = estoque["Protetor Auricular"];
    document.getElementById("estoqueInicialOculos").innerText = estoque["Óculos de Segurança"];
    document.getElementById("estoqueInicialBone").innerText = estoque["Boné"];
    document.getElementById("estoqueInicialBoneArabe").innerText = estoque["Boné Árabe"];
    document.getElementById("estoqueInicialCapa").innerText = estoque["Capa de Chuva"];
  }

function calcularSomaEstoque() {
    var somaEstoque = 0;

    for (var item in estoque) {
        if (estoque.hasOwnProperty(item)) {
            somaEstoque +=parseInt(estoque[item]);
    }
}

  var elemento=document.getElementById("totalEstoque");
  if (elemento) { // Define o estilo do elemento para ocultar (display: none) elemento.style.display = 'none'; 
}
}





  // Chame a função exibirEstoque para exibir o estoque inicial ao carregar a página
  exibirEstoque();

  // Atualize a tabela e o estoque ao carregar a página
  window.onload = function () {
    carregarEstoqueDoLocalStorage();
    carregarDadosDoLocalStorage();
    exibirEstoque();
    calcularSomaEstoque();
  };

  function alterarEstoqueInicial() {
    var novoEstoqueLatex = parseInt(prompt("Digite o novo valor para o estoque de Luva de Látex (amarela):"));
    var novoEstoqueNitrilica = parseInt(prompt("Digite o novo valor para o estoque de Luva Nitrílica (verde):"));
    var novoEstoquePigmentada = parseInt(prompt("Digite o novo valor para o estoque de Luva Pigmentada (algodão):"));
    var novoEstoqueNitrilon = parseInt(prompt("Digite o novo valor para o estoque de Luva Nitrilon:"));
    var novoEstoqueAvental = parseInt(prompt("Digite o novo valor para o estoque de Avental de Napa (preto):"));
    var novoEstoqueColete = parseInt(prompt("Digite o novo valor para o estoque de Colete Refletivo:"));
    var novoEstoqueMascara = parseInt(prompt("Digite o novo valor para o estoque de Máscara PFF2:"));
    var novoEstoqueProtetor = parseInt(prompt("Digite o novo valor para o estoque de Protetor Auricular:"));
    var novoEstoqueOculos = parseInt(prompt("Digite o novo valor para o estoque de Óculos de Segurança:"));
    var novoEstoqueBone = parseInt(prompt("Digite o novo valor para o estoque de Boné:"));
    var novoEstoqueBoneArabe = parseInt(prompt("Digite o novo valor para o estoque de Boné Árabe:"));
    var novoEstoqueCapa = parseInt(prompt("Digite o novo valor para o estoque de Capa de Chuva:"));



    // Verifique se os valores digitados são números válidos
    if (!isNaN(novoEstoqueLatex) && !isNaN(novoEstoqueNitrilica) && !isNaN(novoEstoquePigmentada) && !isNaN(novoEstoqueNitrilon) && !isNaN(novoEstoqueAvental) && !isNaN(novoEstoqueColete) && !isNaN(novoEstoqueMascara) && !isNaN(novoEstoqueProtetor) && !isNaN(novoEstoqueOculos) && !isNaN(novoEstoqueBone) && !isNaN(novoEstoqueBoneArabe) && !isNaN(novoEstoqueCapa)) {
      estoque["Luva de Látex (amarela)"] = novoEstoqueLatex;
      estoque["Luva Nitrílica (verde)"] = novoEstoqueNitrilica;
      estoque["Luva Pigmentada (algodão)"] = novoEstoquePigmentada;
      estoque["Luva Nitrilon"] = novoEstoqueNitrilon;
      estoque["Avental de Napa (preto)"] = novoEstoqueAvental;
      estoque["Colete Refletivo"] = novoEstoqueColete;
      estoque["Máscara PFF2 (azul)"] = novoEstoqueMascara;
      estoque["Protetor Auricular"] = novoEstoqueProtetor;
      estoque["Óculos de Segurança"] = novoEstoqueOculos;
      estoque["Boné"] = novoEstoqueBone;
      estoque["Boné Árabe"] = novoEstoqueBoneArabe;
      estoque["Capa de Chuva"] = novoEstoqueCapa;


      // Exiba o estoque atualizado
      exibirEstoque();
      calcularSomaEstoque();

      // Salve o estoque no armazenamento local
      salvarEstoqueNoLocalStorage();
    } else {
      alert("Por favor, digite valores numéricos válidos.");
    }
  }

  function acessarAlteracaoEstoque() {
    var senha = prompt("Digite a senha para acessar:");

    // Verifique se a senha é correta (substitua 'suaSenhaAqui' pela senha desejada)
    if (senha === "1234") {
      alterarEstoqueInicial();
    } else {
      alert("Senha incorreta. Acesso negado.");
    }
  }

  function limparDadosLocalStorage() {
    // Carregar o estoque do LocalStorage antes de limpar os dados do scroll-container
    carregarEstoqueDoLocalStorage();

    // Remover apenas os dados do scroll-container
    localStorage.removeItem("dadosScrollContainer");

    alert("Dados do LocalStorage (exceto scroll-container) limpos!");
  }

  // Função para filtrar os dados na tabela
  function filtrarDados(inputId, columnIndex) {
    var input, filter, table, tbody, tr, td, i, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    table = document.getElementById("recebimentosTable");
    tbody = table.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[columnIndex];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
function limparDadosLocalStorage() {
// Solicitar a senha ao usuário
var senhaInserida = prompt("Digite a senha para limpar os dados:");

// Verificar se a senha está correta
if (senhaInserida === "1234") {
    // Carregar o estoque do LocalStorage antes de limpar os dados do scroll-container
    carregarEstoqueDoLocalStorage();

    // Remover apenas os dados do scroll-container
    localStorage.removeItem("dadosScrollContainer");

    alert("Dados do LocalStorage (exceto scroll-container) limpos!");
} else {
    alert("Senha incorreta. Acesso negado.");
}
}

// Aqui deve ser colocado o restante do seu JavaScript
function salvarEstoqueNoLocalStorage() {
  localStorage.setItem("estoque", JSON.stringify(estoque));
}

// Função para carregar os dados da tabela de estoque do armazenamento local
function carregarEstoqueDoLocalStorage() {
  var estoqueSalvo = localStorage.getItem("estoque");

  if (estoqueSalvo) {
    estoque = JSON.parse(estoqueSalvo);
    exibirEstoque();
    calcularSomaEstoque();
  }
}

// Adicione esta função para salvar os dados da tabela de estoque ao fechar a página
window.onbeforeunload = function() {
  salvarEstoqueNoLocalStorage();
};

// Chame a função carregarEstoqueDoLocalStorage ao carregar a página
window.onload = function() {
  carregarEstoqueDoLocalStorage();
  carregarDadosDoLocalStorage();
  exibirEstoque();
  calcularSomaEstoque();
};

  

// Seu JavaScript existente
// ...
 // Função para obter a data e hora formatadas

  
}else{
  alert("ola mundo")
}

  

    
  
    
  

    
  

  
