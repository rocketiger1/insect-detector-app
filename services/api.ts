export async function uploadImageToServer(imageUri: string): Promise<string> {
  const fileName = imageUri.split('/').pop() || 'photo.jpg';
  const match = /\.(\w+)$/.exec(fileName);
  const fileType = match ? `image/${match[1]}` : `image`;

  const formData = new FormData();
  formData.append('file', {
    uri: imageUri,
    name: fileName,
    type: fileType,
  } as unknown as Blob);

  const SERVER_URL = 'http://your own ip address:8000';

  try {
    console.log("Uploading image to server...");
    const response = await fetch(`${SERVER_URL}/detect`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Server response:", response.status, response.statusText);

    if (!response.ok) throw new Error("Failed to get processed image");
    const blob = await response.blob();

    // In React Native, use:
    const reader = new FileReader();
    return await new Promise((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result as string); // base64 data URL
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Detection error:", error);
    throw error;
  }
}