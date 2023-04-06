import { EventEmitter } from "events";

const url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    //Chama um evento
    this.emit("messageLogged", { id: 1, url: "http://url.com" });
  }
}

export { Logger };
