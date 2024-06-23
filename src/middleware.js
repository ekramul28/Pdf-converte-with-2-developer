import { withAuth } from 'next-auth/middleware'


export default withAuth(
    function middleware(req) {
        console.log(req.nextUrl.pathname);
        console.log(req.nextUrl.token?.role);
    }
)

export const config = { matcher: ['/dashboard'] }