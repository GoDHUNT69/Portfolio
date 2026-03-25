export async function handleChat(message) {
  if (!message || typeof message !== "string") {
    throw new Error("Invalid message");
  }

  if (message.length > 500) {
    throw new Error("Message too long");
  }

  return {
    reply: `You said: "${message}". AI module under construction.`,
  };
}