import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // /admin 하위 경로 보호 (로그인 페이지 자체와 API 제외)
  const isAdminRoute = pathname.startsWith('/admin')
  const isLoginPage = pathname === '/admin'
  const isAdminApi = pathname.startsWith('/api/admin')

  if (isAdminRoute && !isLoginPage && !isAdminApi) {
    const session = request.cookies.get('admin_session')
    const secret = process.env.ADMIN_SESSION_SECRET

    if (!session || !secret || session.value !== secret) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path+'],
}
