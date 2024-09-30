const zh = {
  Symbol: "zh",
  Title: "中文",
  System: {
    Title: "系统",
    Wait: "等待",
    Back: "返回",
    Delete: "删除",
    Download: "下载",
  },
  Error: {
    Title: "系统错误!",
    TokenMiss: (domain: string) =>
      `该工具已禁用/删除, 更多信息请访问 ${domain}`, // -10001
    TokenInvalid: (domain: string) =>
      `该工具已禁用/删除！更多信息请访问 ${domain}`, // -10002
    InternalError: (domain: string) => `内部错误，更多信息请访问 ${domain}`, // -10003
    AccountOut: (domain: string) => `账号欠费，更多信息请访问 ${domain}`, // -10004
    TokenExpired: (domain: string) => `验证码过期，更多信息请访问 ${domain}`, // -10005
    TotalOut: (domain: string) => `该工具总额度已用, 更多信息请访问 ${domain}`, // -10006
    TodayOut: (domain: string) =>
      `该工具当日额度已用完，更多信息请访问 ${domain}`, // -10007
    HourOut: (domain: string) =>
      `该免费工具在本小时的额度已达上限,请访问 ${domain} 生成属于自己的工具`, // -10012
  },
  Auth: {
    Title: "授权",
    NeedCode: "需要分享码",
    InputCode: "创建者开启了验证，请在下方填入分享码",
    PlaceHolder: "请输入分享码",
    ToolBin: "工具已禁用, 更多信息请访问",
    ToolDel: "工具已删除, 更多信息请访问",
    Submit: "确认",
    Remind: "记住分享码",
    CodeError: "验证码错误！",
    AccountBin: "账号已被禁用!",
    AccountDel: "账号已被注销！",
    NetworkError: "网络错误，请刷新页面后重试！",
  },
  Home: {
    Title: "主页",
    Desc: "",
  },
  Footer: {
    Title: "内容由AI生成，仅供参考",
    Desc: "",
  },
  About: {
    Title: "关于",
    Desc: "AI工具",
  },
  History: {
    Title: "历史记录",
    Desc: "",
    Empty: "抱歉, 暂无历史记录!",
    Clean: "清空",
    ItemCount: (count: number) => `共${count}条历史记录`,
  },
  Landing: {
    Title: "AI Tool Start",
    Desc: "Create your ai tool from here",
  },
};

export default zh;
