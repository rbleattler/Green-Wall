import { type NextRequest, NextResponse } from 'next/server'

import { fetchIssuesInYear } from '~/services'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const username = searchParams.get('username')
  const year = searchParams.get('year')

  if (username && year) {
    const issues = await fetchIssuesInYear({ username, year: Number(year) })

    return NextResponse.json(issues)
  }

  return NextResponse.json({ error: 'Missing username or year' }, { status: 400 })
}
