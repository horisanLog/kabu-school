import { z } from "zod"

export const inquiryTypes = ["general", "curriculum", "payment", "other"] as const
export type InquiryType = (typeof inquiryTypes)[number]

export const contactFormSchema = z.object({
  name: z.string().min(2, "2文字以上で入力してください"),
  email: z.string().email("メールアドレスの形式で入力してください"),
  phone: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? "")
    .refine((value) => value === "" || /^[0-9-]+$/.test(value), "数字とハイフンのみで入力してください"),
  inquiryType: z.enum(inquiryTypes),
  message: z.string().min(10, "10文字以上でご入力ください").max(1000, "1000文字以内で入力してください"),
  agreePrivacy: z.literal(true, {
    errorMap: () => ({ message: "プライバシーポリシーへの同意が必要です" }),
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

