import React from 'react';
import {Nav} from "@/components/sidebar/nav";
import {Header} from "@/components/header/header";


const MainLayout = async ({children}: { children: React.ReactNode }) => {
    return (

        <main className="flex min-h-screen w-full flex-col" >
          <Nav />
          <Header />
          {children}
        </main>

    );
};

export default MainLayout;