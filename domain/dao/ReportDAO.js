'use strict';

let sequelize = require('../../db/postgres.js');

class ReportDAO {

    ReportProducts(obj, callback) {
        let query = "select "
                        + "count(pw.id_product) as quantity, "
                        + "p.ds_name as name, "
                        + "p.vl_sale_cost as sale_price, "
                        + "p.vl_cost as sale_cost "
                    + "from tb_product_which pw "
                        + "join tb_product p "
                            + "on p.id = pw.id_product "
                        + "join tb_which w "
                            + "on w.id = pw.id_which "
                        + "where (w.vl_total_value - vl_discount) = w.vl_entrance "
                        + "and w.dt_date_which between '" + obj.dt_from + "' and '" + obj.dt_to + "'"
                        + "group by p.ds_name, p.vl_sale_cost, p.vl_cost; ";

        console.log(query);
        sequelize
            .query(query)
            .then(function (res) {
                callback({ result: res[0] });
        });
    }

}

module.exports = new ReportDAO();