const weekWord = ['日', '一', '二', '三', '四', '五', '六'];

// author: meizz
export default class DateExtend extends Date {
  /**
   * 日期格式化
   * @param fmtStr 格式化字符串，
   * 支持以下关键字
   * 'y+': 年、
   * 'M+': 月份、
   * 'd+': 日、
   * 'h+': 小时、
   * 'm+': 分、
   * 's+': 秒、
   * 'q+': 季度、
   * 'S': 毫秒。
   */
  Format(fmtStr: string) {
    let fmt = fmtStr;
    const o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    } as {
      [propName: string]: number;
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, `${this.getFullYear()}`.substr(4 - RegExp.$1.length));
    }
    Object.keys(o).forEach((k) => {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? String(o[k]) : `00${o[k]}`.substr(`${o[k]}`.length),
        );
      }
    });
    return fmt;
  }

  /**
   * 快速时分秒格式化
   */
  hhmmss() {
    const hh = this.getHours()
      .toString()
      .padStart(2, '0');
    const mm = this.getMinutes()
      .toString()
      .padStart(2, '0');
    const ss = this.getSeconds()
      .toString()
      .padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  }

  /**
   * 中文的周日到周六
   */
  chineseDay() {
    return weekWord[this.getDay()];
  }

  /**
   * 计算n天前零点时间 返回新的日期对象
   * @param n 天数
   */
  beginDayTime(n = 0) {
    const newDate = new DateExtend(this);
    newDate.setDate(newDate.getDate() - n);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  /**
   * 计算n天前最后一刻时间 返回新的日期对象
   * @param n 天数
   */
  endDayTime(n = 0) {
    return new DateExtend(this.beginDayTime(n - 1).getTime() - 1);
  }

  /**
   * 计算n月前第一天凌晨时间 返回新的日期对象
   * @param n 月份
   */
  beginMonthTime(n = 0) {
    const newDate = new DateExtend(this);
    newDate.setMonth(newDate.getMonth() - n);
    newDate.setDate(1);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  /**
   * 计算n月最后一天最后一刻时间 返回新的日期对象
   * @param n 月份
   */
  endMonthTime(n = 0) {
    return new DateExtend(this.beginMonthTime(n - 1).getTime() - 1);
  }
}
