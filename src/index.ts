type Handle = () => Promise<string>
const fullname: string = 'Ngô Trọng Phong'

const handle: Handle = () => Promise.resolve(fullname)
console.log(fullname)
handle().then(console.log)
