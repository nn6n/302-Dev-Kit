import { LocaleType } from "./index";

const ja: LocaleType = {
  Symbol: "ja",
  Title: "日本語",
  Desc: "",
  Domain: "302.AI",
  Theme: {
    Light: '日中モード',
    Dark: '夜間モード',
    System: 'システムに従う',
  },
  System: {
    Title: "システム",
    Desc: "",
    Cancel: "キャンセル",
    Confirm: "確認",
    Delete: "削除",
    clean: "空にする",
    Back: "戻る",
    Success: "操作成功!",
    Faild: "操作失敗!",
    Notify: "システムヒント!",
    Error: "システムエラー!",
    Download: "ダウンロード",
  },
  Error: {
    Title: "エラー",
    Desc: "",
    UnknowError: "未知のエラーが発生しました。後でもう一度試すか、お問い合わせください！",
    NetworkError: "ネットワークエラーが発生しました。後でもう一度試すか、お問い合わせください！",
    CodeInvalid: "認証コードが間違っています。詳細は 302.AI をご覧ください",
    ToolBin: "このツールは無効になっています。詳細は 302.AI をご覧ください",
    ToolDel: "このツールは削除されています。詳細は 302.AI をご覧ください",
  },
  Navigator: {
    Title: "ようこそ",
    Desc: "あなた自身のAIツールを作成する",
    Domain: "302.AI",
    Auth: "認証ページ",
    Land: "ランディングページ",
  },
  Footer: {
    Title: "Powered By",
    Desc: "コンテンツはAIによって生成されたもので、参考のためのものです",
  },
  About: {
    Title: "約",
    Desc: "AIツール",
  },
  History: {
    Title: "履歴",
    Desc: "すべての履歴はローカルに保存され、アップロードされません",
    Empty: "申し訳ありませんが、履歴はありません！",
    Clean: "すべての履歴を空にする",
    ItemCount: (count: number) => `${count}件の履歴があります`,
  },
  Auth: {
    Title: "権限付与",
    Desc: "",
    NeedCode: "共有コードが必要です",
    RemindCode: "共有コードを記憶する",
    InputTip: "作成者が認証をオンにしました。以下に共有コードを入力してください",
    InputPlaceHolder: "共有コードを入力してください",
  },
  Land: {
    Title: "AIツールの基本テンプレート",
    Desc: "ここからあなた自身のAIツールを作り始めてください",
    Test: {
      Hello: "こんにちは！ようこそ 302.AI へ",
      LogOut: "ログアウト",
    },
  },
};
export default ja;
