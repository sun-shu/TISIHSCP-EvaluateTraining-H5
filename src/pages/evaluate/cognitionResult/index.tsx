import {NavBar, Rate} from "antd-mobile";
import React from 'react';
import Canvas from '@antv/f-react';
import {Area, Axis, Chart, Line, Point} from '@antv/f2';

interface CognitionScoreResultProps {
    result: string;
    score: number;
}

const CognitionScoreResultComponent = ({result, score}) => {

    return (
        <>
            <div className=" px-2 justify-between items-start inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div
                        className=" text-zinc-800 text-lg font-medium font-['Alibaba PuHuiTi 3.0'] leading-snug">评测结果为：
                    </div>
                    <div
                        className="  text-orange-400 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-snug">轻度认知症
                    </div>
                </div>
                <div className="justify-start items-end gap-1 flex">
                    <div className="text-zinc-800 text-base font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">X
                    </div>
                    <div className="text-zinc-800 text-5xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-10">16</div>
                </div>
            </div>
            <div
                className=" px-3 py-2 bg-neutral-100 rounded-xl flex-col justify-start items-start gap-2 inline-flex">
                <div
                    className="text-zinc-800 text-base font-medium font-['Alibaba PuHuiTi 3.0'] leading-snug">参考分数区间
                </div>
                <div
                    className="text-stone-500 text-sm font-medium font-['Alibaba PuHuiTi 3.0'] leading-snug">轻度认知症：13~18分
                </div>
            </div>
        </>

    )
        ;
}

const CognitionChartResultComponent = () => {
    const data = [
        {
            item: '时间定向力',
            score: 70,
        },
        {
            item: 'opment',
            score: 60,
        },

        {
            item: 'Marketing',
            score: 50,
        },

        {
            item: 'Users',
            score: 40,
        },

        {
            item: 'Test',
            score: 60,
        },

        {
            item: 'Language',
            score: 70,
        },

        {
            item: 'Technology',
            score: 70,
        },

        {
            item: 'Support',
            score: 60,
        },
    ];

    return (<>
        <div className=" w-full">
            <Canvas pixelRatio={window.devicePixelRatio} className="flex-center  p-0" height={200}>
                <Chart
                    style={{
                        height: '400px',
                    }}
                    padding={0}
                    data={data}
                    coord="polar"
                    scale={{
                        score: {
                            min: 0,
                            max: 120,
                            nice: false,
                            tickCount: 4,
                        },
                    }}
                >
                    <Axis field="item" grid="line" style={{
                        label: {
                            fill: '#333333',
                            fontSize: 14,
                        },
                    }}/>
                    <Axis
                        field="score"
                        grid="line"
                        style={{
                            grid: {fill: '#BBBBBB', fillOpacity: 0.1},
                        }}
                        formatter={() => {
                        }}
                        animation={{
                            'in-out-sine': {
                                duration: 5000,
                            },
                        }}
                    />
                    <Line x="item" y="score" color="#D8B438"/>
                    <Point x="item" y="score" color="#D8B438"/>
                    <Area x="item" y="score" color="#D8B438"/>

                </Chart>
            </Canvas>
        </div>
    </>)
}


const CognitionStarResultItemComponent = ({title = '认知障碍', value = 5, count = 10}) => {
    return (<>
        <div className=" py-2 rounded-[32px] flex-col justify-start items-center gap-1 inline-flex">
            <div className="text-stone-500 text-sm font-medium font-['Alibaba PuHuiTi 3.0']">{title}</div>
            <div className="justify-center items-start gap-1 inline-flex">
                <Rate readOnly value={value} count={count} style={{
                    '--star-size': '10px',
                    '--active-color': '#D8B438',
                }}/>
            </div>
        </div>
    </>)
}
const CognitionStarResultComponent = () => {
    return (<>
        <div
            className="  p-3 rounded-xl shadow border border-[#D8B438] flex-col justify-start items-center gap-3 inline-flex">
            <div className="flex-center"><CognitionStarResultItemComponent title="定向力" count={10}/></div>
            <div className="w-full justify-around items-center inline-flex gap-[10px]">
                <CognitionStarResultItemComponent title="即刻记忆" count={3}/>
                <CognitionStarResultItemComponent title="注意力/计算力" count={5}/>
                <CognitionStarResultItemComponent title="回忆" count={3}/>
            </div>
            <div className="w-full justify-around items-center inline-flex gap-[10px]">
                <CognitionStarResultItemComponent title="命名" count={2}/>
                <CognitionStarResultItemComponent title="重复" count={1}/>
                <CognitionStarResultItemComponent title="阅读" count={1}/>
            </div>
            <div className="w-full justify-around items-center inline-flex gap-[10px]">
                <CognitionStarResultItemComponent title="三步指令" count={3}/>
                <CognitionStarResultItemComponent title="表达" count={1}/>
                <CognitionStarResultItemComponent title="绘画" count={1}/>
            </div>
        </div>
    </>)

}

const CognitionResultPage = () => {


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

                <CognitionScoreResultComponent result="轻度认知症" score={16}/>
                <CognitionChartResultComponent/>
                <CognitionStarResultComponent/>
            </div>
        </div>

    </>)
}

export default CognitionResultPage