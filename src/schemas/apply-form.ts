import { z } from "zod"

export const participationTypes = ["online", "tokyo", "osaka"] as const
export type ParticipationType = (typeof participationTypes)[number]

export const applyFormSchema = z.object({
  name: z.string().min(2, "2文字以上で入力してください"),
  furigana: z
    .string()
    .min(2, "2文字以上で入力してください")
    .regex(/^[ァ-ヶー 　]+$/, "全角カタカナで入力してください"),
  email: z.string().email("メールアドレスの形式で入力してください"),
  phone: z
    .string()
    .min(10, "10桁以上で入力してください")
    .regex(/^[0-9-]+$/, "数字とハイフンのみで入力してください"),
  scheduleId: z.string().min(1, "希望日時を選択してください"),
  participationType: z.enum(participationTypes, {
    errorMap: () => ({ message: "参加形態を選択してください" }),
  }),
  question: z.string().max(500).optional(),
  agreePrivacy: z.literal(true, {
    errorMap: () => ({ message: "プライバシーポリシーへの同意が必要です" }),
  }),
})

export type ApplyFormValues = z.infer<typeof applyFormSchema>

