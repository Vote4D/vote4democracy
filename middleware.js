// middleware.js
import { next, rewrite } from '@vercel/edge';

export const config = { matcher: '/((?!_next|assets|.*\\..*).*)' };

export default function middleware(request) {
  const host = request.headers.get('host') || '';

  if (host.includes('youngvotesmatter.com')) {
    return rewrite(new URL('/youth' + new URL(request.url).pathname, request.url));
  }
  if (host.includes('fight4thevote.com')) {
    return rewrite(new URL('/rights' + new URL(request.url).pathname, request.url));
  }
  // votefordemocracy.com falls through to root (your current index.html)
  return next();
}