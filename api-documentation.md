Using this tool
---------------

This page lets you create HTML by entering text in a simple format that's easy to read and write.

  - Type Markdown text in the left window
  - See the HTML in the right

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site] [1]:

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable 
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This document is written in Markdown; you can see the plain-text version on the left.  To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.  You can see a Markdown syntax guide by switching the right-hand window from *Preview* to *Syntax Guide*.

Showdown is a Javascript port of Markdown.  You can get the full [source code] by clicking on the version number at the bottom of the page.

**Start with a [blank page] or edit this document in the left window.**

  [john gruber]: http://daringfireball.net/
  [1]: http://daringfireball.net/projects/markdown/
  [source code]: http://www.attacklab.net/showdown-v0.9.zip
  [blank page]: ?blank=1 "Clear all text"



# Rotas #

---------------

### Gerar Token ### 

    Rota: /authentication
    Method: POST
    Param: { data : btoa('user-password') }
    Result success : {
        id: 1,
	    name: artmanager,
        profile : 1,
        token : ‘eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9’ 
    }
    Result error : { error : 'Usuário ou senha inválidos.'}

### Enviar Token ###
    header: 'x-access-token’

### Categoria de produto ###
	* Cadastro *
		Rota: /productCategory
		Method: POST
		Param: { "describe": "categoria" }
		Result success: { success : 'Categoria cadastrada com sucesso'}
		Result error: { error : 'Não foi possível cadastrar a Categoria' }

	* GetAllCategory *
		Rota: /productCategory
		Method: GET
		Param: 
		Result succes: { productCategory: [{ id: 1, describe: ‘descrição’ }] }

### Fornecedor ###
	* Consulta todos fornecedores *
		Rota: /supplier
		Method: GET
		Param: 
		Result success: { supplier: [{ id: 1,  name: ‘nome’, email: ‘email’ }] }
		Result error: { error: 'Não foi possível consultar os fornecedores. ' }

    * Cadastra fornecedor *
    //remover ddd e country
		Rota: /supplier
		Method: POST
		Param: { 
			name: ‘Nome fornecedor’,
			email: ‘email fornecedor’,
			address: [ { 
				street : ‘rua’,
				number : 123,
				neighborhood :’Bairro’,
				zip_code : 00000-000,
				city : ‘cidade’,
				state : ‘estado’, // Este campos é varchar(2)
				country : pais
            } ],
            phone: [ { 
	            ddd : 11,
                number : ‘99999-9999’, //este é uma String 
                type : 1
            } ]
        }
        Result success: { success : 'Fornecedor cadastrado com sucesso.'}
        Result error: { error : 'Não foi possível cadastrar o fornecedor. Erro : '}

### Cliente
	* Cadastro *
		Rota: /client
		Method: POST
		Param: client: {name: 'nome', cpf_cnpj: '2356899',
				email: 'mail@mail.com' 	}, 
			address: [{ 
				street: 'rua',
				number: 12,
				neighborhood: 'teste',
				zip_code: '0681460',
				city: 'embu',
				state: 'sp',
				country: 'Brasil'
			}],
			phone: [{ ddd : 11, number : '99999-9999', type : 1	}] validar cadastro
		}

		Result success: { success: 'Cliente cadastrado com sucesso'}
		Result error: { error : 'Não foi possível cadastrar o usuário'}

    * Consultar clientes *
	    Rota: /client
	    Method: GET
	    Param:
        result success : clients: [ { id: 2,  
            name: 'name',  
            cpf_cpnj: '2356899',   
            email:'mail@mail.com' 
        } ]
   	    result error: error: ‘Não foi possível consultar os clientes ’ + e;

### Produto
	* Cadastro *
		Rota: /product
		Method: POST
		Param: { id_product_category:1,
			id_supplier : 1,
				name : "Product Test",
			size : "20cm",
		    		weight : "20cm",
		    		describe : "Produto teste",
		    		cost : 25.2,
		    		sale_cost: 55.1,
		    		quantity: 20
        }
		Result success: { success: 'Produto cadastrado com sucesso.'}
		Result: error: { error: 'Parametros do produto invalidos'}

	* Consultar todos Produtos *
		Rota: /product
		Method: GET
		Param:
		Result success { products: 
            [{ id : 1
			category: "teste",
			supplier : "Maria",
			name : "Product Test",
		    size : "20cm",
		    weight : "20cm",
		    describe : "Produto teste",
		    cost : 25.2,
		    sale_cost: 55.1,
		    quantity: 20
        }]  }
        Result error: { error: ‘Não foi possível consultar os produtos’ }

### Users
	* Cadastrar usuário *
		Rota: /users
		Method: POST
		Param: { user : { 
			name : ‘Test’
            user : ‘artmanager’,
            password: ‘artmanager’,
            profile: 1    // 0 = Admin, 1 = User
            } 
        }
        result success: { success : 'Usuário Cadastrado com sucesso.' }
        result error :  { error : ‘Não foi possível cadastrar o usuário’ }
    * Mudar Senha *
	    Rota: /users
	    method: PUT
	    param: { 
            old: ‘SenhaAntiga’, 
            password: ‘novaSenha’, 
            user: ‘artmanager’
        }
		result succes: { success: ‘Senha alterada com sucesso’ }
		result error:  { error: ‘Usuário ou senha invalidos’ }’

