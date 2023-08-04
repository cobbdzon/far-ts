class Vector2 {
	constructor(x: number, y: number) {
		this.X = x
        this.Y = y
	}

    public readonly X: number = 0
    public readonly Y: number = 0
    
	public get Magnitude() {
		return this.X^2 + this.Y^2
	}

	public get Unit() {
		return new Vector2(this.X / this.Magnitude, this.Y / this.Magnitude);
	}

	Dot(other: Vector2) {
		return this.X * other.Y - this.Y * other.X;
	}

	Cross(other: Vector2) {
		return this.X * other.Y - this.Y * other.X;
	}
	
	Lerp(other: Vector2, alpha: number) {
		return new Vector2(this.X + (other.X - this.X) * alpha, this.Y + (other.Y - this.Y) * alpha);
	}
}

export default Vector2;