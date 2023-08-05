export const parseGDriveUrl = (url: string) => {
  if (!url.startsWith('https://drive.google.com/file/d/')) {
    return url
  }
  const id = url.split('/')[5]
  return `https://lh3.googleusercontent.com/d/${id}`
}
