import { appWithTranslation } from "next-i18next";
import Layout from "../components/layout";
import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <Layout>
            {/* mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 */}
            <main className="">
                <Component {...pageProps} />
            </main>
        </Layout>
    )
};

export default appWithTranslation(App);