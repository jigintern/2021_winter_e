import { Server } from "https://js.sabae.cc/Server.js";
class MyServer extends Server {
	api(path) {
		return { name: "jigintern", path: path };
	}
}

new MyServer(8001);
