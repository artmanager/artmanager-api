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

## Configuração do NGINX para API

```
server {
    listen 80 default_server;
    access_log /var/log/nginx/artmanager-api.log;
    error_log  /var/log/nginx/artmanager-api-error.log debug;
    server_name api.artmanager.com.br;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

## Configuração do proxy reverso no MONIT

```
server {
  listen 80;
  server_name monit.artmanager.com.br;

  location / {
    proxy_pass http://localhost:2812;
 }
}
```

## Configuração de monitoramento com o MONIT

```
set daemon 60
set logfile /var/log/monit.log
set idfile /var/.monit.id

####### MONIT UI ######

set httpd
    port 2812
    use address 0.0.0.0
    allow 127.0.0.1

####### SERVICES ######

check system $HOST
    if loadavg (5min) > 3 then alert
    if loadavg (15min) > 1 then alert
    if memory usage > 80% for 2 cycles then alert
    if swap usage > 20% for 4 cycles then alert
    if cpu usage (user) > 80% for 2 cycles then alert
    if cpu usage (system) > 20% for 2 cycles then alert
    if cpu usage (wait) > 80% for 2 cycles then alert

## nginx
check process nginx
  with pidfile /run/nginx.pid
  start program = "/etc/init.d/nginx start"
  stop program = "/etc/init.d/nginx stop"
  if failed host 127.0.0.1 port 80 for 2 cycles then restart
  if failed host 127.0.0.1 port 80 then exec /etc/monit/slack.rb else if succeeded then exec /etc/monit/slack.rb

## api
check host api.artmanager with address api.artmanager.com.br
  start program = "/etc/init.d/supervisor start"
  stop program = "/etc/init.d/supervisor stop"
  if failed host api.artmanager.com.br port 80 then exec /etc/monit/slack.rb else if succeeded then exec /etc/monit/slack.rb
  if failed host api.artmanager.com.br port 80 for 2 cycles then restart

## supervisor
check process supervisor
  with pidfile /run/supervisord.pid
  start program = "/etc/init.d/supervisor start"
  stop program = "/etc/init.d/supervisor stop"
  if changed pid for 4 cycles then restart
  if changed pid then exec /etc/monit/slack.rb
```