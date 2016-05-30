'use strict';

let userDAO = require('../dao/UserDAO.js'),
    nodemailer = require('nodemailer'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    config = require('../../config/config.js');


class ForgotPasswordBUS {

    SendEmail(obj, callback) {
        try {

            if (obj.user != null) {
                userDAO.FindOneByUser(obj, function (res) {
                    if (res != null && res.id != null) {

                        fs.readFile(require('path').dirname(require.main.filename) + '\\config\\templatesHTML\\resetPassword.html', function (err, html) {
                            
                            var tkn = {
                                id: res.id,
                                date: new Date()
                            };
                            var token = jwt.sign(tkn, 'n3JZZm27T4yccdVf');

                            html = html.toString().replace('http://artmanager.com.br', config.application.landingPage + "/reset.html?token=" + token);

                            let transporter = nodemailer.createTransport(config.resetPassword.strSMTP);

                            let mailOptions = {
                                from: '"Suporte Artmanager" <suporte@artmanager.com.br>', // sender address
                                to: obj.user, // list of receivers
                                subject: 'Resetar senha', // Subject line
                                text: 'Resetar senha', // plaintext body
                                html: html // html body
                            };

                            console.log('Transporter');

                            // send mail with defined transport object
                            transporter.sendMail(mailOptions, function (error, info) {

                                if (error) {
                                    console.log('Erro ao enviar mensagem' + error);
                                    callback({ error: 'Não foi possível enviar a mensagem. ' + error });
                                } else {
                                    console.log('Mensagem enviada com sucesso.');
                                    callback({ success: 'Mensagem enviada com sucesso' });
                                }
                            });

                        });
                        
                    } else {
                        callback({ error: 'Usuário invalido' });
                    }
                });
            } else {
                callback({ error: 'Usuário invalido' });
            }
        } catch (e) {
            console.log(e);
            callback({ error: 'Não foi possível enviar o e-mail. ' + e });
        }

    };
}

module.exports = new ForgotPasswordBUS();