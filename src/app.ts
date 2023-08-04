import Sprite from "./engine/classes/Sprite.js";
import RunService from "./engine/services/RunService.js";

RunService.RenderStepped.Once((deltaTime) => {
	console.log("I'm only called once!")
})

const connection = RunService.RenderStepped.Connect((deltaTime) => {
})
connection.Disconnect()
