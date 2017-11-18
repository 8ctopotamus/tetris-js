class Client
{
  constructor(conn, id)
  {
    this.conn = conn
    this.id = id
    this.session = null
  }

  send(data)
  {
    const msg = JSON.stringify(data)
    console.log(`Sending message: ${msg}`)
    this.conn.send(msg, function ack(err) {
      if (err) {
        console.error('Message failed', msg, err)
      }
    })
  }
}

module.exports = Client
