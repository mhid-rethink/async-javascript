import { EventEmitter } from "events";
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

//Registra um listener
emitter.on("messageLogged", () => {
  console.log("Listener called");
});

//Chama um evento
emitter.emit("messageLogged", 1, "url");
