import { useTranslation } from "next-i18next";
import { RiToolsFill } from "react-icons/ri";

export default function Maintenance() {
    const { t } = useTranslation("common");
    
    return(
        <div className="md:text-center lg:text-center flex items-center">
                <RiToolsFill size="4em" />
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                    <span>{t("UNDERCONSTRUCTION")}</span>
                </h1>
        </div>
    )
};