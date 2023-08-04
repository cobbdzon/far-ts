import Instance from './Instance.js';

class Sprite extends Instance {
    constructor() {
        super();
    }
	public Name = "Sprite"

	public Sprite: HTMLImageElement | undefined = undefined

    Render(deltaTime: number) {

    }
    Update(deltaTime: number) {
        
    }
}

export default Sprite;