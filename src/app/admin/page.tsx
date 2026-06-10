'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminInput from '@/components/admin/AdminInput'

export default function AdminLoginPage() {
  const router = useRouter()
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [idError, setIdError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  const isActive = id.length > 0 && password.length > 0

  const handleLogin = async () => {
    if (!isActive || loading) return

    setIdError('')
    setPasswordError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      })

      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        const data = await res.json()
        setPasswordError(data.error ?? '로그인에 실패했습니다.')
      }
    } catch {
      setPasswordError('네트워크 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#f2f4f5' }}
    >
      <div
        className="bg-white rounded-[16px] px-[90px] py-[86px] flex flex-col gap-[40px] items-center"
        style={{ boxShadow: '4px 8px 36px rgba(0,0,0,0.05)' }}
      >
        <h1
          className="font-bold text-[30px] leading-[41.5px] text-black tracking-[-0.21px] whitespace-nowrap"
          style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif' }}
        >
          관리자 로그인
        </h1>

        <div className="flex flex-col gap-[40px] items-end">
          <div className="flex flex-col gap-[20px] items-start w-full">
            <AdminInput
              label="아이디"
              type="text"
              placeholder="아이디를 입력해 주세요."
              value={id}
              onChange={setId}
              error={idError}
              onKeyDown={handleKeyDown}
              autoComplete="username"
            />
            <AdminInput
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={setPassword}
              error={passwordError}
              onKeyDown={handleKeyDown}
              autoComplete="current-password"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={!isActive || loading}
            className={`w-[338px] py-[13px] rounded-[3px] text-[15px] leading-[22px] font-semibold text-center transition-colors
              ${isActive && !loading
                ? 'bg-[#016cab] text-white cursor-pointer hover:bg-[#015689]'
                : 'bg-[#e6e8eb] text-[#808991] cursor-not-allowed'
              }`}
            style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif' }}
          >
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </div>
      </div>
    </div>
  )
}
