# Express 教學

## 什麼是Express?
Express 可以說是 Node.js 中最流行的 Web 開發框架，不但有著簡潔靈活的特性、還有豐富的文件和完整的 API Reference，令開發者能快速地搭建一個完整功能的網站。

## 安裝Express

```
mkdir first_app
cd first_app
npm install express
```

## route 結構

app.METHOD(PATH, HANDLER)

* app 是 express 的實例。
* METHOD 是 HTTP 要求方法。
* PATH 是伺服器上的路徑。
* HANDLER 是當路由相符時要執行的函數。

## 從URL拿到資料

### req.params
用于獲取get時，URL中的參數
```
app.get('/find/:id', function(req,res){
    res.send(req.params.id);
})
```
### req.query
用於獲取get時，URL路徑?後的參數
```
app.get('/search', function(req, res){
    res.send(req.query.id)
})
```
### req.body
用於獲取Post的内容

## 在 Express 中提供靜態檔案
```
app.use(express.static('public'));
```

## 參考資料

[Express](http://expressjs.com/zh-tw/)
[Node.js Express 初入門](https://hellolynn.hpd.io/2017/08/11/node-js-express-初入門-上集/)