import { Server } from "https://js.sabae.cc/Server.js";
import { getEmotionsValue } from "./getEmotionsValue.js";

// 環境変数　API_KEY　に　Google API、Cloud Natural Language API を有効にしたAPIキーの設定が必要
const accessToken = Deno.env.get("API_KEY");

class MyServer extends Server {
	async api(path, req) {
		if (path == "/api/getEmotionsValue") {
			const sentense = req.sentense;
			const result = await getEmotionsValue(sentense, accessToken);
			return result
		}
		return { err: "not found" };
	}
}

new MyServer(8001);
