import { combineReducers } from 'redux';
import exampleReducer from './example-reducer'; // 示例 reducer

const rootReducer = combineReducers({
  example: exampleReducer
  // 可以添加其他 reducers
});

export type RootState = ReturnType<typeof rootReducer>; // 获取根状态类型

export default rootReducer;
