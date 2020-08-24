(function () {
  function createPageCtr() {
    var pageCtr = {
      pageSize: 50,
      currentPage: 1,
      prePage: null,
      nextPage: null,
      showPageSize: 5,
      showPage: [],  // 显示的页码
      pageCount: 1,  // 多少页
      init: function (count, pageSize) {
        var startp = 1;
        var showPage = [];
        var pageCount = Math.ceil(count / pageSize);
        for (var i = startp; i <= pageCount && i < startp + this.showPageSize; i++) {
          showPage.push(i);
        }
        this.pageSize = pageSize;
        this.pageCount = pageCount;
        this.showPage = showPage;
        this.nextPage = 1 < pageCount ? 2 : null;
      },
      changePage: function (currentPage, callback) {
        if (currentPage === null || currentPage === this.currentPage) {
          return true;
        }
        var startp;
        var showPage = [];
        var median = Math.ceil(this.showPageSize / 2);
        if (currentPage <= median) {
          startp = 1;
        } else if (currentPage >= this.pageCount - median + 1) {
          if (this.pageCount <= this.showPageSize) {
            startp = 1;
          } else {
            startp = this.pageCount - this.showPageSize + 1;
          }
        } else {
          startp = currentPage - median + 1;
        }
        for (var i = startp; i <= this.pageCount && i < startp + this.showPageSize; i++) {
          showPage.push(i);
        }
        this.showPage = showPage;
        this.currentPage = currentPage;
        this.prePage = currentPage > 1 ? currentPage - 1 : null;
        this.nextPage = currentPage < this.pageCount ? currentPage + 1 : null;
        callback();
      }
    };
    return pageCtr;
  }
})();
