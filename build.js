const getMsg = (file) => `📦 ${file} built`

const file1 = 'variables.css'
const file2 = 'variables-flat.css'

let message = getMsg(file1)

console.time(message)

const readme = await Bun.file('./README.md').text()

let css = `
/*!
 * @smastrom/variables
 * @description Collection of CSS variables
 * @author Simone Mastromattei smastrom@proton.me
 * @date ${new Date().toISOString()} 
 * @link https://github.com/smastrom/variables
 */`

for (const [_, block] of readme.matchAll(/```css([\s\S]*?)```/g)) {
  css += block
}

await Bun.write('./' + file1, css.trim())

console.timeEnd(message)

message = getMsg(file2)

console.time(message)

await Bun.write('./' + file2, css.replace(/(--[a-z]+)-(\d)/g, '$1$2').trim())

console.timeEnd(message)
