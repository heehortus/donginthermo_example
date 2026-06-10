import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 공개 데이터 조회용 (클라이언트/서버 공용)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 관리자 전용 클라이언트 — 서버 사이드(API Route, Server Component)에서만 사용할 것
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)
