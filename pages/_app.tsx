import { appWithTranslation } from "next-i18next";
import Layout from "../components/layout";
import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
};

export default appWithTranslation(App);