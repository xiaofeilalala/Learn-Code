// 别名导出 通过as重命名
function sayHi() {
  console.log('Hi')
}

function sayHello() {
  console.log('Hello')
}

export {sayHi as hi, sayHello as hello}
