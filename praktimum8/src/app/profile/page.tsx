"use client"

import MyApp from "@/components/atoms/myapp"
import ProfilePage from "@/components/templates/profile_page"

export default function Profile() {
    return <MyApp Component={ProfilePage} pageProps={undefined}/>
}
