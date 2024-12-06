import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const isAuth = req.cookies.get("user");
  const url = req.url;
  

  if ((!isAuth) && (url.includes("/dashboard"))) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  const requestHeaders = new Headers(req.headers)

  
  requestHeaders.set('user', 'true')

  if (
    isAuth &&
    (url.includes("/auth/signin") ||
    url.includes("/auth/signup")) 
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
}


