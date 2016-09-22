/**
 * Created by JakeAnstey on 2016-09-22.
 */
//get the connect module
var connect =  require('connect');
var url = require('url');

//assign connect to an object
var app = connect();

/*
**Dispatcher**
 */
var dispatcher = function(req, res, next) {
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    if(method == "add"){
        res.end(x + " + " + y + " = " + add(x, y));
    }else if(method == "subtract"){
        res.end(x + " - " + y + " = " + subtract(x, y));
    }else if(method == "multiply"){
        res.end(x + "*" + y + " = " + multiply(x, y));
    }else if(method == "divide"){
        res.end(x + "/" + y + " = " + divide(x, y));
    }else{
        throwError();
    }
}

var throwError = function(req, res, next) {
    res.end('Please check your url for correct syntax.');
}

var add = function(num1, num2) {
    return +num1 + +num2;
}

var subtract = function(num1, num2) {
    return +num1 - + num2;
}

var multiply = function(num1, num2) {
    return +num1 * +num2;
}

var divide = function(num1, num2) {
    return +num1 / +num2;
}

app.use('/lab3', dispatcher);
app.use('/', throwError);

app.listen(8000);