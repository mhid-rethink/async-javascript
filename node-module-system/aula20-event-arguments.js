import { EventEmitter } from "events";
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

//Registra um listener
emitter.on("messageLogged", (eventArg) => {
  console.log("Listener called", eventArg);
});

//Chama um evento
emitter.emit("messageLogged", { id: 1, url: "http://url.com" });

//Raise: logging (data: message)
