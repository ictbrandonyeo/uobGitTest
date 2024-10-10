const DiscordActions = require('discord-actions');

const webhookUrl = 'https://discord.gg/TGecHnbT'; // Replace with your webhook URL

async function sendMessage() {
  const actions = new DiscordActions();

  try {
    const response = await actions.sendWebhookMessage(webhookUrl, 'Hello from GitHub Actions!');
    console.log('Message sent successfully:', response);
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

sendMessage('Turritopsis Dorphni');
