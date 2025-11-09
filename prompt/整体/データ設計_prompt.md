# 🗂️ ステップ 5：データ設計（0.5 日）

あなたは Next.js + TypeScript を用いて静的サイトを構築するフロントエンドエンジニアです。  
以下の条件をもとに、**JSON 管理ベースのデータ設計（スキーマ・型・格納場所・利用方法）** を整理してください。  
CMS は使用せず、すべてローカルの `/data` ディレクトリ内に静的ファイルとして管理します。

---

## 🧠 入力情報

- サイトテーマ：{例：Y'm 整体サロン}
- 使用技術：Next.js 14（pages/構成可）＋ Tailwind CSS＋ TypeScript
- データ管理：ローカル JSON（CMS なし）
- 対象データモデル：
  1. 「メニュー・料金」：Service（name, category, price, duration, description, features）  
  2. 「お客様の声」：Review（name, age, occupation, rating, comment, beforeAfter, date）  
  3. 「スタッフ紹介」：Staff（name, role, qualifications, experience, photo, message）  
  4. 「ブログ記事」：BlogPost（title, slug, content, category, publishedAt, tags）  
  5. 「FAQ」：Question/Answer（category, order）  
  6. 「営業時間・アクセス」：SalonInfo（businessHours, holidays, access, parking）

---

## 🎯 出力フォーマット

### 1. データ構成概要

| モデル         | 目的                           | データ数目安 | 管理形式                    |
| -------------- | ------------------------------ | ------------ | --------------------------- |
| Service        | メニュー・料金・施術内容       | 10〜15 件    | `/data/services.json`       |
| Review         | お客様の声・体験談             | 15〜30 件    | `/data/reviews.json`        |
| Staff          | スタッフ・施術者紹介           | 2〜5 件      | `/data/staff.json`          |
| BlogPost       | ブログ・コラム記事             | 20〜50 件    | `/data/blog-posts.json`     |
| FAQ            | よくある質問                   | 15〜25 件    | `/data/faq.json`            |
| SalonInfo      | サロン基本情報・営業時間       | 1 件         | `/data/salon-info.json`     |

---

### 2. TypeScript 型定義例

```ts
// types/index.ts
export type ServiceCategory = 'seitai' | 'esthe' | 'pulse' | 'campaign'

export type Service = {
  id: string
  name: string
  category: ServiceCategory
  price: number
  originalPrice?: number // プレオープン特別価格用
  duration: number // 分
  description: string
  features: string[]
  benefits: string[]
  targetSymptoms: string[]
  isPopular?: boolean
  isLimitedTime?: boolean
  order: number
}

export type Review = {
  id: string
  name: string // 表示名（例："A.K. 様"）
  age: number
  occupation: string
  rating: number // 1〜5
  comment: string
  beforeSymptoms: string[] // 施術前の悩み
  afterEffects: string[] // 施術後の効果
  serviceUsed: string[] // 利用したサービス
  date: string // "2025-10-31"
  photoPermission: boolean
  beforeAfterPhotos?: {
    before: string
    after: string
  }
}

export type Staff = {
  id: string
  name: string
  role: string // "院長", "副院長", "施術者"
  qualifications: string[] // 保有資格
  experience: number // 経験年数
  photo: string
  message: string
  specialties: string[] // 得意分野
  order: number
}

export type BlogCategory = 'posture' | 'health' | 'beauty' | 'selfcare' | 'salon-news'

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: BlogCategory
  tags: string[]
  publishedAt: string
  updatedAt?: string
  featuredImage?: string
  author: string
  readTime: number // 読了時間（分）
  isPublished: boolean
}

export type FAQ = {
  id: string
  category: 'service' | 'reservation' | 'payment' | 'ai-diagnosis' | 'access' | 'other'
  question: string
  answer: string
  order: number
  isFrequent: boolean // よく聞かれる質問かどうか
}

export type BusinessHours = {
  [key: string]: {
    open: string
    close: string
    isHoliday: boolean
  }
}

export type SalonInfo = {
  name: string
  address: string
  phone: string
  email: string
  businessHours: BusinessHours
  regularHolidays: string[]
  specialHolidays: string[] // 特別休業日
  access: {
    nearestStation: string
    walkingTime: number
    directions: string[]
  }
  parking: {
    available: boolean
    capacity?: number
    fee?: string
    nearbyParking?: string[]
  }
  socialMedia: {
    line?: string
    instagram?: string
    twitter?: string
  }
  googleMapUrl: string
  coordinates: {
    lat: number
    lng: number
  }
}
```

---

### 3. データ格納構成例

```
/data
├── services.json
├── reviews.json
├── staff.json
├── blog-posts.json
├── faq.json
└── salon-info.json
```

---

### 4. JSON例サンプル

#### services.json

```json
[
  {
    "id": "facial-course-60",
    "name": "フェイシャルコース",
    "category": "esthe",
    "price": 3000,
    "originalPrice": 5000,
    "duration": 60,
    "description": "マシン×手技で血行を促進して、ハリ・ツヤ・リフトアップを目指すお顔の専用コースです。",
    "features": ["マシン施術", "手技併用", "リフトアップ効果"],
    "benefits": ["血行促進", "ハリ・ツヤ改善", "小顔効果"],
    "targetSymptoms": ["顔のたるみ", "むくみ", "血色不良"],
    "isPopular": true,
    "isLimitedTime": true,
    "order": 1
  },
  {
    "id": "ai-posture-diagnosis",
    "name": "AI姿勢診断コース",
    "category": "seitai",
    "price": 2500,
    "duration": 60,
    "description": "AI姿勢診断ツールで姿勢を科学的に分析し、個別の改善プランを提案します。",
    "features": ["AI診断", "3D分析", "個別プラン"],
    "benefits": ["姿勢改善", "根本的解決", "データ可視化"],
    "targetSymptoms": ["姿勢の悪さ", "肩こり", "腰痛"],
    "isPopular": true,
    "order": 2
  }
]
```

#### reviews.json

```json
[
  {
    "id": "review-001",
    "name": "A.K. 様",
    "age": 32,
    "occupation": "会社員（事務職）",
    "rating": 5,
    "comment": "デスクワークで悩んでいた肩こりが、AI診断で原因が明確になり、的確な施術で改善されました！",
    "beforeSymptoms": ["慢性的な肩こり", "頭痛", "姿勢の悪さ"],
    "afterEffects": ["肩こり軽減", "頭痛改善", "姿勢意識向上"],
    "serviceUsed": ["AI姿勢診断コース", "整体コース"],
    "date": "2025-10-20",
    "photoPermission": true,
    "beforeAfterPhotos": {
      "before": "/images/reviews/ak-before.webp",
      "after": "/images/reviews/ak-after.webp"
    }
  },
  {
    "id": "review-002",
    "name": "M.S. 様",
    "age": 28,
    "occupation": "主婦",
    "rating": 4,
    "comment": "産後の骨盤の歪みが気になっていましたが、丁寧な施術で改善されました。",
    "beforeSymptoms": ["骨盤の歪み", "腰痛", "体型の変化"],
    "afterEffects": ["骨盤調整", "腰痛軽減", "体型改善"],
    "serviceUsed": ["マタニティー骨格矯正コース"],
    "date": "2025-10-21",
    "photoPermission": false
  }
]
```

#### staff.json

```json
[
  {
    "id": "staff-001",
    "name": "田中 美穂",
    "role": "院長",
    "qualifications": ["柔道整復師", "鍼灸師", "AI姿勢診断士"],
    "experience": 8,
    "photo": "/images/staff/tanaka.webp",
    "message": "お客様一人ひとりの体の状態に合わせた最適な施術を心がけています。",
    "specialties": ["姿勢改善", "骨盤矯正", "AI診断"],
    "order": 1
  }
]
```

#### blog-posts.json

```json
[
  {
    "id": "posture-improvement-tips",
    "title": "デスクワーカー必見！簡単姿勢改善エクササイズ",
    "slug": "posture-improvement-tips",
    "excerpt": "長時間のデスクワークで悪化した姿勢を改善する、自宅でできる簡単エクササイズをご紹介します。",
    "content": "# デスクワーカー必見！簡単姿勢改善エクササイズ\n\n長時間のデスクワークは...",
    "category": "posture",
    "tags": ["姿勢改善", "デスクワーク", "エクササイズ", "セルフケア"],
    "publishedAt": "2025-10-25",
    "featuredImage": "/images/blog/posture-tips.webp",
    "author": "田中 美穂",
    "readTime": 3,
    "isPublished": true
  }
]
```

#### faq.json

```json
[
  {
    "id": "faq-001",
    "category": "service",
    "question": "AI姿勢診断はどのような仕組みですか？",
    "answer": "3Dカメラで全身を撮影し、AIが姿勢の歪みや筋肉のバランスを分析します。結果は視覚的にわかりやすく表示され、個別の改善プランを提案いたします。",
    "order": 1,
    "isFrequent": true
  },
  {
    "id": "faq-002",
    "category": "reservation",
    "question": "予約方法を教えてください。",
    "answer": "LINE公式アカウント、お電話、またはWebフォームからご予約いただけます。LINEが最も簡単で、24時間受付可能です。",
    "order": 2,
    "isFrequent": true
  }
]
```

#### salon-info.json

```json
{
  "name": "Y'm 整体サロン",
  "address": "埼玉県戸田市本町1-2-3 サンプルビル2F",
  "phone": "048-123-4567",
  "email": "info@ym-salon.com",
  "businessHours": {
    "monday": { "open": "09:00", "close": "20:00", "isHoliday": false },
    "tuesday": { "open": "09:00", "close": "20:00", "isHoliday": false },
    "wednesday": { "open": "09:00", "close": "20:00", "isHoliday": false },
    "thursday": { "open": "09:00", "close": "20:00", "isHoliday": false },
    "friday": { "open": "09:00", "close": "20:00", "isHoliday": false },
    "saturday": { "open": "09:00", "close": "18:00", "isHoliday": false },
    "sunday": { "open": "09:00", "close": "18:00", "isHoliday": false }
  },
  "regularHolidays": ["不定休"],
  "specialHolidays": ["2025-12-29", "2025-12-30", "2025-12-31", "2025-01-01"],
  "access": {
    "nearestStation": "JR埼京線 戸田駅",
    "walkingTime": 5,
    "directions": [
      "戸田駅東口を出て直進",
      "コンビニを右折",
      "2つ目の角を左折",
      "サンプルビル2Fです"
    ]
  },
  "parking": {
    "available": true,
    "capacity": 3,
    "fee": "無料",
    "nearbyParking": ["戸田駅前パーキング（徒歩2分）", "市営駐車場（徒歩3分）"]
  },
  "socialMedia": {
    "line": "https://line.me/R/ti/p/@ym-salon",
    "instagram": "https://instagram.com/ym_salon"
  },
  "googleMapUrl": "https://maps.google.com/...",
  "coordinates": {
    "lat": 35.8017,
    "lng": 139.6886
  }
}
```

---

### 5. データ読み込み方法（Next.js）

```tsx
// pages/menu/index.tsx
import { Service } from '@/types'
import services from '@/data/services.json'

export default function MenuPage() {
  const serviceList = services as Service[]
  const seitaiServices = serviceList.filter(s => s.category === 'seitai')
  const estheServices = serviceList.filter(s => s.category === 'esthe')

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">メニュー・料金</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">整体コース</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {seitaiServices.map((service) => (
            <div key={service.id} className="border rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{service.description}</p>
              <div className="flex items-center space-x-2">
                {service.originalPrice && (
                  <span className="line-through text-gray-400">
                    ¥{service.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xl font-bold text-green-600">
                  ¥{service.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600">
                  ({service.duration}分)
                </span>
              </div>
              {service.isLimitedTime && (
                <span className="inline-block bg-red-500 text-white px-2 py-1 rounded text-xs mt-2">
                  期間限定
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

```tsx
// pages/voice/index.tsx
import { Review } from '@/types'
import reviews from '@/data/reviews.json'

export default function VoicePage() {
  const reviewList = reviews as Review[]
  const publishedReviews = reviewList.filter(r => r.photoPermission || !r.beforeAfterPhotos)

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">お客様の声</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publishedReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.age}歳 / {review.occupation}
                </p>
              </div>
              <div className="ml-auto">
                <div className="flex text-yellow-400">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review.comment}</p>
            <div className="text-sm">
              <p className="text-gray-600 mb-1">利用サービス:</p>
              <div className="flex flex-wrap gap-1">
                {review.serviceUsed.map((service, i) => (
                  <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

### 6. 拡張性・管理メモ

- JSON 更新で即リリース可能（Vercel 自動ビルド）
- `order` で表示順制御、`isPublished` で公開制御
- 今後 API 化する場合：`/api/services` で同構造を返すだけで対応可能
- 画像最適化：`/public/images` に配置し `next/image` で自動最適化
- レビュー・FAQ はカテゴリ別に絞り込み表示可
- プレオープン価格は `originalPrice` と `price` で表現

---

### 7. バリデーション（任意）

JSON 更新ミス防止のために Zod などを導入可能：

```ts
import { z } from 'zod'

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(['seitai', 'esthe', 'pulse', 'campaign']),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  duration: z.number().positive(),
  description: z.string(),
  features: z.array(z.string()),
  benefits: z.array(z.string()),
  targetSymptoms: z.array(z.string()),
  isPopular: z.boolean().optional(),
  isLimitedTime: z.boolean().optional(),
  order: z.number(),
})

export const ReviewSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number().min(18).max(100),
  occupation: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  beforeSymptoms: z.array(z.string()),
  afterEffects: z.array(z.string()),
  serviceUsed: z.array(z.string()),
  date: z.string(),
  photoPermission: z.boolean(),
  beforeAfterPhotos: z.object({
    before: z.string(),
    after: z.string(),
  }).optional(),
})
```

---

### 8. 地域密着型サロン特有のデータ設計

#### 地域情報の管理
- 近隣駅・ランドマーク情報
- 駐車場・アクセス詳細
- 地域イベント・キャンペーン情報

#### 予約管理データ（将来拡張）
```ts
export type ReservationSlot = {
  date: string
  time: string
  available: boolean
  serviceId: string
  duration: number
}
```

#### キャンペーン管理
```ts
export type Campaign = {
  id: string
  title: string
  description: string
  discount: number
  startDate: string
  endDate: string
  targetServices: string[]
  isActive: boolean
}
```

---

### 9. 今後の決定項目（次フェーズ）

- 表示件数・並び順（例：人気順 or 価格順 or カテゴリ順）
- レビュー・FAQ のカテゴリタグ詳細定義
- 画像命名規則・格納ディレクトリ構成
- ブログ記事の Markdown 対応（MDX 導入検討）
- 多言語対応の有無（将来的な i18n 拡張）
- 予約システム連携のデータ構造
- Google Analytics イベント設計

---

### 10. SEO・マーケティング対応

#### 構造化データ対応
```ts
export type StructuredData = {
  '@context': 'https://schema.org'
  '@type': 'LocalBusiness'
  name: string
  address: object
  telephone: string
  openingHours: string[]
  review: object[]
  service: object[]
}
```

#### サイトマップ生成用データ
- 各ページの優先度・更新頻度
- ブログ記事の URL 生成
- メニューページの動的生成

---

📌 出力条件：

- TypeScript 型・JSON 例・ディレクトリ構成をすべて明示
- CMS なし前提（静的データ管理）
- 整体サロン特有のデータ構造を含める
- 地域密着型・プレオープン戦略を反映
- Tailwind での呼び出し実装イメージ付き
- 最後に「次フェーズ（ルーティング設計）で決める項目リスト」も出力する

## 📋 次フェーズ（ルーティング設計）で決める項目リスト

### 必須決定事項
- [ ] 各ページの URL 構造・パス設計
- [ ] 動的ルーティングの範囲（ブログ記事・メニュー詳細）
- [ ] 予約フォームの遷移設計
- [ ] サイトマップ・パンくずリスト構造

### 決定推奨事項
- [ ] 内部リンク戦略・SEO 最適化
- [ ] 404 ページ・エラーハンドリング
- [ ] リダイレクト設定（旧 URL からの移行）

### 後回し可能な項目
- [ ] 多言語対応ルーティング
- [ ] API ルート設計（将来的な動的機能）
