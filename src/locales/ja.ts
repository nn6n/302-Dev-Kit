import { LocaleType } from "./index";

const ja: LocaleType = {
  Symbol: "ja",
  Title: "日本語",
  System: {
    Title: "システム",
    Wait: "待つ",
    Back: "戻る",
    Download: "ダウンロード",
    Delete: "削除",
  },
  Error: {
    Title: "エラー",
    TokenMiss: (domain: string) =>
      `このツールは無効/削除されています。詳細については ${domain} をご覧ください。`, // -10001
    TokenInvalid: (domain: string) =>
      `このツールは無効/削除されています！詳細については ${domain} をご覧ください。`, // -10002
    InternalError: (domain: string) =>
      `内部エラーです。詳細については ${domain} をご覧ください。`, // -10003
    AccountOut: (domain: string) =>
      `アカウントが期限切れです。詳細については ${domain} をご覧ください。`, // -10004
    TokenExpired: (domain: string) =>
      `認証コードが期限切れです。詳細については ${domain} をご覧ください。`, // -10005
    TotalOut: (domain: string) =>
      `このツールの総クォータが使い果たされました。詳細については ${domain} をご覧ください。`, // -10006
    TodayOut: (domain: string) =>
      `このツールの1日のクォータが使い果たされました。詳細については ${domain} をご覧ください。`, // -10007
    HourOut: (domain: string) =>
      `この無料ツールは今時間の上限に達しました。 ${domain} を訪問して自分のツールを作成してください`, // -10012
  },
  Auth: {
    Title: "認証",
    NeedCode: "共有コードが必要です",
    InputCode:
      "作成者が認証を有効にしました。以下に共有コードを入力してください。",
    PlaceHolder: "共有コードを入力してください",
    ToolBin: "ツールは無効です。詳細については",
    ToolDel: "ツールは削除されました。詳細については",
    Submit: "送信",
    Remind: "共有コードを覚えておいてください",
    CodeError: "認証コードエラー！",
    AccountBin: "アカウントは無効です！",
    AccountDel: "アカウントはキャンセルされました！",
    NetworkError:
      "ネットワークエラーです。ページを更新して再試行してください！",
  },
  Home: {
    Title: "ホーム",
    Desc: "",
  },
  Footer: {
    Title: "AI生成コンテンツ、参考のためのみ",
    Desc: "",
  },
  About: {
    Title: "約",
    Desc: "AI Tool",
  },
  History: {
    Title: "履歴",
    Desc: "",
    Empty: "申し訳ありませんが、履歴記録はありません！",
    Clean: "クリア",
    ItemCount: (count: number) => `履歴記録は合計${count}件です`,
  },
  Landing: {
    Title: "AI Tool Start",
    Desc: "Create your ai tool from here",
  },

};
export default ja;
