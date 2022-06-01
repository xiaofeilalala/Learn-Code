// 混合导出
// 通过default关键字将函数与定义分开导出
// function sayHello () {
//   console.log('Hello')
// }

// export { sayHello as default }

// 当模块有具名与默认导出时
export default function () {
  console.log('Hi')
}

export function sayBye() {
  console.log('bye')
}
