# ArtManager Project API

 - Instalação do NodeJS v5.6.0 e NPM

```
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm -g
```

 - Instalação das dependências e pacotes do projeto (necessário estar na caiz do projeto)

```
## instalar dependencias
npm install
##rodar os testes
npm test
##rodar o projeto
npm start
```
 
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

## Configuração do supervisor na EC2

```
[program:artmanager-api]
command=/usr/bin/npm start
directory=/home/artmanager/artmanager-api
user=artmanager
autostart=true
autorestart=true
stopsignal=QUIT
stdout_logfile=/var/log/artmanager/artmanager-api-error.log
stdout_logfile_backups=0
stdout_logfile_maxbytes=0
stderr_logfile=/var/log/artmanager/artmanager-api.log
stderr_logfile_backups=0
stderr_logfile_maxbytes=0
```