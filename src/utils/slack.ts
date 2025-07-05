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
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // First check the content type of the response
    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // If not JSON, get the text response
      data = await response.text();
    }

    return {
      status: 'success',
      message: 'Slack alert sent successfully',
      data,
    };
  } catch (error) {
    console.error(`Error while sending Slack alert to channel: ${channelId}`, error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return {
      status: 'error',
      message: 'Error while sending Slack alert',
      error: errorMessage,
      details: {
        channelId,
        timestamp: new Date().toISOString(),
        environment: import.meta.env.MODE,
      },
    };
  }
};
