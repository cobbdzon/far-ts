abstract class Instance {
    constructor() {
	}
    abstract Name: string
    private _parent: Instance | undefined = undefined
    public Children: Instance[] = []

    public get Parent (): Instance | undefined {
        return this._parent
    }

    public set Parent (new_parent: Instance | undefined) {
        if (this._parent) {
            let i = this._parent.Children.indexOf(this)
            if (i > -1) {
                this._parent.Children.splice(i, 1) 
            }
        }

        this._parent = new_parent
        this._parent?.Children.push(this)
    }

    public abstract Render(deltaTime: number): void
    public abstract Update(deltaTime: number): void
}

export default Instance