import { Server } from "https://js.sabae.cc/Server.js";
import "https://deno.land/x/dotenv/load.ts";

const getEmotionsValue = async (sentenses, access_token) => {
	const url = String(`https://language.googleapis.com/v1/documents:analyzeSentiment?key=${access_token}`);
	console.log("token", access_token);
	const header = { "Content-Type": "application/json" };
	const body = {
		document: {
			type: "PLAIN_TEXT",
			language: "ja",
			content: sentenses,
		},
		encodingType: "UTF8",
	};
	try {
	const res = await fetch(url, { method: "POST", headers: header, body: JSON.stringify(body) });
		return await res.json();
	} catch (err) {
		return err.message
	}
};

/**
 * API
 *	name getEmotionsValue
 *　req: 文章
 *  res: value 感情を表す数値(2つ) api Google Cloud Nature Language
 * 		 値の意味
 *      -1.0~1.0
 *  score:
 *  magnitude:
 * 	   https://cloud.google.com/natural-language?hl=ja
 *
 * Deno.run 使えばコマンド呼出しも可能
 */

// - APIの確認

// - エラー処理
// - クライアントとサーバーとのやりとり(JSON)

// json整形関数をつくる

class MyServer extends Server {
	api(path, req) {
		if (path == "/api/getEmotionsValue") {
			//　定義
			//　送られてきた文章
			let sentense = req.sentense;
			// let emotinalValue;

			// 　（数値を取得）
			// use API

			// 数値を返す
			// return { value: emotinalValue };

			// 仮のresponse
			// return { value: 1.0 };
			
			const result = getEmotionsValue(sentense, Deno.env.get("API_KEY"));
			// result.then((data) => {
			// 	console.log(data.documentSentiment.score)
			// 	return {score:data.documentSentiment.score};
			// }).catch((err) => {
			// 	return console.log(err);
			// });
			return result
			
		}
		return { err: "not found" };
	}
}

new MyServer(8001);
