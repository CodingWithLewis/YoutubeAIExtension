import cssText from "data-text:~styles/globals.css"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoGetRootContainer
} from "plasmo"

import {
  relayMessage,
  sendToBackground,
  sendToBackgroundViaRelay
} from "@plasmohq/messaging"

import Chatbox from "../components/Chatbox"

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/watch*"]
}
window.relay = {
  description: "Message from content script",
  tryRelay: async () => {
    let result = await relayMessage({
      name: "ping",
      extensionId: "hdnlgfibbdiflfhipppmphdpekocdffl"
    })
    console.log(result)
    return "AWesome!"
  }
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  style.textContent = cssText.replaceAll(":root", ":host")
  return style
}

// export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
//   return new Promise<HTMLElement>((resolve) => {
//     let isObserving = true
//     let observer: MutationObserver | null = new MutationObserver(() => {
//       if (isObserving) {
//         checkForAnchor()
//       }
//     })

//     const checkForAnchor = () => {
//       const anchor = document.getElementById("secondary-inner")
//       if (anchor && !anchor.querySelector(".my-custom-container")) {
//         // Temporarily stop observing
//         isObserving = false
//         observer?.disconnect()

//         // Create and insert the container
//         const container = document.createElement("div")
//         //set width of container to 100% of the parent

//         container.style.width = "100%"
//         container.className = "my-custom-container"
//         anchor.insertBefore(container, anchor.firstChild)

//         // Restart observing
//         observer?.observe(document.documentElement, {
//           childList: true,
//           subtree: true
//         })
//         isObserving = true

//         resolve(container)
//       }
//     }

//     checkForAnchor()

//     if (!document.getElementById("secondary-inner")) {
//       observer.observe(document.documentElement, {
//         childList: true,
//         subtree: true
//       })

//       setTimeout(() => {
//         observer.disconnect()
//         resolve(null)
//       }, 30000)
//     } else {
//       observer.disconnect()
//     }
//   })
// }

const SideBar: React.FC = () => {
  return (
    <div>
      <button
        style={{ width: "100px", height: "100px", background: "red" }}
        onClick={async () => {
          const resp = await sendToBackground({
            name: "ping",
            body: {
              message: "Hello from content script!"
            }
          })
        }}></button>
      <Chatbox />
    </div>
  )
}

export default SideBar
