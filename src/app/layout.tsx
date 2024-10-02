import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBarComponent from "@/components/layout/topBar";
import { SideBarComponent } from "@/components/layout/sideBar";
import RightSideBarComponent from "@/components/layout/rightSideBar";
import { WindowDimenstionContextProvider } from "@/lib/contexts/windowDimensionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dev Utils",
    description: "A collection of utilities for developers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <WindowDimenstionContextProvider>
                    <TopBarComponent />
                    <div className="flex w-full">
                        <SideBarComponent />
                        <div className="max-w-[100%] md:max-w-[70%] w-full h-[80vh] sm:h-[90vh] border border-gray-800">
                            {children}
                        </div>
                        <RightSideBarComponent />
                    </div>
                </WindowDimenstionContextProvider>
            </body>
        </html>
    );
}
