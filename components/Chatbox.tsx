import { sendToBackground, sendToContentScript } from "@plasmohq/messaging"
import { relay } from "@plasmohq/messaging/relay"

import { Button } from "../@/ui/button"
import { Input } from "../@/ui/input"

export default function Component() {
  return (
    <div
      key="1"
      className="flex flex-col h-screen bg-[#f5f5f5] dark:bg-[#1a1a1a] w-full rounded-2xl h-70 mb-7"
      style={{
        height: "70vh"
      }}>
      <div className="w-full h-16 bg-blue-500 dark:bg-[#333] flex items-center justify-center shadow-lg rounded-2xl">
        <h1 className="text-white dark:text-gray-200 text-2xl font-semibold">
          Chat Interface
        </h1>
      </div>
      <div className="flex flex-col w-full h-full border-r border-[#ddd] dark:border-[#333] rounded-2xl ">
        <div className="flex-1 overflow-y-auto p-4 flex flex-col items-start">
          <div className="bg-white dark:bg-[#222] p-4 mb-4 rounded-2xl shadow-lg w-full md:w-3/4 lg:w-3/4">
            <p className="font-semibold text-blue-700 dark:text-blue-300">
              User
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              Hello AI, how are you?
            </p>
          </div>
          <div className="bg-white dark:bg-[#222] p-4 mb-4 rounded-2xl shadow-lg w-full md:w-3/4 lg:w-3/4 ml-auto">
            <div>
              <p className="font-semibold text-green-700 dark:text-green-300">
                AI Bot
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                I'm doing great, thank you! How can I assist you today?
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#222] p-4 mb-4 rounded-2xl shadow-lg w-full md:w-3/4 lg:w-3/4 ml-auto">
            <div>
              <p className="font-semibold text-green-700 dark:text-green-300">
                AI Bot
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <Button
                  className="font-bold underline hover:text-blue-500 mr-1 py-1 px-2 rounded-md"
                  variant="outline">
                  05:30
                </Button>
                Please refer to the video at this timestamp.
              </p>
            </div>
          </div>
        </div>
        <form className="flex border-t border-[#ddd] dark:border-[#333] p-4 items-center">
          <input
            aria-label="Type a message"
            className="flex-grow rounded-lg px-3 py-2 border border-[#ddd] dark:border-[#333] dark:bg-[#222] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            type="text"
          />
          <Button
            onClick={async (e) => {
              e.preventDefault()
            }}
            className="ml-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
            variant="outline">
            <svg
              className=" h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  )
}
