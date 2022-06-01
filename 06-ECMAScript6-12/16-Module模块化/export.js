// 声明前导出
export let module = 'export'

// // 变量声明前导出
// export let module = 'export'

// // 函数声明前导出
// export function sayHi() {
//   console.log('Hi')
// }

// // 类声明前导出
// export class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// 声明与导出分开
let name = 'jsx'

function sayHi() {
  console.log('Hi')
}

function sayHello() {
  console.log('Hello')
}

class User {
  constructor(name) {
    this.name = name
  }
}

export {name, sayHi, User, sayHello}