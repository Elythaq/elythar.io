import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isLoggedIn = Boolean(req.cookies.get('next-auth.session-token'));
  const protectedPaths = ['/dashboard', '/admin'];

  if (protectedPaths.some(path => req.nextUrl.pathname.startsWith(path)) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  return NextResponse.next();
}
