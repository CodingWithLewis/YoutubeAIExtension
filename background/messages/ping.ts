import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log(req.body)
  res.send({
    "Hi there!": "I'm a message handler!"
  })
}

export default handler
