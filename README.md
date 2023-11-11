
# Front-End da Aplicação FullStack: AutoPostoFlux. 

## Tecnologias Utilizadas: 
React, Typescript, Styled-Components e Axios. 

## Caso não consigam executar a aplicação, segue o link do vídeo do espelhamento da Tela, aplicação rodando e funcionando perfeitamente, conectada ao Back-end com o banco de dados Postgres: 

https://drive.google.com/file/d/1w-t6Wp-5G82KWalak9Xj0hEf0nCwIshd/view?usp=drivesdk

## Para Executar Aplicação na sua IDE aplique os seguintes comandos: 
1- Npm I. (Para instalar todas as dependencias)
2- Npm i styled-components. (Para Instalar o styled components, a estilização). 
3- Npm Axios (Para conexão do front com o back) 
4- Npm run dev (Para executar a aplicação) 

## Como funciona a Aplicação? 
No Site do Posto Flux o usuario pode adicionar um registro de abastacimento e exibir seu histórico pelo número do CPF(podendo ser qualquer número como: 123) todo novo registro ele adiciona seus dados e o mesmo valor para o CPf, quantos litros e qual tipo de combustível abasteceu. Quando o usuário digita seu Cpf no campo de Histórico aparece todos os registros dele, já com o valor calculado para cada tipo de Combustível e também a Data do registro. 

## Passo a Passo da Aplicação: 
Sendo breve, primeiro criei a Home e adicionei ao Main principal, como era uma página simples, deixei todo conteúdo na Home mesmo, primeiro criei o Back-End depois criei o front, no front, aloquei as div's, h1's, h2's.. e depois estilizei com styled componentes. Estando pronta a estilização, parti para funcionalidades, para isso usei os Hooks do React UseState, useEffect, criei as funções que foram chamadas a cada OnClick. Primeiro desenvolvi o metodo GET do back-end, que exibe na tela os registros, depois criei o método post que adiciona um novo registro. Por fim, criei uma função para formatar a Data, porque no back-end ele trazia um formato não usado no dia-a-dia, visando trazer uma melhor qualidade ao usuário. 

## Considerações Finais: 
Foi um desafio que amei desenvolver, aprimorei minhas habilidades e conhecimentos como desenvolvedora. Espero que gostem! 


