(function () {
  function deepCopy(data) {
    // 深拷贝
    var type = typeof data;
    var obj;
    if (type === 'object') {
      obj = Array.isArray(data) ? [] : {};
      for (var key in data) {
        obj[key] = deepCopy(data[key]);
      }
    } else {
      obj = data;
    }
    return obj;
  }
})();
