import Instance from './Instance.js';

class Sprite extends Instance {
    constructor() {
        super();
    }
	public Name = "Sprite"

	public Sprite: HTMLImageElement | undefined = undefined

    Render(deltaTime: number) {
        // ! do we really need this?
        // ! we have a RenderStepped signal right?
        // ! or is this function just for internal purposes?
    }
    Update(deltaTime: number) {
        // ! do we really need this?
    }
}

export default Sprite;