### Pedido
	* Cadastrar um pedido *
		Rota: /which
		method: POST
		param: {
            client : { id : 123 },
            user : { id: 123 },
            which : {
                total_value // valor total da venda
		        entrance    // valor de entrada
		        discount    // valor de desconto
            },
            products: [{
	            id: 123,
                quantity: 4,
	            describe: ‘blusa azul marinho rosa ’’
	            pruduction: { delivery_date: ‘01-05-2016: 16:0:00’ }
            }]
        }
    result success: { success: ‘Pedido cadastrado com sucesso’ }
    result error: { error : ‘Erro ao cadastrar pedido’ }
    
    * Consultar pedido por cliente *
		Rota: /whichByClient,
		Method: POST,
		param:  { cpf_cnpj: null, name: 'gustavo', email: null }
		result success: { success: [{
            "id": "1212323323232113223321",
	        "creationdate": "2016-05-13T21:58:44.925Z",
	        "user": {    "name": "erick wendel"   },
	        “client”: { name: “gustavo”, email: erick@erick.com, phone: 213213   },
	        "order": {
	      	    "products": [{
                id_production: 1,
                supplier: ‘nome’,
                delivery_date: “25-05-05”
                name: “gustavo”
                height: “123”,
                weight: “32132”
                describe: “roupa 123”
                quantity: 123
                percentage: 100
	        }],
	        "discount": 5.5,
	        "entrance": 11.00,
	        "total": 65.00,
            “pendingfallback”: false
	        }
        }]
	}
		result error: { error: ‘Mensagem de erro’ }

    * Consultar pedidos *
		Rota: /consultWhich,
		Method: POST,
		param:  
		result success: { success: [{
		    "id": "1212323323232113223321",
	        "creationdate": "2016-05-13T21:58:44.925Z",
	        "user": {    "name": "erick wendel"   },
	        “client”: { name: “gustavo”   },
	        "order": {
	      	    "products": [{
	                id_production: 1,
                    supplier: ‘nome’,
                    delivery_date: “25-05-05”
                    name: “gustavo”
                    height: “123”,
                    weight: “32132”
                    describe: “roupa 123”
                    quantity: 123
                    percentage: 100
	            }],
                "discount": 5.5,
                "entrance": 11.00,
	            "total": 65.00
                “pendingfallback”: false
	        }
        }]
	}
	result error: { error: ‘Mensagem de erro’ }

    * Update status pedido *
	    Method: PUT
	    route: ‘/updateEntrancePending’
	    param: { 
	        id: 123, pendingfallback: false || true, entrance: “20,0” }  
	   result success: { success: 'Atualização efetuada com sucesso. ' }
	   result error: { error: 'Não foi possível atualizar os dados. ' }

    * Deletar pedido *
	    Method: DELETE,
	    route: ‘/which’
	    param: { id: 1 }
    	result: success: { success: ‘Pedido deletado com sucesso.’ }’

### Produção
	* Atualizar status de um (1) item em produção *
		Rota: /production
		Method: PUT
		Param:{ id: 1, percentage: 100 }
		result success: { success: 'Porcentagem atualizada com sucesso.' }
		result error: { error: 'Não foi possível atualizar a porcentagem.' }

    * Listagem de produção *
	    Rota: /production
	    Method: GET,
	    Param: 
	    result success: { success: [{
            id_production: 123
            "client" :  "erick wendel",
            "supplier": "Mariazinha",
            "delivery_date": "2016-05-13T21:58:44.925Z",
            "name": "Bolsa do Batman",
            “Quantity”: 2,
            "height": 100,
            "weight": 200.5,
            "describe": "Quatro vermelhas”
 		}]
	    result error: { error: ‘mensagem do erro’ }

### Relatorios
    * RELATORIO DE PRODUTOS *
        Method: POST
	    Rota: /reportProducts
	    data: { dt_from: '2016-05-01', dt_to: '2016-05-17' }
	    result succes:{ success: [{
            "name": "Samambaia",
            "quantity": 100,
            "supplier": "Maria",
            "sale_price": 39.30,
            "sale_cost": 20,00,
            "month": 1,
            "year: 2015 
	    }] }

    * RELATORIO DE FORNECEDORES *
        Method: POST
	    url: /reportSupplier
	    data: { dt_from: '2016-05-01', dt_to: '2016-05-17' }
	    result succes: { success: [{
            "supplier": "Maria",
            "total": "8.900",
            "month": 2,
            "year": 2016,
            "products": [{
                "name": "Bolsa do Batman",
                "height": 100,
                "weight": 200.5,
                "quantity": 6 
            }]
	    }] }

    * RELATORIO DE CAIXA *
        Enviar duas datas para pesquisa inicial
        {
            "total": 10.000, VL
            "totalCommission": 10,000" VL
            "totalSaleProducts": 100 qtd
            "totalProductionPending": 60 qtd
            "totalProductionProducts": 50 qtd
        }