// score -1.0~1.0
// 環境変数を呼ぶのに必要
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
	const res = await fetch(url, { method: "POST", headers: header, body: JSON.stringify(body) });
	// console.log("res", res);
	// if (res.ok) {
	// 	return res.json();
	// }
	return res.json();
	
};
getEmotionsValue("asdf", Deno.env.get("API_KEY"))
	.then((data) => {
		console.log(JSON.stringify(data));
	})
	.catch((err) => {
		console.log(err);
	});

// console.log(getEmotionsValue("asdfasdf", Deno.env.get("API_KEY")));

// const result = await getEmotionsValue("asdfasdf", Deno.env.get("API_KEY"));
// console.log('-------')
// console.log("result", result.documentSentiment.score);

// getEmotionsValue("asdfasdf", Deno.env.get("API_KEY")).then((result) => {
// 	console.log(result);
// });

// console.log("api", Deno.env.get("API_KEY"));
