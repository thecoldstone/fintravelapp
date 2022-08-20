import { useTranslation } from "next-i18next";
import { RiToolsFill } from "react-icons/ri";
import { SocialIcon } from "react-social-icons";

export default function Maintenance() {
    const { t } = useTranslation("common");

    return (
        <div className="md:text-center lg:text-center flex flex-col">
            <div className="flex items-center">
                <RiToolsFill size="3em" />
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
                    <span>{t("UNDERCONSTRUCTION")}</span>
                </h1>
            </div>
            <div className="flex flex-col pt-10">
                <div className="flex flex-col items-center space-y-1">
                    <a href={`tel:+7 (812) 777 70 05`}>+7 (812) 777 70 05</a>
                    <a href={`tel:+7 (921) 764 76 56`}>+7 (921) 764 76 56</a>
                    <a href={`tel:+7 (911) 998 73 63`}>+7 (911) 998 73 63</a>
                </div>
                <div className="flex flex-col items-center mx-auto space-y-2 pt-5">
                    <div className="flex">
                        <SocialIcon url="https://t.me/fintravel" network="telegram" label="@fintravel" style={{ height: 25, width: 25 }} />
                        <p className="pl-2">@fintravel</p>
                    </div>
                    <div className="flex">
                        <SocialIcon url="https://vk.com/fin.travel" network="vk" label="@fintravel" style={{ height: 25, width: 25 }} />
                        <p className="pl-2">fin.travel</p>
                    </div>
                    <div className="flex">
                        <SocialIcon url="https://www.facebook.com/fin.travel" network="facebook" label="fin.travel" style={{ height: 25, width: 25 }}/>
                        <p className="pl-2">fin.travel</p>
                    </div>
                </div>
            </div>
        </div>
    )
};