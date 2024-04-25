"use client";
import MyApp from "@/components/atoms/myapp";
import MainPage from "@/components/templates/main_page" ;
import ProfilePage from "@/components/templates/profile_page";
import ContactPage from "@/components/templates/contact_page";
import AboutPage from "@/components/templates/about_page";

export default function Home() {
  return <MyApp Component={MainPage} pageProps={undefined} />;
}

