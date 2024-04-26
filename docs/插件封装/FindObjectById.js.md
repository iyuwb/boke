# FindObjectById.js

## 简介

> ​	从数组和对象嵌套数据中，快速简洁的取出id相等的数据

## 示例

```js
function findValueById(obj, id) {
  if (obj.value === id) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.reduce((acc, val) => acc || findValueById(val, id), null);
  }
  if (typeof obj === 'object') {
    return Object.values(obj).reduce((acc, val) => acc ||findValueById(val, id), null);
  }
  return null;
}
```

