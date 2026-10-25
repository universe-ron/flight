import http from 'node:http';
import {readFile,readdir} from 'node:fs/promises';
const names=await readdir(new URL('.',import.meta.url));
const files={'/':'index.html','/index.html':'index.html'};
for(const n of names)if((n.endsWith('.js')&&!n.endsWith('.test.js'))||n.endsWith('.css'))files['/'+n]=n;
const port=Number(process.env.PORT)||3000;
http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Not found');}try{const data=await readFile(new URL(file,import.meta.url));res.writeHead(200,{'Content-Type':file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html; charset=utf-8'});res.end(data);}catch{res.writeHead(500);res.end('Unable to load file');}}).listen(port,'127.0.0.1',()=>console.log(`Flightdeck Academy: http://localhost:${port}`));
