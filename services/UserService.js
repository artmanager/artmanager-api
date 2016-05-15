'use strict';

var promise = require('bluebird');
var userBus = require('../domain/business/UserBUS');

class UserService {
    GetOne(req, res) {
        try {
            var obj = req.body;
		
        } catch (e) {
            res.json({ erro : e });
        }
    }

    UserRegister(req, res) {
        try {
            var obj = req.body;	
            console.log('Request - User - UserRegister');
            console.log(obj.user);
            if (obj.user.user == undefined || obj.user.user == null || obj.user.user == '') {
                return res.json({ error : 'Usuario inválido.'});
            }
            else if (obj.user.password == undefined || obj.user.password == null || obj.user.password == '') {
                return res.json({ error : 'Senha inválida'});
            }
            console.log('Send Business');
            userBus.UserRegister(obj.user, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({erro: e});
        }
    }

    UpdatePassword(req, res) {
        let obj = req.body;

        if (obj.user == null)
            res.json({ error: 'Usuário invalido' });

        if (obj.old == null)
            res.json({ error: 'Senha antiga invalida' });

        if (obj.password == null)
            res.json({ error: 'Nova senha invalida' });

        userBus.EditPassword(obj, function (callback) {
            res.json(callback);
        });
    }
}


module.exports = new UserService();