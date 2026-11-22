// Supabase 프로젝트 설정 > API 에서 복사한 값을 .env.local 에 넣습니다.
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "";
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);
