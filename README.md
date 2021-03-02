# 2021_winter_e

## 動かし方
[Google API](https://console.cloud.google.com/)、Cloud Natural Language API を有効にした"APIキー"を取得し、環境変数　API_KEY　に設定する  
コンソールを開き、下記コマンドでAPIが機能することを確認する
```bash
$ cd Server
$ deno run -A test.js
```
確認できたら、APIサーバーを起動する（できない場合、環境変数やAPIキーを確認する）
```bash
$ deno run -A server.js
```
[http://localhost:8001/api/getEmotionsValue?{%22sentense%22:%22%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86%22}](http://localhost:8001/api/getEmotionsValue?{"sentense":"おはよう"}) を開き、値が表示されることを確認する  
確認できない場合、deonのキャッシュを -r を使ってリセットし、再度チェックする
```bash
$ deno run -A -r server.js
```

もうひとつコンソールを開き、下記コマンドでフロントを構築する
```bash
$ cd front
$ npm install
$ npm run serve
```
ブラウザで表示されたURLを開いて動かす  

## デプロイ
front/src/pages/Home.vue の apibase を "" に変更する
```JavaScript
        const apibase = ""; // for deploy
```
frontををビルドする
```bash
$ cd front
$ npm run build
```
[http://localhost:8001/](http://localhost:8001) を開き動作確認する。  
Server 以下をサーバーに転送し、下記コマンドで動かす。
```bash
$ deno run -A server.js
```
必要であれば Server/server.js のポート番号や、front/vue.config.js のpublicPathでルートディレクトリを変更する。
