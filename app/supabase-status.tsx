import { isSupabaseConfigured, supabaseKey, supabaseUrl } from "@/lib/supabase/env";

// Supabase 프로젝트에 실제로 닿는지 서버에서 확인해 푸터에 표시합니다.
export default async function SupabaseStatus() {
  if (!isSupabaseConfigured) {
    return <span className="status" data-state="unset">Supabase 설정 필요</span>;
  }
  try {
    const res = await fetch(`${supabaseUrl}/auth/v1/health`, {
      headers: { apikey: supabaseKey },
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) return <span className="status" data-state="ok">Supabase 연결됨</span>;
    return <span className="status" data-state="error">Supabase 연결 실패 ({res.status})</span>;
  } catch {
    return <span className="status" data-state="error">Supabase 연결 실패</span>;
  }
}
