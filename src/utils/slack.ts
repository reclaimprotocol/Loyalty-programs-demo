export const sendSlackMessage = async (channelId: string, message: any) => {
  const payload = {
    text: message,
    channel: channelId,
    secret: import.meta.env.VITE_SLACK_SECRET,
  };

  try {
    const response = await fetch('https://bot.questbook.xyz/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { status: 'success', message: 'Slack alert sent successfully' };
  } catch (error) {
    console.error(`Error while sending Slack alert to channel: ${channelId}`, error);
    return { status: 'error', message: 'Error while sending Slack alert' };
  }
};
