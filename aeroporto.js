

  function wobterDataHoraFormatada() {
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
    var wdataHoraFormatada = data.toLocaleString("pt-BR", options);
    return dataHoraFormatada;
  }

  // Seu JavaScript existente
  // ...
  // Função para carregar o estoque do armazenamento local
  function wcarregarEstoqueDoLocalStorage() {
    var estoqueSalvo = localStorage.getItem("estoque");

    if (estoqueSalvo) {
      estoque = JSON.parse(estoqueSalvo);
      wexibirEstoque();
      wcalcularSomaEstoque();
    }
  }

  // Função para salvar o estoque no armazenamento local
  function wsalvarEstoqueNoLocalStorage() {
    localStorage.setItem("estoque", JSON.stringify(estoque));
  }

  // Função para carregar os dados do scroll-container do armazenamento local
  function wcarregarDadosDoLocalStorage() {
    var wdadosSalvos = localStorage.getItem("dadosScrollContainer");

    if (dadosSalvos) {
      document.getElementById("recebimentosTbody").innerHTML = dadosSalvos;
    }
  }

  // Função para salvar os dados do scroll-container no armazenamento local
  function wsalvarDadosNoLocalStorage() {
    var wdadosScrollContainer = document.getElementById("recebimentosTbody").innerHTML;
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
  wcarregarEstoqueDoLocalStorage();
  wcarregarDadosDoLocalStorage();

  function wregistrarRecebimento() {
    var wproductName = document.getElementById("productName").value;
    var wreceivedByName = document.getElementById("receivedByName").value;
    var wmatricula = document.getElementById("matricula").value;
    var wcurrentDate = obterDataHoraFormatada(); // Obtém a data e hora atuais

    if (productName && receivedByName && matricula) {
      var wtableBody = document.getElementById("recebimentosTbody");

      if (estoque[productName] > 0) {
        var wnewRow = tableBody.insertRow(tableBody.rows.length);
        var wcell1 = newRow.insertCell(0);
        var wcell2 = newRow.insertCell(1);
        var wcell3 = newRow.insertCell(2);
        var wcell4 = newRow.insertCell(3);

        wcell1.innerHTML = matricula;
        wcell2.innerHTML = receivedByName;
        wcell3.innerHTML = productName;
        wcell4.innerHTML = currentDate;

        estoque[productName]--;
        wexibirEstoque();
        wsalvarDadosNoLocalStorage();

        document.getElementById("receivedByName").value = "";
        document.getElementById("matricula").value = "";
      } else {
        alert("Estoque do produto " + wproductName + " esgotado!");
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

function wcalcularSomaEstoque() {
    var wsomaEstoque = 0;

    for (var item in estoque) {
        if (estoque.hasOwnProperty(item)) {
            somaEstoque +=parseInt(estoque[item]);
    }
}

  var welemento=document.getElementById("totalEstoque");
  if (elemento) { // Define o estilo do elemento para ocultar (display: none) elemento.style.display = 'none'; 
}
}





  // Chame a função exibirEstoque para exibir o estoque inicial ao carregar a página
  exibirEstoque();

  // Atualize a tabela e o estoque ao carregar a página
  window.onload = function () {
    wcarregarEstoqueDoLocalStorage();
    wcarregarDadosDoLocalStorage();
    wexibirEstoque();
    wcalcularSomaEstoque();
  };

  function walterarEstoqueInicial() {
    var wnovoEstoqueLatex = parseInt(prompt("Digite o novo valor para o estoque de Luva de Látex (amarela):"));
    var wnovoEstoqueNitrilica = parseInt(prompt("Digite o novo valor para o estoque de Luva Nitrílica (verde):"));
    var wnovoEstoquePigmentada = parseInt(prompt("Digite o novo valor para o estoque de Luva Pigmentada (algodão):"));
    var wnovoEstoqueNitrilon = parseInt(prompt("Digite o novo valor para o estoque de Luva Nitrilon:"));
    var wnovoEstoqueAvental = parseInt(prompt("Digite o novo valor para o estoque de Avental de Napa (preto):"));
    var wnovoEstoqueColete = parseInt(prompt("Digite o novo valor para o estoque de Colete Refletivo:"));
    var wnovoEstoqueMascara = parseInt(prompt("Digite o novo valor para o estoque de Máscara PFF2:"));
    var wnovoEstoqueProtetor = parseInt(prompt("Digite o novo valor para o estoque de Protetor Auricular:"));
    var wnovoEstoqueOculos = parseInt(prompt("Digite o novo valor para o estoque de Óculos de Segurança:"));
    var wnovoEstoqueBone = parseInt(prompt("Digite o novo valor para o estoque de Boné:"));
    var wnovoEstoqueBoneArabe = parseInt(prompt("Digite o novo valor para o estoque de Boné Árabe:"));
    var wnovoEstoqueCapa = parseInt(prompt("Digite o novo valor para o estoque de Capa de Chuva:"));



    // Verifique se os valores digitados são números válidos
    if (!isNaN(wnovoEstoqueLatex) && !isNaN(wnovoEstoqueNitrilica) && !isNaN(wnovoEstoquePigmentada) && !isNaN(wnovoEstoqueNitrilon) && !isNaN(wnovoEstoqueAvental) && !isNaN(wnovoEstoqueColete) && !isNaN(wnovoEstoqueMascara) && !isNaN(wnovoEstoqueProtetor) && !isNaN(wnovoEstoqueOculos) && !isNaN(wnovoEstoqueBone) && !isNaN(wnovoEstoqueBoneArabe) && !isNaN(wnovoEstoqueCapa)) {
      estoque["Luva de Látex (amarela)"] = wnovoEstoqueLatex;
      estoque["Luva Nitrílica (verde)"] = wnovoEstoqueNitrilica;
      estoque["Luva Pigmentada (algodão)"] = wnovoEstoquePigmentada;
      estoque["Luva Nitrilon"] = wnovoEstoqueNitrilon;
      estoque["Avental de Napa (preto)"] = wnovoEstoqueAvental;
      estoque["Colete Refletivo"] = wnovoEstoqueColete;
      estoque["Máscara PFF2 (azul)"] = wnovoEstoqueMascara;
      estoque["Protetor Auricular"] = wnovoEstoqueProtetor;
      estoque["Óculos de Segurança"] = wnovoEstoqueOculos;
      estoque["Boné"] = wnovoEstoqueBone;
      estoque["Boné Árabe"] = wnovoEstoqueBoneArabe;
      estoque["Capa de Chuva"] = wnovoEstoqueCapa;


      // Exiba o estoque atualizado
      wexibirEstoque();
      wcalcularSomaEstoque();

      // Salve o estoque no armazenamento local
      wsalvarEstoqueNoLocalStorage();
    } else {
      alert("Por favor, digite valores numéricos válidos.");
    }
  }

  function wacessarAlteracaoEstoque() {
    var wsenha = prompt("Digite a senha para acessar:");

    // Verifique se a senha é correta (substitua 'suaSenhaAqui' pela senha desejada)
    if (wsenha === "1234") {
      walterarEstoqueInicial();
    } else {
      alert("Senha incorreta. Acesso negado.");
    }
  }

  function wlimparDadosLocalStorage() {
    // Carregar o estoque do LocalStorage antes de limpar os dados do scroll-container
    wcarregarEstoqueDoLocalStorage();

    // Remover apenas os dados do scroll-container
    localStorage.removeItem("dadosScrollContainer");

    alert("Dados do LocalStorage (exceto scroll-container) limpos!");
  }

  // Função para filtrar os dados na tabela
  function wfiltrarDados(inputId, columnIndex) {
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
function wlimparDadosLocalStorage() {
// Solicitar a senha ao usuário
var wsenhaInserida = prompt("Digite a senha para limpar os dados:");

// Verificar se a senha está correta
if (wsenhaInserida === "1234") {
    // Carregar o estoque do LocalStorage antes de limpar os dados do scroll-container
    wcarregarEstoqueDoLocalStorage();

    // Remover apenas os dados do scroll-container
    localStorage.removeItem("dadosScrollContainer");

    alert("Dados do LocalStorage (exceto scroll-container) limpos!");
} else {
    alert("Senha incorreta. Acesso negado.");
}
}

// Aqui deve ser colocado o restante do seu JavaScript
function wsalvarEstoqueNoLocalStorage() {
  localStorage.setItem("estoque", JSON.stringify(estoque));
}

// Função para carregar os dados da tabela de estoque do armazenamento local
function wcarregarEstoqueDoLocalStorage() {
  var westoqueSalvo = localStorage.getItem("estoque");

  if (westoqueSalvo) {
    estoque = JSON.parse(estoqueSalvo);
    wexibirEstoque();
    wcalcularSomaEstoque();
  }
}

// Adicione esta função para salvar os dados da tabela de estoque ao fechar a página
window.onbeforeunload = function() {
  wsalvarEstoqueNoLocalStorage();
};

// Chame a função carregarEstoqueDoLocalStorage ao carregar a página
window.onload = function() {
  wcarregarEstoqueDoLocalStorage();
  wcarregarDadosDoLocalStorage();
  wexibirEstoque();
  wcalcularSomaEstoque();
};

  

// Seu JavaScript existente
// ...
 // Função para obter a data e hora formatadas

  

  

    
  
    
  

    
  

  
