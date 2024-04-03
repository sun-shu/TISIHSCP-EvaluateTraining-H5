import {NavBar} from "antd-mobile";
import React from "react";

const CognitiveTrainingOverviewComponent = () => {

    return (<>
        <div className="w-full   bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] relative h-[80px]">
            <div
                className="w-auto h-[92px] right-[16px] left-[16px] px-[16px] py-[16px] bg-white rounded-xl shadow justify-between items-start inline-flex absolute">
                {[1, 2, 3, 4].map((item) => {
                    return (<div className="flex-col justify-start items-center gap-2 inline-flex">
                        <div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">累计时长</div>
                        <div className="justify-start items-end inline-flex">
                            <div
                                className="text-amber-400 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal">358
                            </div>
                            <div
                                className="text-gray-600 text-opacity-50 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">分
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </>)
}

const CognitiveTrainingListComponent = () => {
    return (<>

        <div className="mt-[28px]">

            <div className="w-[351px] h-[38px] px-[18px]  rounded-xl justify-between items-start inline-flex">
                <div
                    className="text-zinc-800 text-lg font-bold font-['Alibaba PuHuiTi 3.0'] leading-snug">本月训练数据
                </div>
                <div className="justify-start items-start gap-6 flex">
                    <div className="justify-start items-center gap-1 flex">
                        <div className="w-[20px] h-[12px] bg-[#D4D4D4] rounded-[4px]"></div>
                        <div
                            className="text-stone-500 text-sm font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">

                            上月
                        </div>
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                        <div className="w-[20px] h-[12px] bg-[#6FB349] rounded-[4px]"></div>
                        <div
                            className="text-stone-500 text-sm font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">本月
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-[8px] flex-col p-[16px]">
                {
                    [1, 2, 3, 4].map((item) => {
                        return (<CognitiveTrainingListItemComponent/>)
                    })
                }

            </div>

        </div>
    </>)
}

const CognitiveTrainingListItemComponent = () => {
    return (<>
        <div
            className="px-6 py-3 bg-white rounded-xl shadow justify-center items-center gap-7 inline-flex">
            <div className="self-stretch py-2 flex-col justify-between items-center inline-flex">
                <div
                    className="text-gray-600 text-base font-bold font-['Alibaba PuHuiTi 3.0'] border-b-[#D8B437] border-b-2 pb-[4px]">综合认知训练
                </div>
                <div className="self-stretch px-1 justify-between items-start inline-flex">
                    <div className="justify-start items-end flex">
                        <div
                            className="text-zinc-800 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal">4
                        </div>
                        <div
                            className="text-gray-600 text-opacity-50 text-xs font-normal font-['Alibaba PuHuiTi 3.0']">次
                        </div>
                    </div>
                    <div className="justify-start items-end flex">
                        <div
                            className="text-zinc-800 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal">60
                        </div>
                        <div
                            className="text-gray-600 text-opacity-50 text-xs font-normal font-['Alibaba PuHuiTi 3.0']">分
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">正确率</div>
                    <div className="w-[107px] h-1.5 bg-neutral-300"/>
                    <div className="w-[131px] h-1.5 bg-lime-500"/>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">思考时长
                    </div>
                    <div className="w-[120px] h-1.5 bg-neutral-300"/>
                    <div className="w-[120px] h-1.5 bg-lime-500"/>
                </div>
            </div>
        </div>
    </>)
}

const CognitiveTrainingReportPage = () => {

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

                <CognitiveTrainingListComponent/>
            </div>
        </div>
    </>)
}


export default CognitiveTrainingReportPage;