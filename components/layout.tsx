import Navigation from "./navigation/navigation"

export default function Layout({ children }) {
    return (
        <div className="relative bg-white overflow-hidden h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <Navigation />
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}