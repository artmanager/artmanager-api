'use strict';

var userDao = require('../dao/UserDAO'),
	md5			= require('md5');

class UserBus {

    UserConsult(obj, callback) {
        var consult = {
            senha : md5(obj.senha),
            usuario : obj.usuario
        };

        userDao.FindOne(consult, function (sucesso){
            callback = sucesso;
        }).spread(function (user, created) {

        });
    }

    UserRegister(obj, callback) {
        console.log('Bus - UserRegister');
        console.log('Send to DAO');
        if (obj != null) {
            
            userDao.FindByUser(obj, function (res) {
                console.log(res);
                if (res == null || res.id == undefined) {
                    console.log('Usuário não existe');
                    userDao.InsertOne(obj, function (result) {
                        callback({ success: 'Usuário Cadastrado com sucesso.' });
                    });
                } else {
                    console.log('Usuário já existe');
                    callback({ error: 'Usuário já existe' });
                }
                
            })
        } else {
            console.log(obj);
            callback({ Error: 'Não foi possível cadastrar o usuário' });
        }
    }

    EditPassword(obj, callback) {
        let update = {
            old: obj.old,
            password: obj.password,
            user: obj.user,
            profile: obj.profile
        }

        userDao.UpdatePassword(update, function (result) {
            callback(result);
        });
    }
}


module.exports = new UserBus();