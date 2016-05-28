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

}

module.exports = new ReportDAO();