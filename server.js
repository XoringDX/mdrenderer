const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// $ GET /package.json
app.use(serve('.'));

// $ GET /hello.txt
app.use(serve('./web'));

// or use absolute paths
//app.use(serve(__dirname + '/test/fixtures'));

app.listen(3000);

console.log('listening on port 3000');