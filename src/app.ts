import Sprite from "./engine/classes/Sprite.js";
import RunService from "./engine/services/RunService.js";

RunService.RenderStepped.Connect((data) => {
	console.log(data?.deltaTime);
})

let cn = RunService.RenderStepped.Connect((data) => {
    console.log("fart")
})

setTimeout(() => {
    cn.Disconnect()
}, 1000);

/*
let lastTime = 0;
function gameLoop(time: number) {
	const deltaTime = time - lastTime;
	if ((deltaTime >= (1000 / Settings.FRAMERATE)) || !Settings.FRAMERATE_UNLOCKED) {
		lastTime = time;
		StartRender(deltaTime);
	}
	requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
*/
