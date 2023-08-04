import Signal from "../datatypes/Signal.js";

const RunService = {
    RenderStepped: new Signal<[deltaTime: number]>(),
}

let lastTime = 0
function render_loop(t: number) {
    const deltaTime = t - lastTime;
    lastTime = t;
    //console.log(deltaTime)
    RunService.RenderStepped.Fire(deltaTime)
    requestAnimationFrame(render_loop)
}
requestAnimationFrame(render_loop)

export default RunService;
