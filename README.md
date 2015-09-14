# ArtManager Project API


 - npm install              -->  instalar dependencias
 - npm test                 -->  rodar os testes
 - npm start                -->  rodar o projeto
 

## Models
**NÃO esqueçam** de colocar os parametros do contrario, ao tentar fazer insert vai dar erro, pois o sequelize vai tentar inserir data de update e de criação do parâmetro

```
    freezeTableName: true,
    timestamps: false
```

## Estrutura

```
ArtManager.API                          --> raiz projeto
├── app.js                              --> arquivo responsavel pelo START do projeto 
│
├── config                              --> arquivos de configuracao, enviroments, routes etc.	
│   └── routes                          --> arquivos de rota de todo projeto 
│       └── index.js                    --> arquivo raiz para as rotas, ele chamará o resto das rotas 
│     
├── db                                  --> arquivo de banco de dados 
│
├── domain                              --> arquivos relacionados à dominio 
│   ├── business                        --> classes de negocio 
│   ├── dao                             --> classes de acesso a banco 
│   └── model                           --> mapeamento de modelos (AQUI SERÁ FEITO O MAPEAMENTO PARA ORM)
│
├── node_modules                        --> packages do node 
│
├── package.json                        --> arquivo de configuração de pacotes e scripts
│
├── services                            --> arquivos responsaveis pelas requisicoes do projeto 
│
└── tests                               --> testes do projeto, mock, stubs, unit_tests e etc.
    └── unit_tests                      --> testes unitarios 
```