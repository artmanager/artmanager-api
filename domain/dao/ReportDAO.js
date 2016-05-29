'use strict';

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

    ReportSupplier(obj, callback) {
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
                        + "group by s.id, name, productName, height, weight "
                        + "order by s.id";

        console.log(query);
        sequelize
            .query(query)
            .then(function (res) {
                callback({ result: res[0] });
            });
    }

    ReportSales(obj, callback) {
        let query = "select distinct "
                        + "sum(vl_total_value) as Total, "
                        + "sum(vl_discount) as Total_Discount, "
                        + "sum(vl_total_value - vl_discount) as Total_Liquid, "
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
}

module.exports = new ReportDAO();