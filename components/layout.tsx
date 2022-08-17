import Navigation from "./navigation/navigation"

export default function Layout({ children }) {
    return (
        <div className="relative bg-white">
            <div className="mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w lg:w-full lg:pb-28 xl:pb-32 xl:max-w">
                    <Navigation />
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}