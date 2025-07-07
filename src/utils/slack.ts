export const sendSlackMessage = async (channelId: string, message: any) => {
  try {
    const response = await fetch('https://ytvnx6f74c.execute-api.ap-south-1.amazonaws.com/alert', {
      method: 'POST',
      body: JSON.stringify({
        channelId,
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      status: 'success',
      message: 'Alert sent successfully',
    };
  } catch (error) {
    console.error('Error sending alert:', error);
    return {
      status: 'error',
      message: 'Error sending alert',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};
