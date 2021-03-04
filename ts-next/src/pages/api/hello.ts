import { NextApiRequest, NextApiResponse } from 'next'
import { createCanvas, loadImage, registerFont } from 'canvas'

const fs = require('fs')
const path = require('path')

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const imagePath = req.body
  console.log(imagePath)
  const WIDTH = 1200 as const
  const HEIGHT = 630 as const
  const DX = 0 as const
  const DY = 0 as const
  const canvas = createCanvas(WIDTH, HEIGHT)

  const ctx = canvas.getContext('2d')
  const backgroundImage = await loadImage(path.resolve('./src/image/image.png'))
  ctx.drawImage(backgroundImage, DX, DY, WIDTH, HEIGHT)

  registerFont(path.resolve('./font/ipaexg.ttf'), {
    family: 'ipagp',
  })
  ctx.font = '60px ipagp'
  ctx.fillStyle = '#FFF'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('チョッパーかわいい', 600, 300)

  const buffer = canvas.toBuffer()
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length,
  })
  res.end(buffer, 'binary')
}
