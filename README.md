1 - Clonagem do projeto: Antes, os pré-requisitos para clonar qualquer projeto são possuir os recursos neccessários para fornecer a utilidade dos componentes do projeto.
Neste caso, o componente do projeto é o Node, logo, será necessário possuir o Node.js baixado na máquina.
Após instalar o Node, será necessário baixar npm ou Yarn (o projeto em si foi feito utilizando npm, mas use o que preferir).
Por fim, baixamos o Expo CLI, através da seguinte linha de comando no Prompt de Comando -> "npm install -g expo-cli", para baixar o Expo-CLI globalmente, ou seja, em todo o projeto, em 
qualquer máquina.


2 - Clonando o repositório do projeto: Após obter os pré-requisitos, clonamos o repositório do projeto usando Git ou GitHub.
Utilizando o Git, digite a seguinte linha de comando "git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git". Pelo GitHub, copie o link do repositório, e substitua no link.
Com a pasta disponível na sua máquina agora, acesse-a pelo terminal do seu sistema operacional, e insira a seguinte linha de comando: "npm install" ou "yarn install", para instalar o npm
ou o yarn, respectivamente. 

3 - Utilizando o Expo: Para esse passo, caso esteja utilizando a interface Expo, seria necessário instalar o aplicativo 'Expo Go' no seu celular, para conseguir realizar a leitura
de um QR Code no terminal de comando. Para gerar tal QR Code, é necessário iniciar um projeto em uma pasta, e digitar a linha "npx expo start --tunnel". Após ler o QR Code, o aplicativo
realiza um bundle (junção) do celular e do código-fonte a ser utilizado para construir o aplicativo. Através disso conseguimos ver as mudanças em tempo real.
