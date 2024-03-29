import {NavBar} from "antd-mobile";
import React from 'react';

const FamilyAffectionResultItemComponent = () => {
    return (<>
        <div
            className="w-[157.50px] h-[105px] px-3 py-2 rounded-xl shadow border border-amber-400 flex-col justify-start items-start inline-flex">
            <div className="text-zinc-800 text-base font-bold font-['Alibaba PuHuiTi 3.0'] leading-snug">训练时长</div>
            <div className="text-amber-400 text-[32px] font-bold font-['Alibaba PuHuiTi 3.0']">02:07</div>
            <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-lime-500 text-base font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">1分10秒
                </div>
            </div>
        </div>
    </>)
}

const FamilyAffectionResultPage = () => {
    return (<>
        <div className="h-screen">
            <NavBar backArrow={false}
                    className="bg-white bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] h-[50px]  w-full">
                <div
                    className=" text-zinc-900 text-base font-semibold  leading-snug">认知评估结果
                </div>
            </NavBar>
            <div style={{
                height: 'calc(100vh - 50px)',
            }} className="w-full  p-[16px] flex-col justify-start  gap-4 inline-flex bg-white overflow-y-scroll">

                <FamilyAffectionResultItemComponent></FamilyAffectionResultItemComponent>

            </div>
        </div>

    </>)
}

export default FamilyAffectionResultPage