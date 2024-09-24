export default class DataManager {
  // 合并数据
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static mergeData = (target: any, source: any) => {
    Object.keys(source).forEach((key) => {
      if (source[key] && typeof source[key] === "object") {
        this.mergeData((target[key] = target[key] || {}), source[key]);
        return;
      }
      target[key] = source[key];
    });
  };

  // 检测中文
  static containsChinese(str: string) {
    const reg = /[\u4E00-\u9FA5]/g; // 匹配中文的正则表达式
    return reg.test(str);
  }

  // 格式化当前时间
  static getNowformatTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return year + month + day + hours + minutes + seconds;
  };

  // 格式化时间戳
  static formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
    return formattedDate;
  };

  // 复制数据到剪切板
  static copyToClipboard = (text: string) => {
    if (!text) {
      return;
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      textarea.style.position = "fixed";
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      textarea.value = text;
      textarea.select();
      document.execCommand("copy", true);
      document.body.removeChild(textarea);
    }
  };
}
