const zh = {
  Symbol: "zh",
  Title: "中文",
  Desc: "",
  Domain: "302.AI",
  System: {
    Title: "系统",
    Desc: "",
    Cancel: "取消",
    Confirm: "确认",
    Delete: "删除",
    clean: '清空',
    Back: "返回",
    Success: '操作成功!',
    Faild: '操作失败!',
    Notify: '系统提示!',
    Error: '系统错误!',
    Download: "下载",
  },
  Error: {
    Title: "错误",
    Desc: "",
    UnknowError: "未知错误，请稍后重试或联系客服！",
    NetworkError: "网络错误，请稍后重试或联系客服！",
    CodeInvalid: "验证码错误，更多信息请访问 302.AI",
    ToolBin: "该工具已被禁用, 更多信息请访问 302.AI",
    ToolDel: "该工具已被删除，更多信息请访问 302.AI",
  },
  Auth: {
    Title: "授权",
    Desc: "",
    NeedCode: "需要分享码",
    RemindCode: "记住分享码",
    InputTip: "创建者开启了验证，请在下方填入分享码",
    InputPlaceHolder: "请输入分享码",
  },
  Home: {
    Title: "欢迎光临",
    Desc: "",
  },
  Footer: {
    Title: "版权所有",
    Desc: "内容由AI生成，仅供参考",
  },
  About: {
    Title: "关于",
    Desc: "AI工具",
  },
  History: {
    Title: "历史记录",
    Desc: "所有历史记录均保存在本地，不会被上传",
    Empty: "抱歉, 暂无历史记录!",
    Clean: "清空所有历史记录",
    ItemCount: (count: number) => `共${count}条历史记录`,
  },
  Land: {
    Title: "AI工具基础模板",
    Desc: "创建属于你自己的AI工具",
    Test: {
      Hello: "你好呀！欢迎来到 302.AI",
      LogOut: "退出登录",
    }
  },
};

export default zh;
