alter table tb_production add id_product_which integer;
alter table tb_production add constraint FK_Id_Product_Which foreign key (id_product_which) references tb_product_which (id);