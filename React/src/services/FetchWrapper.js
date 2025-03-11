let DEFAULT_HEADER = { "Content-Type": "application/json" };

export async function FetchWrapper(URL, options, authToken) {
  if (authToken) {
    DEFAULT_HEADER = {
      ...DEFAULT_HEADER,
      Authorization: `Bearer ${authToken}`,
    };
  }
  try {
    let response = await fetch(URL, { ...options, headers: DEFAULT_HEADER });
    let responseBody = await response.json();
    if (!response.ok) {
      return {
        success: responseBody.success,
        message: responseBody.message,
        statusCode: responseBody.statusCode,
      };
    } else {
      return await responseBody;
    }
  } catch (error) {
    if (error)
      return { success: false, message: error.message, statusCode: 500 };
  }
}
