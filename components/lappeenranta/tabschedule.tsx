import tabs from "./const";
import { saturday, tuesdayThursday } from "./schedule";
import { Tab } from "@headlessui/react";
import { useTranslation } from "next-i18next";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TabSchedule() {
    const { t } = useTranslation();

    return (
        <div className="max-w-8xl px-2 py-16 sm:px-3 md:px-5">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.text}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }>
                            {t(tab.text)}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        {
                            tuesdayThursday.map((item) => (
                                <div key={item.time}>
                                    <div className="pl-5 pt-4 flex items-center">
                                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                        <p className="pl-2 subpixel-antialiased text-base font-mono">{item.time}</p>
                                        <p className="pl-4">{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Tab.Panel>
                    <Tab.Panel>
                        {
                            saturday.map((item) => (
                                <div key={item.time}>
                                    <div className="pl-5 pt-4 flex items-center">
                                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                        <p className="pl-2 subpixel-antialiased text-base font-mono">{item.time}</p>
                                        <p className="pl-4">{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}