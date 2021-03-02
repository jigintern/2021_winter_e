import { Server } from "https://js.sabae.cc/Server.js";
import { getEmotionsValue } from "./getEmotionsValue.js";

// 環境変数　API_KEY　に　Google API、Cloud Natural Language API を有効にしたAPIキーの設定が必要
const accessToken = Deno.env.get("API_KEY");

console.log(await getEmotionsValue("asdf", accessToken));
