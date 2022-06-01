// 默认导出 一个模块可能只有一个实体或者包含多个实体
// 可以通过export default导出单个模块中只有单个实体的模块

// export default 一个模块只能有一个
// export default function sayHello() {
//   console.log('Hello')
// }

// 默认导出可以没有名称
export default function () {
  console.log('Hello')
}

