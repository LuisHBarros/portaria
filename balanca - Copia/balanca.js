    var selectEmpresa = document.getElementById("selectEmpresa");
      var selectOperador = document.getElementById("selectOperador");
      var selectFornecedor = document.getElementById("selectFornecedor");
      var selectMotorista = document.getElementById("selectMotorista");
      var selectTransportadora = document.getElementById("selectTransportadora");
      var selectCarga = document.getElementById("selectCarga");

      var opcoesEmpresa = Array.from(selectEmpresa.options);
      var opcoesOperador = Array.from(selectOperador.options);
      var opcoesFornecedor = Array.from(selectFornecedor.options);
      var opcoesMotorista = Array.from(selectMotorista.options);
      var opcoesTransportadora = Array.from(selectTransportadora.options);
      var opcoesCarga = Array.from(selectCarga.options);

      function filtrarSelect(input, select, opcoes) {
        var filtro = input.value.toUpperCase();
        var filtrados = opcoes.filter(function (opcao) {
          return opcao.value.toUpperCase().indexOf(filtro) > -1;
        });
        select.innerHTML = "";
        filtrados.forEach(function (opcao) {
          select.appendChild(opcao);
        });
      }

      var inputEmpresa = document.getElementById("link1");
      var inputOperador = document.getElementById("link1");
      var inputFornecedor = document.getElementById("link1");
      var inputMotorista = document.getElementById("link1");
      var inputTransportadora = document.getElementById("link1");
      var inputCarga = document.getElementById("link1");

      inputEmpresa.addEventListener("input", function () {
        filtrarSelect(inputEmpresa, selectEmpresa, opcoesEmpresa);
      });

      inputOperador.addEventListener("input", function () {
        filtrarSelect(inputOperador, selectOperador, opcoesOperador);
      });

      inputFornecedor.addEventListener("input", function () {
        filtrarSelect(inputFornecedor, selectFornecedor, opcoesFornecedor);
      });

      inputMotorista.addEventListener("input", function () {
        filtrarSelect(inputMotorista, selectMotorista, opcoesMotorista);
      });

      inputTransportadora.addEventListener("input", function () {
        filtrarSelect(
          inputTransportadora,
          selectTransportadora,
          opcoesTransportadora
        );
      });

      inputCarga.addEventListener("input", function () {
        filtrarSelect(inputCarga, selectCarga, opcoesCarga);
      });