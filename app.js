var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.post('/api/login', function(req,res){
    
    var email = req.body.email;
    var senha = req.body.senha;

        if(email != 'teste@email.com' || senha != '123'){

            setTimeout(function(){
                if(!res.headersSent){
                res.send({
                    'erro':{
                        'http_code': 401,
                        'code': 'unauthorized',
                        'mensagem': 'Login/Senha invalidos'
                        }
                    });
                }
            },4000);            
        }else{
            setTimeout(function(){
                res.header('Access-Control-Allow-Origin','*')
                    .send(200,{
                        'data':{
                            'nome': 'teste',
                            'email': 'teste@email.com',
                            'token': 'este_e_o_token'
                        }
                    });
            });
            
        }
});

app.listen(3000);
console.log('A api esta no ar');
