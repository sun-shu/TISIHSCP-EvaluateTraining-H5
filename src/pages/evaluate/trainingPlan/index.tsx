import {Badge, Button, Calendar, CalendarPickerRef, NavBar, Popup} from "antd-mobile";
import React, {useRef, useState} from "react";
import ChangDateIcon from "@/assets/icon/change-date.png";
import dayjs from "dayjs";

const CognitiveTrainingOverviewComponent = () => {

    return (<>
        <div className="w-full   bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] relative h-[80px] ">
            <div
                className="w-auto  right-[16px] left-[16px] px-[16px] py-[16px] bg-white rounded-xl shadow justify-between inline-flex absolute">
                <div className="flex-col justify-around items-center gap-2 inline-flex">
                    <div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">开始日期</div>
                    <div className="justify-start items-end inline-flex">

                        <div
                            className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">2021-09-01
                        </div>
                    </div>
                </div>

                <div className="flex-col  items-center gap-2 inline-flex justify-around">
                    <div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">结束日期</div>
                    <div className="justify-start items-end inline-flex">

                        <div
                            className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">2021-09-01
                        </div>
                    </div>
                </div>

                <div className="flex-col justify-around items-center gap-2 inline-flex">
                    <div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">整体完成度</div>
                    <div className="justify-start items-baseline gap-[2px] inline-flex">
                        <div
                            className="text-amber-400 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal">80
                        </div>
                        <div
                            className="text-gray-600  text-sm font-normal font-['Alibaba PuHuiTi 3.0']">%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const DatePickerComponent = ({dateRange, currentDate, setCurrentDate}) => {

    const [val, setVal] = useState<Date | null>(currentDate)
    const [visible1, setVisible1] = useState(false)

    const ref1 = useRef<CalendarPickerRef>(null)

    return (<>
        <div
            className="w-full mt-[40px] h-[52px] px-6 py-3 bg-white shadow flex-col justify-start items-end gap-4 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div
                    className="text-gray-600 text-xl font-bold font-['Alibaba PuHuiTi 3.0']">{dayjs(currentDate).format('YYYY-MM-DD')}
                </div>
                <div className="w-6 h-6 relative" onClick={() => {
                    setVisible1(true)
                    setVal(currentDate)

                    ref1.current?.jumpTo({year: dayjs(currentDate).year(), month: dayjs(currentDate).month() + 1})
                }}>
                    <img src={ChangDateIcon} alt="" className="w-full h-full"/>
                </div>
            </div>

            <Popup
                visible={visible1}
                closeOnMaskClick
                onClose={() => {
                    setVisible1(false)
                }}
                bodyStyle={{height: '420px'}}
            >
                <div style={{padding: '12px', height: '360px'}}>
                    <Calendar
                        value={val}
                        ref={ref1}
                        onChange={(val) => {
                            setVal(val)
                        }}
                        selectionMode='single'
                        defaultValue={currentDate}
                        shouldDisableDate={(date) => {
                            const dates = [16, 17, 18, 19]
                            const d = dayjs(date).date()
                            return !dates.includes(d)
                        }}
                        renderLabel={date => {
                            const dates = [16, 17, 18, 19]
                            const d = dayjs(date).date()
                            if (dates.includes(d)) {
                                return (
                                    <Badge color='#87d068' content={Badge.dot}/>
                                )
                            }
                        }}
                    />
                </div>

                <div className="relative bg-white pr-[24px] text-right" onClick={() => {
                    setVisible1(false)
                    setCurrentDate(val)

                }}>
                    <Button color="primary">确认</Button>
                </div>
            </Popup>


        </div>
    </>)
}


const TrainingPlanPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date('2023-06-16'))

    const hasDataDate = ['2023-06-16', '2023-06-17', '2023-06-18', '2023-06-19']
    // 判断今天是否在可选日期列表内，如果不在，那么展示距离最近的下一个可选日期，如果没有下一个可选日期，那么展示空页面1
    // 判断今天是否已经大于可选日期列表，如果大于，那么展示空页面2
    const today = new Date()
    const dates = [16, 17, 18, 19]
    const todayDate = dayjs(today).date()
    if (!dates.includes(todayDate)) {
        const nextDate = dates.find((d) => d > todayDate)
        if (nextDate) {
            today.setDate(nextDate)
        } else {
            // 展示空页面1
        }
    }
    console.log(today)
    if (today > new Date('2023-06-19')) {
        // 展示空页面2
    }
    return (<>
        <div className="h-screen">
            <NavBar backArrow={false}
                    className=" bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] h-[50px]  w-full">
                <div
                    className=" text-zinc-900 text-base font-semibold  leading-snug">认知评估结果
                </div>
            </NavBar>
            <div style={{
                height: 'calc(100vh - 50px)',
            }}
                 className="w-full   gap-4   overflow-y-scroll bg-white ">
                <CognitiveTrainingOverviewComponent/>
                <DatePickerComponent currentDate={currentDate} setCurrentDate={setCurrentDate}
                                     dateRange={[new Date('2020-06-16'), new Date('2026-06-16')]}/>

            </div>
        </div>
    </>)
}

export default TrainingPlanPage;