drop view consult_which;
create view consult_which 
as 
select 
	w.Id,
	c.id as clientId,
	pd.id as productionId,
	w.dt_date_which creationDate,
	u.ds_name as name,
	s.ds_name supplier,
	pd.dt_delivery_date delivery_date,
	p.ds_name as productName,
	p.ds_size height,
	p.ds_weight weight,
	pw.ds_describe describe,
	c.ds_name as clientName,
	c.ds_email as clientEmail,
	w.vl_discount discount,
	w.vl_entrance entrance,
	w.vl_total_value total_value,
	pd.vl_quantity as quantity,
	pd.vl_percentage as percentage,
	w.bl_pendingfallback as pendingfallback
from tb_which w
	join tb_user u
		on u.id = w.id_user
	join tb_client c
		on c.id = w.id_client
	join tb_product_which pw
		on pw.id_which = w.id
	join tb_product p
		on p.id = pw.id_product
	left join tb_production pd
		on pd.id_which = w.id
 		and pd.id_product_which = pw.id
	left join tb_supplier s
		on s.id = p.id_supplier
order by w.id desc;
