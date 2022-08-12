import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Maintenance from "../components/maintenance/maintenance";

export default function Home() {
    return(
        <main>
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