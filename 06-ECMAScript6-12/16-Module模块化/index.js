// 主文件
// 需要先导入各个模块功能 再导出
// import {getName, getGrilFriend, default as friend} from './get.js'
// export {getName, getGrilFriend, friend}

// import {sayHello, sayHi, default as sayBye} from './say.js'
// export {sayHello, sayHi, sayBye}

// 通过export from 导入重新导出
// export {getName, getGrilFriend, default as friend} from './get.js'
// export {sayHello, sayHi, default as sayBye} from './say.js'

// 重新导入默认导出
// export * from ... 重新导出命名的导出
// export {default} 重新导出默认的导出
export * from './get.js'
export {default as friend} from './get.js'

export * from './say.js'
export {default as sayBye} from './say.js'