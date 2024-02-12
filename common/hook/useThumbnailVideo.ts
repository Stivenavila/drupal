import { useEffect, useState } from "react"

export const useThumbnailVideo = (VideoUrl: any) => {
  const [thumbnail, setthumbnail] = useState<string>('')
  const videoId = VideoUrl?.split('v=')[1]
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyACq2xSq7J1znMhn5HQAMb1xaPUxmwWjdA&part=snippet`
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const thumbnailUrl = data.items[0].snippet.thumbnails.default.url
        setthumbnail(thumbnailUrl)
      })
      .catch(error => console.error('Error al obtener la información del video:', error))
  }, [apiUrl])

  return thumbnail
}

