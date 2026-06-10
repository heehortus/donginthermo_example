import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id, password } = await req.json()

  const adminId = process.env.ADMIN_ID
  const adminPassword = process.env.ADMIN_PASSWORD
  const sessionSecret = process.env.ADMIN_SESSION_SECRET

  if (!adminId || !adminPassword || !sessionSecret) {
    return NextResponse.json({ error: '서버 설정 오류입니다.' }, { status: 500 })
  }

  if (id !== adminId || password !== adminPassword) {
    return NextResponse.json(
      { error: '아이디 또는 비밀번호가 올바르지 않습니다.' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('admin_session', sessionSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7일
    path: '/',
  })

  return response
}
