// Obtenha referência para os botões
const buttons = document.querySelectorAll('.button');

// Obtenha referência para o elemento de conteúdo central
const content = document.getElementById('content');

// Variáveis para armazenar as informações dos usuários
let usuarios = [];

// Adicione o evento de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtenha o atributo 'data-content' do botão clicado
    const contentId = button.getAttribute('data-content');

    // Chame a função correspondente com base no atributo 'data-content' do botão clicado
    if (contentId === 'entradaFuncionarios') {
      entradaFuncionarios();
    } else if (contentId === 'entradaVisitantes') {
      entradaVisitantes();
    } else if (contentId === 'cartaoEspecial') {
      cartaoEspecial();
    } else if (contentId === 'funcionariosMoreno') {
      funcionariosMoreno();
    } else if (contentId === 'cadastroUsuario') {
      cadastroUsuario();
    } else if (contentId === 'botao6') {
      botao6();
    }
  });
});

// Funções correspondentes a cada botão
function entradaFuncionarios() {
  // Cria uma nova janela dinâmica
  const windowDiv = document.createElement('div');
  windowDiv.classList.add('window');

  // Cria a caixa de pesquisa por CPF ou Crachá
  const pesquisaInput = criarInput('Pesquisar:', 'pesquisa');

  // Cria as caixas de texto para as informações do usuário
  const nomeInput = criarInput('Nome:', 'nome', 'input-text');
  const cargoInput = criarInput('Cargo:', 'cargo', 'input-text');
  const centroCustoInput = criarInput('Centro de Custo:', 'centro-custo', 'input-text');
  const crachaInput = criarInput('Crachá:', 'cracha', 'input-text');
  const cpfInput = criarInput('CPF:', 'cpf', 'input-text');

  // Cria o botão de filtrar
  const filtrarButton = document.createElement('button');
  filtrarButton.textContent = 'Filtrar';
  filtrarButton.addEventListener('click', () => {
    const termoPesquisa = pesquisaInput.input.value;
    filtrarUsuarios(termoPesquisa);
  });

  // Adiciona o evento de entrada (input) para a caixa de pesquisa
  pesquisaInput.input.addEventListener('input', () => {
    limparDadosUsuario();
  });

  // Adiciona as classes CSS para estilização
  nomeInput.label.classList.add('label-text');
  cargoInput.label.classList.add('label-text');
  centroCustoInput.label.classList.add('label-text');
  crachaInput.label.classList.add('label-text');
  cpfInput.label.classList.add('label-text');

  // Adiciona as caixas de texto, botão e textos à janela
  windowDiv.append(
    pesquisaInput.label,
    pesquisaInput.input,
    filtrarButton,
    nomeInput.label,
    nomeInput.input,
    cargoInput.label,
    cargoInput.input,
    centroCustoInput.label,
    centroCustoInput.input,
    crachaInput.label,
    crachaInput.input,
    cpfInput.label,
    cpfInput.input
  );

  // Limpa o conteúdo anterior e adiciona a janela à página
  content.textContent = '';
  content.appendChild(windowDiv);
}

function entradaVisitantes() {
  content.textContent = 'Conteúdo da entrada de visitantes';
}

function cartaoEspecial() {
  content.textContent = 'Conteúdo do cartão especial';
}

function funcionariosMoreno() {
  content.textContent = 'Conteúdo dos funcionários que saem com bens Moreno';
}

function cadastroUsuario() {
  // Cria uma nova janela dinâmica
  const windowDiv = document.createElement('div');
  windowDiv.classList.add('window');

  // Cria as caixas de texto para o cadastro do usuário
  const nomeInput = criarInput('Nome:', 'nome');
  const cargoInput = criarInput('Cargo:', 'cargo');
  const centroCustoInput = criarInput('Centro de Custo:', 'centro-custo');
  const crachaInput = criarInput('Crachá:', 'cracha');
  const cpfInput = criarInput('CPF:', 'cpf');

  // Adiciona o botão de salvar
  const button = document.createElement('button');
  button.textContent = 'Salvar';
  button.addEventListener('click', () => {
    const usuario = {
      nome: nomeInput.input.value,
      cargo: cargoInput.input.value,
      centroCusto: centroCustoInput.input.value,
      cracha: crachaInput.input.value,
      cpf: cpfInput.input.value
    };
    usuarios.push(usuario);
    console.log('Usuários:', usuarios);
    nomeInput.input.value = '';
    cargoInput.input.value = '';
    centroCustoInput.input.value = '';
    crachaInput.input.value = '';
    cpfInput.input.value = '';
  });

  windowDiv.append(
    nomeInput.label,
    nomeInput.input,
    cargoInput.label,
    cargoInput.input,
    centroCustoInput.label,
    centroCustoInput.input,
    crachaInput.label,
    crachaInput.input,
    cpfInput.label,
    cpfInput.input,
    button
  );

  // Limpa o conteúdo anterior e adiciona a janela à página
  content.textContent = '';
  content.appendChild(windowDiv);
}

function botao6() {
  content.textContent = 'Conteúdo do Botão 6';
}

// Função auxiliar para criar um input com uma label
function criarInput(labelText, inputId, inputClass) {
  const container = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = labelText;
  const input = document.createElement('input');
  input.type = 'text';
  input.id = inputId;
  if (inputClass) {
    input.classList.add(inputClass);
  }
  container.append(label, input);
  return { label, input }; // Retorna um objeto com o rótulo e o elemento de entrada de texto
}

// Função para filtrar os usuários com base no termo de pesquisa
function filtrarUsuarios(termoPesquisa) {
  const usuarioFiltrado = usuarios.find(usuario => {
    return usuario.cpf === termoPesquisa || usuario.cracha === termoPesquisa;
  });

  if (usuarioFiltrado) {
    document.getElementById('nome').value = usuarioFiltrado.nome;
    document.getElementById('cargo').value = usuarioFiltrado.cargo;
    document.getElementById('centro-custo').value = usuarioFiltrado.centroCusto;
    document.getElementById('cracha').value = usuarioFiltrado.cracha;
    document.getElementById('cpf').value = usuarioFiltrado.cpf;
  } else {
    limparDadosUsuario();
  }
}

// Função para limpar os dados do usuário
function limparDadosUsuario() {
  document.getElementById('nome').value = '';
  document.getElementById('cargo').value = '';
  document.getElementById('centro-custo').value = '';
  document.getElementById('cracha').value = '';
  document.getElementById('cpf').value = '';
}
