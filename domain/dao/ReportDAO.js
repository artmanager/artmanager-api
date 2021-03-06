﻿'use strict';

let sequelize = require('../../db/postgres.js');

class ReportDAO {

    ReportProducts(obj, callback) {
        let query = "select "
                        + "count(pw.id_product) as quantity, "
                        + "p.ds_name as name, "
                        + "p.vl_sale_cost as sale_price, "
                        + "p.vl_cost as sale_cost, "
                        + "date_part('month', w.dt_date_which) as month, "
                        + "date_part('year', w.dt_date_which) as year "
                    + "from tb_product_which pw "
                        + "join tb_product p "
                            + "on p.id = pw.id_product "
                        + "join tb_which w "
                            + "on w.id = pw.id_which "
                        + "where (w.vl_total_value - vl_discount) = w.vl_entrance "
                        + "and w.dt_date_which between '" + obj.dt_from + "' and '" + obj.dt_to + "'"
                        + "group by p.ds_name, p.vl_sale_cost, p.vl_cost, month, year; ";

        console.log(query);
        sequelize
            .query(query)
            .then(function (res) {
                callback({ result: res[0] });
        });
    }

    ReportOneSupplier(obj, callback) {
        try {           
            let query = "select distinct "
                            + "s.id,"
                            + "s.ds_name 	as name, "
                            + "sum(p.vl_sale_cost - p.vl_cost) as Total,"
                            + "p.ds_name 	as productName,"
                            + "p.ds_size 	as height,"
                            + "p.ds_weight	as weight,"
                            + "count(pw.id) 	as quantity "
                        + "from tb_supplier s "
                            + "join tb_product p "
                            + "on p.id_supplier = s.id "
                            + "join tb_product_which pw "
                            + "on pw.id_product = p.id "
                            + "join tb_which w "
                            + "on pw.id_which = w.id "
                            + "where w.dt_date_which between '" + obj.dt_from + "' and '" + obj.dt_to + "'"
                            + "and s.ds_name like '%" + obj.supplier.trim() + "%' "
                            + " group by s.id, name, productName, height, weight "
                            + "order by s.id";

            console.log(query);
            sequelize
                .query(query)
                .then(function (res) {
                    callback({ result: res[0] });
                });
        } catch (e) {
            callback({ error: e});   
        }
    }

    ReportSupplier(obj, callback) {
        let querySup = '';

        if (obj.supplier != null && obj.supplier != '') {
            querySup = ' and s.ds_name = ' + obj.supplier + ' ';
        }
        
        let query = "select distinct "
                        + "s.id,"
                        + "s.ds_name 	as name, "
                        + "sum(p.vl_sale_cost - p.vl_cost) as Total,"
                        + "p.ds_name 	as productName,"
                        + "p.ds_size 	as height,"
                        + "p.ds_weight	as weight,"
                        + "count(p.id) 	as quantity "
                    + "from tb_supplier s "
                        + "join tb_product p "
                        + "on p.id_supplier = s.id "
                        + "join tb_product_which pw "
                        + "on pw.id_product = p.id "
                        + "join tb_which w "
                        + "on pw.id_which = w.id "
                        + "where w.dt_date_which between '" + obj.dt_from + "' and '" + obj.dt_to + "'"
                        + querySup
                        + " group by s.id, name, productName, height, weight "
                        + "order by s.id";

        console.log(query);
        sequelize
            .query(query)
            .then(function (res) {
                callback({ result: res[0] });
            });
    }

    ReportSales(obj, callback) {
        console.log('ReportSales');
        let query = "select distinct "
                        + "sum(vl_total_value) as Total, "
                        + "sum(vl_discount) as Total_Discount, "
                        + "sum(vl_total_value - COALESCE(vl_discount, 0)) as Total_Liquid, "
                        + "count(pd.x) as totalProductionPending, "
                        + "count(pd1.x) as totalProductionProducts, "
                        + "count(pw.x) as totalSaleProducts "
                        + "from tb_which w "
                        + "left join lateral(select distinct pd.id_product as x from tb_production pd "
                           + "where pd.id_which  = w.id "
                           + "and (pd.vl_percentage < 100 or pd.vl_percentage is null) "
		                + ") as pd on true "
                        + "left join lateral(select distinct pd1.id_product as x from tb_production pd1 "
			                + "where pd1.id_which  = w.id "
			                + "and pd1.vl_percentage >= 100 "
		                + ") as pd1 on true "
                        + "join lateral(select pw.id_product as x from tb_product_which pw "
			                + "where pw.id_which  = w.id "
		                + ") as pw on true "
	                + "where dt_date_which between '" + obj.dt_from + "' and '" + obj.dt_to + "';";

        console.log(query);

        sequelize
            .query(query)
            .then(function (res) {
                callback({ result: res[0] });
            });
    }

    ReportTimeProduts(obj, callback) {
        try {
            let query = "select "
                    + "count(x.productName) quantity, "
                    + "x.creationDate "
                    + "from (select c.productName, to_char(c.creationDate, 'dd-mm-yyyy') creationDate from consult_which c where creationDate between '" + obj.dt_from +"' and '" + obj.dt_to + "') as x "
                    + "group by x.creationDate "
                    + "order by x.creationDate ";

            sequelize
                .query(query)
                .then(function (res) {
                    callback({ result: res[0] });
                });

        } catch (e) {
            callback({ error: 'Não foi possível consultar os produtos. ' + e });
        }
    }
    
    ReportTimeProductsToDay(obj, callback) {
        try {
            let query = "select " 
                        + " count(x.productName) quantity, "  
                        + " x.creationDate "
                        + " from (select c.productName, to_char(c.creationDate, 'hh') creationDate from consult_which c " 
                        + " where creationDate between '" + obj.dt_from +"' and '" + obj.dt_to + "' "
                        + " ) as x "
                        + " group by x.creationDate "
                        + " order by x.creationdate ";
                        
            console.log(query);
            sequelize
                .query(query)
                .then(function (res) {
                    console.log(res[0]);
                    callback({result: res[0]});
                })
                      
        } catch (error) {
            callback({ error: 'Não foi possível consultar os produtos. ' + error});
        }
    }
}

module.exports = new ReportDAO();