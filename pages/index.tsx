import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Maintenance from "../components/maintenance/maintenance";

export default function Home() {
    return(
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
           <Maintenance /> 
        </main>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}