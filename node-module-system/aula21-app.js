import { Logger } from "./aula21-logger.js";

const logger = new Logger();

//Registra um listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("my message");
