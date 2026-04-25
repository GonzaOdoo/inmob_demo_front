// src/mocks/demoImages.ts

const demoImages = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1599423300746-b62533397364",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
]

// opcional: cache para no cambiar imagen en cada render
const imageCache = new Map<string, string>()

export function getRandomImage(id: string) {
  if (imageCache.has(id)) return imageCache.get(id)!

  const img = demoImages[Math.floor(Math.random() * demoImages.length)]
  imageCache.set(id, img)

  return img
}

export function getRandomImages(count = 5) {
  const shuffled = [...demoImages].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}