// todo: implement tuples for data

// consolidate Args extends any[] into a single type

type Handler<Args extends any[]> = (...args: Args) => void

class Connection<Args extends any[]> {
    constructor (_signal: Signal<Args>, handler: Handler<Args>) {
        this._signal = _signal
        this._handler = handler
    }
    private _signal: Signal<Args>
    public _handler
    public Connected: boolean = true
    Disconnect (): void {
        this.Connected = false
        this._signal._disconnect(this)
    }
}

class Signal<Args extends any[]> {
    private _connections: Connection<Args>[] = []

    Connect(handler: Handler<Args>): Connection<Args> {
        let _connection = new Connection(this, handler)
        this._connections.push(_connection)
        return _connection
    }

    Once(handler: Handler<Args>): Connection<Args> {
        let _connection = new Connection(this, (...args) => {
            _connection.Disconnect()
            handler(...args)
        })
        this._connections.push(_connection)
        return _connection
    }

    Fire(...args: Args) {
        this._connections.slice(0).forEach(c => c._handler(...args))
    }

    _disconnect(connection: Connection<Args>) {
        this._connections = this._connections.filter(c => c !== connection)
    }
}

export default Signal
