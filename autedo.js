const resolveRedirect = async (result) => {
  try {
    // Assuming 'result' is a URL or a response object containing a URL
    const response = await fetch(result);
    // Check if the response has a redirect status
    if (response.redirected) {
      // Get the URL after the redirect
      const redirectedUrl = response.url;
      // You can now use the redirected URL for further processing
      return redirectedUrl;
    }
    // If there's no redirect, return the original result or URL
    return result;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('Error resolving redirect:', error);
    throw error;
  }
};
