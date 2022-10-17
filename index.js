const http = require("http");

const server = http.createServer( (req, res) => {
    const url = req.url;

    if(url === "/index"){
        res.writeHead(200,{"ContentType": "text/html"});
        res.write("<h1>İndex Sayfasına Hoşgeldin!</h1>");
        res.end();
    }
    else if(url ==="/iletisim"){
        res.writeHead(200,{"ContentType": "text/html"});
        res.write("<h1>İletişim Sayfasına Hoşgeldin!</h1>");
        res.end();
    }
    else if(url ==="/hakkimda"){
        res.writeHead(200,{"ContentType": "text/html"});
        res.write("<h1>Hakkımda Sayfasına Hoşgeldin!</h1>");
        res.end();
    }
    else{
        res.writeHead(404,{"ContentType": "text/html"});
        res.write("<h1>Aradığın sayfa bulunamadı!</h1>");
        res.end();
    }
} );

server.listen(5000,() => {
    console.log("Sunucu Başlatıldı!")
})