// Downloads every image referenced in src/data/schoolContent.js into public/images/.
// Usage: npm run fetch-images   (needs Node 18+ and access to tis.edu.in)
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { allImages } from '../src/data/schoolContent.js'

let failed = 0
for (const image of allImages) {
  const target = join('public', image.src)
  try {
    const res = await fetch(image.remote)
    const type = res.headers.get('content-type') || ''
    if (!res.ok || !type.startsWith('image/')) throw new Error(`HTTP ${res.status} ${type}`)
    await mkdir(dirname(target), { recursive: true })
    await writeFile(target, Buffer.from(await res.arrayBuffer()))
    console.log(`OK   ${target}`)
  } catch (err) {
    failed += 1
    console.log(`FAIL ${image.remote} -> ${err.message}`)
  }
}
console.log(failed ? `${failed} image(s) failed; the site will fall back to the remote URL.` : 'All images downloaded.')
process.exitCode = failed ? 1 : 0
