let module = 'ES Modules'
// export 从当前模块导出变量与方法

// 模块始终在严格模式下运行

// 模块代码只会在第一次导入时解析
let obj = {
  name: 'jsx'
}

// 延时加载
let head = document.querySelector('h3')
console.log(head)

export { module, obj, head }
