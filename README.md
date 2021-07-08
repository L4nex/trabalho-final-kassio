Nomes: Lucas Machado, Luiz Kischel, Mateus Freitas


Tema: Sistema para estacionamento rotativo

Banco de dados: PG
Tecnologias: React e NodeJS

Telas:

- Tela de login
- Cadastro de usuário do sistema: Nesta tela, terão os seguintes campos para cadastro:
email, nome, telefone, senha de acesso, Avatar (Foto), tipo de usuário (Administrador, Gerente ou Operacional), data de criação e
data de atualização; (Cadastro de usuários que irão operar o sistema)
  Acesso de cada usuário:
    - Administrador: Acesso total ao sistema (Faz tudo) == A DIFERENÇA ENTRE O GERENTE E O ADMINSTRADOR, É QUE O ADMIN FAZ O CADASTRO E GERE AS PERMISSÕES DE CADA USUÁRIO E DEFINE AS CONFIGURAÇÕES DO SISTEMA ==
    - Gerente: Visualizar os relatórios (Quantidade de carros que entraram no dia/mes e o valor arrecadado) e cadastros gerais
    - Operacional: Entrada e saída de veiculos e cadastro de mensalistas.

- Cadastro de mensalistas: Nesta tela, terão os seguintes campos para cadastro: 
 Nome completo, CPF, tipo do veiculo, placa do veiculo, cor do veiculo, email, data de entrada.
 Ao acessar a tela, se possuir na URL o parâmetro de id, será recuperado os dados do backend e populado em tela, ao gravar, se o registro possuir id, altera, se não possuir, cria
 
- Cadastro de rotativos:  Nesta tela, terão os seguintes campos para cadastro: 
Placa do veiculo, tipo do veiculo (Carro/moto), e data/hora de entrada. 
Ao acessar a tela, se possuir na URL o parâmetro de id, será recuperado os dados do backend e populado em tela, ao gravar, se o registro possuir id, altera, se não possuir, cria
OPCIONAL QUE SERIA FODA: criar uma rota que receba um ID e com base nesse id exiba o valor a ser pago no momento da requisição, o ID será armazenado como QR code.

- Listagem de veiculos rotativos: Nesta tela, serão exibidos os seguintes itens:
Placa do veiculo, tipo, hora, um botão para editar(Ao clicar, redireciona para a tela de cadastro de mensalista passando o ID pela URL) o usuário e um botão para registrar a saida.
  Ao clicar sobre o botão para registrar a saída, exibido uma modal, com o valor a ser pago com base no tempo que o carro ficou no estacionamento.
  Os preços são cadastrados nas configurações do sistema.
  
- Listagem de mensalistas: Nesta tela serão exibidos os seguintes itens:
Data de entrada, nome completo, cpf, um botão para editar o usuário(Ao clicar, redireciona para a tela de cadastro de mensalista passando o ID pela URL) e outro para exclusão de usuário.

- Tela de configurações de valores: Nesta tela, terão os seguintes campos:
  Valores rotativo(Moto): Até 1 hora, até 3 horas, até 8 horas, diária;
  Valores rotativo(Carro): Até 1 hora, até 3 horas, até 8 horas, diária;
  Valores mensalistas: Valor mensal carro, valor mensal moto; (O mês possui 30 dias);
  Quantidade total de vagas rotativo(carro);
  Quantidade total de vagas rotativo(moto);
  Quantidade total de vagas mensalista(carro);
  Quantidade total de vagas mensalista(moto);
  
- Tela de relatórios do gerente: Quantidade de veiculos que entraram no dia(Rotativo), Quantidade de veiculos que entraram no mês(Rotativo), Faturamento do mês, Total de mensalistas;
