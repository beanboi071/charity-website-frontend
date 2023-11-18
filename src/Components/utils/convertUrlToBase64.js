export function convertApiImageToBase64(apiResponse) {
    try {
      // Assuming your API response is in JSON format and contains an 'imageData' field
     
  
      // Convert the image data to base64
      const base64String = btoa(unescape(encodeURIComponent(apiResponse)));
      return `data:image/png;base64,${base64String}`;
    } catch (error) {
      console.error('Error converting API image to base64:', error);
      throw error;
    }
  }