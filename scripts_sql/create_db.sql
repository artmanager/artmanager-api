create table tb_user (
	id Serial,
	ds_name varchar(100),
	ds_user varchar(100),
	ds_password varchar(100),
	nr_profile smallint,
	constraint pk_user_id primary key (id)
);

create table tb_client (
	id serial,
	ds_name varchar(100),
	ds_cpf_cnpj varchar(50),
	ds_email varchar(100),
	constraint pk_id_client primary key (id)
);

create table tb_supplier (
	id Serial,
	ds_name varchar(100),
	ds_email varchar(200),	
	constraint pk_id_supplier primary key (ID)
);

create table tb_address (
	id Serial,
	id_client integer,
	id_supplier integer,
	ds_street varchar(100),
	nr_number integer,
	ds_neighborhood varchar(50),
	ds_zip_code varchar(10),
	ds_city varchar(30),
	ds_state varchar(2),
	ds_country varchar(30),
	constraint pk_address_id primary key (id),
	constraint fk_address_client_id_client foreign key (id_client) references tb_client (id),
	constraint fk_address_supplier_id_supplier foreign key (id_supplier) references tb_supplier (id)
);

create table tb_phone (
	id Serial not null,
	id_client integer,
	id_supplier integer,
	nr_ddd integer,
	ds_number varchar(15),
	nr_type integer,
	constraint pk_phone_id primary key (id),
	constraint fk_phone_client_id_client foreign key (id_client) references tb_client (id),
	constraint fk_phone_supplier_id_supplier foreign key (id_supplier) references tb_supplier (id)
);

create table tb_product_category (
	id Serial not null,
	ds_describe varchar(100),
	constraint pk_product_category_id primary key (ID)
);

create table tb_product (
	id Serial,
	id_product_category integer not null,
	id_supplier integer,
	ds_name varchar(100),
	ds_size varchar(20),
	ds_weight varchar(20),
	ds_describe varchar(400),
	vl_cost numeric(15, 2),
	vl_sale_cost numeric(15, 2),
	nr_quantity int,
	constraint pk_product_id primary key (id),
	constraint fk_product_category_id_product_category foreign key (id_product_category) references tb_product_category (id)
);


create table tb_commission (
	id Serial,
	id_product integer not null,
	lv_percentage numeric(4,4),
	constraint pk_comission_id primary key (id),
	constraint fk_commission_product_id_product foreign key (id_product) references tb_product (id)
);

create table tb_which (
	id Serial,
	id_user integer not null,
	id_client integer not null,
	dt_date_which timestamp not null,
	vl_total_value numeric (15,2),
	vl_entrance numeric (15,2),
	vl_discount numeric (15,2),
	constraint pf_which_id primary key (id),
	constraint fk_which_user_id_user foreign key (id_user) references tb_user (id),
	constraint fk_which_client_id_client foreign key (id_client) references tb_client (ID)

);

create table tb_production (
	id Serial,
	id_client integer not null,
	id_product integer not null,
	id_which integer not null,
	id_user integer not null,
	dt_start_date timestamp,
	dt_delivery_date timestamp,
	lv_percentage numeric(3),
	constraint pk_production_id primary key (id),
	constraint fk_production_client_id_client foreign key (id_client) references tb_client (id),
	constraint kf_production_product_id_product foreign key (id_product) references tb_product (id),
	constraint fk_production_which_id_which foreign key (id_which) references tb_which (id),
	constraint fk_production_user_id_user foreign key (id_user) references tb_user (id)
);

create table TB_product_which (
	id_which integer not null,
	id_product integer not null,
	constraint fk_id_which foreign key (id_which) references tb_which (id),
	constraint fk_id_product foreign key (id_product) references tb_product (id)
);
