// @Email(message = "이메일 형식이 아닙니다")
// @NotBlank(message = "이메일은 필수 입력 값입니다")
// String email,
//
// @NotBlank(message = "비밀번호는 필수 입력 값입니다")
// @Size(min = 8, max = 20, message = "비밀번호는 8자 이상, 20자 이하 여야 합니다")
import {z} from 'zod'

export const signinSchema = z.object({
    email: z.string().min(1, '이메일은 필수 입니다.').email("이메일 형식이 올바르지 않습니다."),
    password: z.string()
        .min(8, '비밀번호는 최소 8글자 이상이어야합니다.')
        .max(20, '비밀번호는 최대 20자 까지 가능합니다.')
});

export type SigninFormData = z.infer<typeof signinSchema>;

export const signupSchema = z.object({
    email: z.string().min(1, '이메일은 필수 입니다.').email("이메일 형식이 올바르지 않습니다."),
    password: z.string()
        .min(8, '비밀번호는 최소 8글자 이상이어야합니다.')
        .max(20, '비밀번호는 최대 20자 까지 가능합니다.'),
    nickname: z.string()
        .min(2, '닉네임은 최소 2글자 이상이어야합니다.')
        .max(20, '닉네임은 최대 20자 까지 가능합니다.'),
})

export type SignupFormData = z.infer<typeof signupSchema>;