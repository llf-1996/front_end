(function () {
  function strToDict(infos) {
    var res_data_list = [];
    if (typeof (infos) === 'string' && infos !== '-') {
      // 处理数据格式
      infos = infos.replace(/u'/g, "'");
      infos = infos.replace(/'/g, '"');
      var data_list = infos.split(';');
      for (var i in data_list) {
        var data = data_list[i];
        data = JSON.parse(data);
        res_data_list.push(data);
      }
    } else {
      res_data_list = infos;
    }

    return res_data_list;
  }
})();
