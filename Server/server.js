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

class MyServer extends Server {
	async api(path, req) {
		if (path == "/api/getEmotionsValue") {
			try {
				const sentense = req.sentense;
				const result = await getEmotionsValue(sentense, Deno.env.get("API_KEY"));
				return result
			} catch (e) {
				console.log(e)
				return err.message
			}
		}
		return { err: "not found" };
	}
}

new MyServer(8001);
