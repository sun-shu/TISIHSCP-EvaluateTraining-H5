import {NavBar} from "antd-mobile";
import React from 'react';
import UpArrowIcon from "@/assets/icon/up-arrow.png";
import DownArrowIcon from "@/assets/icon/down-arrow.png";
import EqualArrowIcon from "@/assets/icon/equal.png";

const iconMap = {
    up: UpArrowIcon,
    down: DownArrowIcon,
    equal: EqualArrowIcon,
}

const textColorClassMap = {
    up: 'text-lime-500',
    down: 'text-zinc-400',
    equal: 'text-zinc-400',

}
const FamilyAffectionResultItemComponent = ({item}) => {
    const {itemName, itemResult, trend, trendDesc} = item
    return (<>
        <div
            className="w-full h-[105px] px-3 py-2 rounded-xl shadow border border-amber-400 flex-col justify-start items-start inline-flex">
            <div
                className="text-zinc-800 text-base font-bold font-['Alibaba PuHuiTi 3.0'] leading-snug">{itemName}</div>
            <div className="text-amber-400 text-[32px] font-bold font-['Alibaba PuHuiTi 3.0']">{itemResult}</div>
            <div className="justify-start items-center gap-1 inline-flex">
                <div

                    className={`${textColorClassMap[trend]} items-center text-base font-normal flex align-bottom gap-[8px]`}>
                    <img src={iconMap[trend]} alt="" width={15} height={10} className="h-[8px]"/>
                    {trendDesc}
                </div>
            </div>
        </div>
    </>)
}

const data = {
    createTime: '2021-09-01 12:00:00',
    dataList: [
        {
            "createTime": "2024-01-23",
            "itemName": "测试名称",
            "itemResult": "测试名称",
            "trend": "up",
            "trendDesc": "string"
        },
        {
            "createTime": "2024-01-23",
            "itemName": "测试名称",
            "itemResult": "测试名称",
            "trend": "down",
            "trendDesc": "string"
        },
        {
            "createTime": "2024-01-23",
            "itemName": "测试名称",
            "itemResult": "测试名称",
            "trend": "equal",
            "trendDesc": "string"
        },
    ]
}
const FamilyAffectionResultPage = () => {
    const {dataList, createTime} = data
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
            }}
                 className="w-full  p-[16px]   gap-4  bg-white overflow-y-scroll ">

                <div className="w-full text-right mb-[16px]">训练时间：{createTime}</div>
                <div className="w-full max-h-max grid grid-cols-2 justify-center gap-[24px] items-center">
                    {dataList.map((item) => {
                        return <FamilyAffectionResultItemComponent item={item}/>
                    })}
                </div>
            </div>
        </div>

    </>)
}

export default FamilyAffectionResultPage