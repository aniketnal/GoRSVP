import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // token exists only when session is created and user is signed in .
    // will be used to redirect non-singed in users to the home page
    const token = request.cookies.get('next-auth.session-token');
    // console.log(token)
    if (token) {
        return NextResponse.redirect(new URL ('/', request.url))}
//   return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
//with session you can't go here
export const config = {
  matcher: ['/signin/:path*'],
}