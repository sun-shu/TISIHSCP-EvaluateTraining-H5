import { NavBar } from 'antd-mobile';
import React, { useEffect } from 'react';
import { LeftOutline, RightOutline } from 'antd-mobile-icons';
import { history, useMatch } from 'umi';
import { useSearchParams } from '@@/exports';
import useLoadData from './hooks/useLoadData';
import ProgressBar from '@/components/ProgressBar';


const CognitiveTrainingOverviewComponent = ({ data }) => {
	const dataArr = [
		{
			title: '正确率',
			value: data.correctRateOfMath,
			unit: '%',
		},
		{
			title: '本月训练时长',
			value: data.durationSecondOfMath,
			unit: '分',
		},
		{
			title: '累计训练',
			value: data.totalCount,
			unit: '个',
		},
		{
			title: '累计时长',
			value: data.totalDurationSecond,
			unit: '分',
		},

	];

	return (<>
		<div className="w-full   bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] relative h-[80px]">
			<div
				className="w-auto h-[92px] right-[16px] left-[16px] px-[16px] py-[16px] bg-white rounded-xl shadow justify-between items-start inline-flex absolute">
				{dataArr.map((item, index) => {
					return (<div className="flex-col justify-start items-center gap-2 inline-flex" key={index}>
						<div
							className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0'] line-clamp-1">{item.title}</div>
						<div className="justify-start items-end inline-flex">
							<div
								className="text-amber-400 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal line-clamp-1">{item.value}
							</div>
							<div
								className="text-gray-600 text-opacity-50 text-sm font-normal font-['Alibaba PuHuiTi 3.0'] line-clamp-1">{item.unit}
							</div>
						</div>
					</div>);
				})}
			</div>
		</div>
	</>);
};

const CognitiveTrainingListComponent = ({ data }) => {
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
					data.list?.map((item, index) => {
						return (<CognitiveTrainingListItemComponent key={index} item={item} />);
					})
				}

			</div>

		</div>
	</>);
};

const CognitiveTrainingListItemComponent = ({ item }) => {
	const thinkTimeDataMaxValues = Math.max(item.thinkTimeData.currentMonth, item.trainingDurationData.lastMonth);
	const calculateRelativePercentage = (value: number) =>
		Math.round((value / thinkTimeDataMaxValues) * 100);

	return (<>
		<div
			className="px-6 py-3 bg-white rounded-xl shadow justify-center items-center gap-7 inline-flex">
			<div className="self-stretch py-2 flex-col justify-between items-center inline-flex">
				<div
					className="text-gray-600 text-base font-bold font-['Alibaba PuHuiTi 3.0'] border-b-[#D8B437] border-b-2 pb-[4px] line-clamp-1">{item.className}
				</div>
				<div className="self-stretch px-1 justify-between items-start inline-flex">
					<div className="justify-start items-end flex">
						<div
							className="text-zinc-800 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal line-clamp-1">{item.countOfMonth}
						</div>
						<div
							className="text-gray-600 text-opacity-50 text-xs font-normal font-['Alibaba PuHuiTi 3.0']">次
						</div>
					</div>
					<div className="justify-start items-end flex">
						<div
							className="text-zinc-800 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal line-clamp-1">{item.scoreOfMonth}
						</div>
						<div
							className="text-gray-600 text-opacity-50 text-xs font-normal font-['Alibaba PuHuiTi 3.0']">分
						</div>
					</div>
				</div>
			</div>
			<div className=" flex-col justify-start items-start gap-1 inline-flex">
				<div className="min-w-[120px] flex-col justify-start items-start gap-0.5 flex w-full">
					<div className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">正确率</div>
					<ProgressBar processRate={calculateRelativePercentage(item?.thinkTimeData?.currentMonth)}
											 barClassNames="bg-neutral-300" />
					<ProgressBar processRate={calculateRelativePercentage(item?.thinkTimeData?.p)} barClassNames="bg-lime-500" />
				</div>
				<div className="min-w-[120px] flex-col justify-start items-start gap-0.5 flex">
					<div className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">思考时长
					</div>
					<ProgressBar processRate={calculateRelativePercentage(item?.thinkTimeData?.currentMonth)}
											 barClassNames="bg-neutral-300" />
					<ProgressBar processRate={calculateRelativePercentage(item?.thinkTimeData?.currentMonth)}
											 barClassNames="bg-lime-500" />
				</div>
			</div>
		</div>
	</>);
};

const ReportPage = () => {
	const { params } = useMatch('/train/report/:customerId');
	const { customerId } = params;

	const [searchParams] = useSearchParams();

	const userToken = searchParams.get('userToken');

	useEffect(() => {
		if (userToken) {
			// 加载数据
		}
	}, []);

	const queryParams = new URLSearchParams({
		userToken,
	});
	const preLink = `/train/result/${customerId}?${queryParams}`;
	const nextLink = `/train/plan/${customerId}?${queryParams}`;

	const { data } = useLoadData({ customerId, userToken });


	return (<>
		<div className="h-screen">
			<NavBar backArrow={false}
							className=" bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] h-[50px]  w-full">
				<div
					className=" text-zinc-900 text-base font-semibold  leading-snug">认知训练报告
				</div>
			</NavBar>
			<div style={{
				height: 'calc(100vh - 80px)',
			}}
					 className="w-full   gap-4   overflow-y-scroll bg-white ">
				<CognitiveTrainingOverviewComponent data={data} />

				<CognitiveTrainingListComponent data={data} />
			</div>

			<div className="flex w-full justify-between px-[24px] bg-white h-[35px] align-middle ">
				<LeftOutline fontSize={24} color="#BFA671" onClick={() => {
					history.push(preLink);

				}} />

				<RightOutline color="#BFA671" fontSize={24} onClick={() => {
					history.push(nextLink);

				}} />
			</div>
		</div>
	</>);
};


export default ReportPage;