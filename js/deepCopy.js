(function () {
  /**
  * 深拷贝
  */
  function deepCopy(data) {
    // 深拷贝
    var type = typeof data;
    var obj;
    if (type === 'object') {
      if (data === null) {
        obj = null
      } else if (data instanceof Date) {
        // 时间类型
        obj = data
      } else {
        obj = Array.isArray(data) ? [] : {};
        for (var key in data) {
          obj[key] = dcp(data[key]);
        }
      }
    } else {
      obj = data;
    }
    return obj;
  }
})();
