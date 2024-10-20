const ja = {
  Symbol: "ja",
  Title: "日本語",
  Desc: "",
  Theme: {
    Light: "ライト",
    Dark: "ダーク",
    System: "システム",
  },
  System: {
    Title: "システム",
    Desc: "",
    Cancel: "キャンセル",
    Confirm: "確認",
    Delete: "削除",
    clean: "空にする",
    Back: "戻る",
    Success: "操作成功！",
    Faild: "操作失敗！",
    Notify: "システム通知！",
    Error: "システムエラー！",
    Download: "ダウンロード",
  },
  Error: {
    Title: "エラー",
    Desc: "",
    UnknowError:
      "未知のエラーです。後でもう一度お試しいただくか、カスタマーサポートにお問い合わせください！",
    NetworkError:
      "ネットワークエラーです。後でもう一度お試しいただくか、カスタマーサポートにお問い合わせください！",
    CodeInvalid: "認証コードエラーです。詳細は 302.AI をご覧ください。",
    ToolBin: "このツールは無効化されました。詳細は 302.AI をご覧ください。",
    ToolDel: "このツールは削除されました。詳細は 302.AI をご覧ください。",
  },
  Navigator: {
    Title: "ようこそ",
    Desc: "自分だけのAIツールを作成する",
    Domain: "302.AI",
    Auth: "認証ページ",
    Land: "テンプレートページ",
  },
  Footer: {
    Title: "Powered By",
    Desc: "内容はAIによって生成され、参考用です",
  },
  About: {
    Title: "説明",
    Desc: "このAIツールの詳細プレビュー",
  },
  History: {
    Title: "履歴",
    Desc: "すべての履歴はローカルに保存され、アップロードされません",
    Empty: "申し訳ありませんが、履歴がありません！",
    Clean: "すべての履歴を空にする",
    ItemCount: (count: number) => `合計${count}件の履歴`,
  },
  Auth: {
    Title: "認証",
    Desc: "",
    NeedCode: "共有コードが必要です",
    RemindCode: "共有コードを記憶してください",
    InputTip: "作成者が認証を有効にしました。下に共有コードを入力してください",
    InputPlaceHolder: "共有コードを入力してください",
  },
  Land: {
    Title: "AIツール基本テンプレート",
    Desc: "ここから自分だけのAIツールを作り始めましょう",
    Test: {
      Hello: "こんにちは！ようこそ 302.AI に",
      LogOut: "ログアウト",
    },
  },
};
export default ja;
