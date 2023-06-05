import { authMiddleware } from "@clerk/nextjs";

//define which routes are public/private using clerk middleware
export default authMiddleware({
  publicRoutes: ["/", "/sign-in"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trc)(.*)"],
};
