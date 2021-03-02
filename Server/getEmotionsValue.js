// return 0%-100% or '-' when err
// accessToken:　Google API、Cloud Natural Language API を有効にしたAPIキー
const getEmotionsValue = async (sentenses, accessToken) => {
	try {
		const url = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${accessToken}`;
		console.log("token", accessToken);
		const header = { "Content-Type": "application/json" };
		const body = {
			document: {
				type: "PLAIN_TEXT",
				language: "ja",
				content: sentenses,
			},
			encodingType: "UTF8",
		};
		const res = await (await fetch(url, { method: "POST", headers: header, body: JSON.stringify(body) })).json();
		// score -1.0~1.0 → 100~0
		const score = res.documentSentiment.score
		return (-score / 2 + .5) * 100 + "%";
	} catch (e) {
		console.log(e);
		return "-";
	}
};

export { getEmotionsValue };
