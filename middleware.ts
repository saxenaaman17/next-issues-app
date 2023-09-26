// import { NextRequest, NextResponse } from "next/server";
export { default } from 'next-auth/middleware';
// import middleware from "next-auth/middleware";

// export default middleware;

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  // *: 0 or more param
  // +: 1 or more param
  // ?: 0 or 1 param
  matcher: ["/users/:id*"],
};
