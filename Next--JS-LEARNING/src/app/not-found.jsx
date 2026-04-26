import Link from "next/link";

export const dynamic = "force-dynamic"; // 🔥 disables caching

const messages = [
  "Oops! This page ran away 🏃‍♂️",
  "We couldn’t find what you’re looking for 😕",
  "This route is lost in the void 🌌",
  "404: Even our code is confused 🤖",
  "Nothing here… just silence 🕳️",
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomEmoji() {
  const emojis = ["👀", "🤖", "🌌", "💀", "🕳️", "🚀", "😵‍💫"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export default function NotFound() {
  const message = getRandomMessage();
  const emoji = getRandomEmoji();

  const time = new Date().toLocaleTimeString();

  const randomCode = Math.floor(1000 + Math.random() * 9000);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md">

        <h1 className="text-7xl font-bold text-red-500">
          4{randomCode.toString().slice(0, 1)}4
        </h1>

        <p className="text-2xl mt-3">{emoji}</p>

        <p className="text-lg mt-4 text-gray-700 font-medium">
          {message}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Time: {time}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Error ID: #{randomCode}
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}