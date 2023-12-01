import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const data = await fetch(
    "https://podcastdataendpoint.fly.dev/get-transcription",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        youtube_id: req.body.youtube_id,
        query: req.body.query,
        chat: req.body.chat
      })
    }
  ).then((response) => response.json())

  res.send(data)
}

export default handler
