# 🗂️ ステップ6：データ設計（0.5日）

あなたはNext.js + TypeScriptを用いて静的サイトを構築するフロントエンドエンジニアです。  
以下の条件をもとに、**JSON管理ベースのデータ設計（スキーマ・型・格納場所・利用方法）** を整理してください。  
CMSは使用せず、すべてローカルの `/data` ディレクトリ内に静的ファイルとして管理します。

---

## 🧠 入力情報
- サイトテーマ：{例：株式投資スクール}
- 使用技術：Next.js 14（pages/構成可）＋ Tailwind CSS＋ TypeScript
- データ管理：ローカルJSON（CMSなし）
- 対象データモデル：
  1. 「開催・申込」：Event（title, date, venue/online, capacity, entry_url）  
  2. 「カリキュラム」：Lesson（no, title, summary, outcomes）  
  3. 「教材」：Textbook（title, images, features, toc）  
  4. 「FAQ」：Question/Answer（category, order）  
  5. 「レビュー」：Review（name/initial, rating, quote, date, source_url）

---

## 🎯 出力フォーマット

### 1. データ構成概要
| モデル | 目的 | データ数目安 | 管理形式 |
|---------|--------|---------------|-------------|
| Event | 開催スケジュール・申込リンク | 10〜30件 | `/data/events.json` |
| Lesson | 15回分のカリキュラム | 15件固定 | `/data/lessons.json` |
| Textbook | 教材紹介 | 3〜5件 | `/data/textbooks.json` |
| FAQ | よくある質問 | 10〜20件 | `/data/faq.json` |
| Review | 口コミ・評価 | 10〜30件 | `/data/reviews.json` |

---

### 2. TypeScript 型定義例
```ts
// types/index.ts
export type Event = {
  title: string
  date: string // ISO8601 (例: "2025-11-05")
  venue: string
  online: boolean
  capacity: number
  entry_url: string
}

export type Lesson = {
  no: number
  title: string
  summary: string
  outcomes: string[]
}

export type Textbook = {
  title: string
  images: string[]
  features: string[]
  toc: string[]
}

export type FAQ = {
  category: string
  question: string
  answer: string
  order: number
}

export type Review = {
  name: string // 表示名（例："A.K."）
  rating: number // 1〜5
  quote: string // コメント本文
  date: string // "2025-10-31"
  source_url?: string // 任意（掲載元リンク）
}
```

---

### 3. データ格納構成例
```
/data
├── events.json
├── lessons.json
├── textbooks.json
├── faq.json
└── reviews.json
```

---

### 4. JSON例サンプル

#### events.json
```json
[
  {
    "title": "11月度 無料体験セミナー（東京）",
    "date": "2025-11-10",
    "venue": "東京・丸の内校",
    "online": false,
    "capacity": 20,
    "entry_url": "https://example.com/seminar/tokyo"
  },
  {
    "title": "オンライン体験会（全国）",
    "date": "2025-11-12",
    "venue": "Zoom開催",
    "online": true,
    "capacity": 50,
    "entry_url": "https://example.com/seminar/online"
  }
]
```

#### lessons.json
```json
[
  {
    "no": 1,
    "title": "株式投資の基礎",
    "summary": "初心者向けに株の仕組みを学ぶ",
    "outcomes": ["株の基本構造を理解", "用語の整理"]
  },
  {
    "no": 2,
    "title": "チャート分析入門",
    "summary": "ローソク足とトレンドを理解する",
    "outcomes": ["チャートの読み方を習得", "移動平均線の基礎"]
  }
]
```

#### textbooks.json
```json
[
  {
    "title": "実践チャート分析テキスト",
    "images": ["/images/textbook1.webp"],
    "features": ["初心者向け", "実例豊富", "見開き解説"],
    "toc": ["第1章 チャートとは", "第2章 トレンド分析"]
  }
]
```

#### faq.json
```json
[
  {
    "category": "受講内容",
    "question": "未経験でも大丈夫ですか？",
    "answer": "はい、初回から基礎を丁寧に学べるカリキュラムです。",
    "order": 1
  },
  {
    "category": "申込",
    "question": "支払い方法は？",
    "answer": "クレジットカードまたは銀行振込に対応しています。",
    "order": 2
  }
]
```

#### reviews.json
```json
[
  {
    "name": "A.K.",
    "rating": 5,
    "quote": "初心者でも理解しやすく、講師の説明がとても丁寧でした！",
    "date": "2025-10-20",
    "source_url": "https://example.com/review/ak"
  },
  {
    "name": "M.S.",
    "rating": 4,
    "quote": "オンライン講義でも質問しやすかったです。",
    "date": "2025-10-21"
  }
]
```

---

### 5. データ読み込み方法（Next.js）
```tsx
// pages/school/schedule.tsx
import { Event } from '@/types'
import events from '@/data/events.json'

export default function SchedulePage() {
  const list = events as Event[]
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">開催スケジュール</h1>
      <ul className="space-y-4">
        {list.map((e) => (
          <li key={e.title} className="border p-4 rounded-xl">
            <p className="font-semibold">{e.title}</p>
            <p>{e.date} / {e.venue}</p>
            <a href={e.entry_url} className="text-accent underline">申し込む</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

---

### 6. 拡張性・管理メモ
- JSON更新で即リリース可能（Vercel自動ビルド）
- `no` や `order` で表示順制御
- 今後API化する場合：`/api/events` で同構造を返すだけで対応可能
- 画像最適化：`/public/images` に配置し `next/image` で自動最適化
- FAQ／レビューはカテゴリ別に絞り込み表示可

---

### 7. バリデーション（任意）
- JSON更新ミス防止のためにZodなどを導入可能：
```ts
import { z } from 'zod'
export const EventSchema = z.object({
  title: z.string(),
  date: z.string(),
  venue: z.string(),
  online: z.boolean(),
  capacity: z.number(),
  entry_url: z.string().url(),
})
```

---

### 8. 今後の決定項目（次フェーズ）
- 表示件数・並び順（例：最新順 or 番号順）
- レビュー／FAQのカテゴリタグ定義
- 画像命名規則・格納ディレクトリ構成
- 多言語対応の有無（将来的なi18n拡張）

---

📌 出力条件：
- TypeScript型・JSON例・ディレクトリ構成をすべて明示
- CMSなし前提（静的データ管理）
- Tailwindでの呼び出し実装イメージ付き
- 最後に「次フェーズ（ルーティング設計）で決める項目リスト」も出力する
