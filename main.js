/*
 * Blank IoT Node.js starter app.
 *
 * Use this template to start an IoT Node.js app on any supported IoT board.
 * The target board must support Node.js. It is helpful if the board includes
 * support for I/O access via the MRAA and UPM libraries.
 *
 * https://software.intel.com/en-us/xdk/docs/lp-xdk-iot
 */


// keep /*jslint and /*jshint lines for proper jshinting and jslinting
// see http://www.jslint.com/help.html and http://jshint.com/docs
/* jslint node:true */
/* jshint unused:true */



//var mraa = require("mraa") ;

//server
/*
 * Blank IoT Node.js starter app.
 *
 * Use this template to start an IoT Node.js app on any supported IoT board.
 * The target board must support Node.js. It is helpful if the board includes
 * support for I/O access via the MRAA and UPM libraries.
 *
 * https://software.intel.com/en-us/xdk/docs/lp-xdk-iot
 */


// keep /*jslint and /*jshint lines for proper jshinting and jslinting
// see http://www.jslint.com/help.html and http://jshint.com/docs
/* jslint node:true */
/* jshint unused:true */

//"use strict" ;

var http=require('http');
var fs=require('fs');
var path=require('path');

var hostname='localhost';
var port=3000;

var server=http.createServer(function(req,res){
    
    console.log('request for'+req.url+'by method'+req.method);
    if(req.method=='GET'){
        var fileUrl;
        if(req.url=='/')
         {   
             fileUrl='files/index.html';
         }        
        else
        { fileUrl=req.url;}
        
        var filePath=path.resolve(fileUrl);
        var fileExt=path.extname(filePath);
       
        if(fileExt=='.html'){
            
            fs.exists(filePath,function(exists){
            if(!exists){
                res.writeHead(404,{'content-type':'text/html'});
                res.end('<html><body><h1> error 404 :'+fileUrl+'not found </h1></body></html>');
                return;
            }    
                res.writeHead(200,{'content-type':'text/html'});
                fs.createReadStream(filePath).pipe(res);
                
            });
        }
        else{   
            res.writeHead(404,{'content-type':'text/html'});
                res.end('<html><body><h1> error 404 :'+fileUrl+' not a HTML file </h1></body></html>');}
    }
    else{
        
        
        res.writeHead(404,{'content-type':'text/html'});
                res.end('<html><body><h1> error 404 :'+req.method+'not supported method </h1></body></html>');
    }
    
    
});

server.listen(port,hostname,function(){
    console.log('server running at http://'+ hostname +':'+ port);
});


// add any UPM requires that you need
// and the rest of your app goes here
// see the samples for more detailed examples

//console.log(mraa) ;     // prints mraa object to XDK IoT debug output panel




/*
// for remot acessing 
var initled1=new mraa.Gpio(3);
var initled2=new mraa.Gpio(5);
var initled3=new mraa.Gpio(6);
var initled4=new mraa.Gpio(9);
initled1.dir(mraa.DIR_OUT);
initled1.write(0);
initled2.dir(mraa.DIR_OUT);
initled3.dir(mraa.DIR_OUT);
initled4.dir(mraa.DIR_OUT);

initled2.write(0);
initled3.write(0);
initled4.write(0);
    //var mraa = require("mraa") ;
        var path = new mraa.Gpio(6); //initllize pin 6 as led for path
        path.dir(mraa.DIR_OUT); //work pin 6 as output

        
        var pwm3=new mraa.Pwm(3);
        pwm3.enable(true);
        pwm3.period_us(2000);

        var pwm5=new mraa.Pwm(5);
        pwm5.enable(true);
        pwm5.period_us(2000);



while(true)
    {
    
        var road_sens1 =new mraa.Aio(0);    //initlizing A0 
        var sens1_value=road_sens1.read();  //storing valuable for sens1

        var road_sens2=new mraa.Aio(1);     ////initlizing A1
        var sens2_value= road_sens2.read();

        var led0=sens1_value/1130;
        var led1=sens2_value/1130;
        pwm3.write(led0);
        pwm5.write(led1);


        if (sens1_value > sens2_value)
        {
            console.log("take your left then take you first right");
            path.write(1);
        }
        else if (sens2_value>sens1_value)
        {
            console.log("take your right then take your first left");
            path.write(0);
        }
        else 
        {
                console.log("take your path");
                var path_cas=0;
                if (path_cas===0)
                    {
                        path.write(1);
                        path_cas=1;
                    }
                else{path.write(0);path_cas=0;}
        }

    console.log("ok you get your best road");
    setTimeout(1000);
}
*/

// add any UPM requires that you need
// and the rest of your app goes here
// see the samples for more detailed examples

//console.log(mraa) ;     // prints mraa object to XDK IoT debug output panel
