export default function MainContent() {
    return (
        <div className="md:container md:mx-auto mx-10">
            <div className="grid lg:grid-cols-8 md:grid-cols-1 xs:grid-cols-1 lg:gap-10 md:gap-2 xs:gap-y-5 pt-10">
                <div className="col-span-2 xs:col-span-3 space-y-5">
                    <div>
                        <p>Ездим в Лаппеенранту по пятницам и воскресеньям к рейсу Ryanair.</p>
                    </div>
                    <div>
                        <p>В Лаппеенранте остановки в любом удобном месте по маршруту (вокзал, центр, Призма). В Лапу сейчас можно ехать только по работе, учёбе, к родителям/детям, с двойным гражданством, транзит, медицина.</p>
                    </div>
                    <div className="flex col-span-3">
                        <iframe className="w-full aspect-video" src="https://youtube.com/embed/foVO55qsXOc" allowFullScreen={true} />
                    </div>
                </div>
                <div className="col-spab-2"></div>
                <div className="col-span-3">
                    <div className="flex flex-col space-y-2">
                        <p className="text-2xl">Расписание</p>
                        <div>
                            <p className="font-medium p-2 bg-zinc-800 rounded text-white">Понедельник</p>
                            <div className="flex-col space-y-2 mt-2">
                                <p><span className="font-medium">06:15</span> - выезд из Питера</p>
                                <p><span className="font-medium">11:20</span> - выезд обратно *</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-medium p-2 bg-zinc-800 rounded text-white">Четверг</p>
                            <div className="flex-col space-y-2 mt-2">
                                <p><span className="font-medium">06:15</span> - выезд из Питера</p>
                                <p><span className="font-medium">11:00</span> - выезд обратно *</p>
                            </div>
                        </div>
                        <div>
                            <p>* - <span className="italic">(по прибытию самолета местного времени)</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};