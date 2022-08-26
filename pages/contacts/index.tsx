import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="h-20 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                <h2 className="font-mono text-3xl pt-5 pl-10">| {t("CONTACTS")}</h2>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <div className="py-10 px-10">
                
                </div>
                <div className="py-10 px-10 bg-gray-200">
                    
                </div>
            </div>
        </div>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
