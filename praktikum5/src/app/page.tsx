import About from "./about/page";
import Profile from "./profile/page";
import Blog from "./blogs/page";
import ProductDetails from "./products/page";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* <h1>Welcome to Home</h1>
            <About />
            <Profile />
            <Blog />
            <ProductDetails /> */}
            <h1>Welcome to Home</h1>
            <Link href='/profile'>Profile</Link><br />
            <Link href='/about'>About</Link><br />
            <Link href='/blogs'>Blogs</Link><br />
            <Link href='/products'>Products</Link>
        </>
    );
}