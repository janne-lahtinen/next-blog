import { MongoClient } from "mongodb"

async function handler(req, res) {
  if (req.method === 'POST') {
    const mongoLoginName = process.env.mongo_login_name
    const mongoPassWord = process.env.mongo_password
    const mongoCluster = process.env.mongo_clustername
    const mongoDatabase = process.env.mongo_database
    const connectionString = `mongodb+srv://${mongoLoginName}:${mongoPassWord}@${mongoCluster}.6r6w7ab.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ statusMessage: 'Invalid input.' })
      return
    }

    const newMessage = {
      email,
      name,
      message
    }

    let client

    try {
      client = await MongoClient.connect(connectionString)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' })
    }

    const db = client.db()
    
    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing message failed.'})
      return
    }

    client.close()
    res.status(201).json({ statusMessage: 'Successfully stored message.', message: newMessage })
  }
}

export default handler