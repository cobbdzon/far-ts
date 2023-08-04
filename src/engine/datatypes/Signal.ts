// todo: implement tuples for data

type Handler<T> = { (data?: T): void }

class Connection<T> {
    constructor (_signal: Signal<T>, handler: Handler<T>) {
        this._signal = _signal
        this._handler = handler
    }
    private _signal: Signal<T>
    public _handler
    public Connected: boolean = true
    Disconnect (): void {
        this.Connected = false
        this._signal._disconnect(this)
    }
}

class Signal<T> {
    private _connections: Connection<T>[] = []

    Connect (handler: Handler<T>): Connection<T> {
        let _connection = new Connection(this, handler)
        this._connections.push(_connection)
        return _connection
    }

    Fire (data: T) {
        this._connections.slice(0).forEach(c => c._handler(data))
    }

    _disconnect(connection: Connection<T>) {
        this._connections = this._connections.filter(c => c !== connection)
    }
}

export default Signal