'use strict';

let forgotPasswordBus = require('../domain/business/ForgotPasswordBUS.js'),
    jwt     = require('jsonwebtoken'),
    userBUS = require('../domain/business/UserBUS.js');

class ForgotPasswordService {

    SendEmail(req, res) {

        let obj = req.body;

        if (obj.user == null) {
            res.json({ error: 'Por favor envie um e-mail valido' });
        }

        forgotPasswordBus.SendEmail(obj, function (callback) {
            res.json(callback);
        });
    }

    ResetPassword(req, res) {
        try {
            let obj = req.body;
            console.log('ResetPassword');

            if (obj.password == null || obj.password == '') {
                res.json({ error: 'Senha inválida' });
            }

            if (obj.token == null || obj.token == '') {
                res.json({ error: 'Token invalido' });
            }

            let decod = jwt.verify(obj.token, 'n3JZZm27T4yccdVf', function (err, decoded) {
                if (err) {
                    res.json({ error: 'Não foi possível validar token. Erro: ' + err });
                }

                if (decoded.id != null && decoded.id > 0) {
                    let user = {
                        id: decoded.id,
                        password: obj.password
                    };

                    userBUS.UpdatePasswordById(user, function (callback) {
                        console.log('Respondendo');
                        res.json(callback);
                    });
                } else {
                    res.json({ error: 'Token invalido' });
                }
            });

        } catch (e) {
            res.json({ error: 'Não foi possível alterar a senha. ' + e });
        }

    };
};

module.exports = new ForgotPasswordService();