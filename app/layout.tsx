import Footer from "./Footer";
import "./globals.css";
import Navigation from "@/app/navigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                    <Navigation />
                    {children}
                    <Footer />
            </body>
        </html>
    )
}