import { Badge, Button, Calendar, CalendarPickerRef, NavBar, Popup } from 'antd-mobile';
import React, { useEffect, useRef, useState } from 'react';
import ChangDateIcon from '@/assets/icon/change-date.png';
import dayjs from 'dayjs';
import { LeftOutline, RightOutline } from 'antd-mobile-icons';
import { history, useMatch } from 'umi';
import { useSearchParams } from '@@/exports';
import useLoadData from './hooks/useLoadData';

const CognitiveTrainingOverviewComponent = ({ data }) => {

	return (<>
		<div className="w-full   bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] relative h-[80px] ">
			<div
				className="w-auto  right-[16px] left-[16px] px-[16px] py-[16px] bg-white rounded-xl shadow justify-between inline-flex absolute">
				<div className="flex-col justify-around items-center gap-2 inline-flex">
					<div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">开始日期</div>
					<div className="justify-start items-end inline-flex">

						<div
							className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">{data.startDate}
						</div>
					</div>
				</div>

				<div className="flex-col  items-center gap-2 inline-flex justify-around">
					<div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">结束日期</div>
					<div className="justify-start items-end inline-flex">

						<div
							className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">{data.endDate}
						</div>
					</div>
				</div>

				<div className="flex-col justify-around items-center gap-2 inline-flex">
					<div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">整体完成度</div>
					<div className="justify-start items-baseline gap-[2px] inline-flex">
						<div
							className="text-amber-400 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal">{data.finishCount}
						</div>
						<div
							className="text-gray-600  text-sm font-normal font-['Alibaba PuHuiTi 3.0']">%
						</div>
					</div>
				</div>
			</div>
		</div>
	</>);
};

const DatePickerComponent = ({ dateRange, currentDate, setCurrentDate }) => {

	const [val, setVal] = useState<Date | null>(currentDate);
	const [visible1, setVisible1] = useState(false);

	const ref1 = useRef<CalendarPickerRef>(null);

	return (<>
		<div
			className="w-full mt-[40px] h-[52px] px-6 py-3 bg-white shadow flex-col justify-start items-end gap-4 inline-flex">
			<div className="self-stretch justify-between items-center inline-flex">
				<div
					className="text-gray-600 text-xl font-bold font-['Alibaba PuHuiTi 3.0']">{dayjs(currentDate).format('YYYY-MM-DD')}
				</div>
				<div className="w-6 h-6 relative" onClick={() => {
					setVisible1(true);
					setVal(currentDate);

					ref1.current?.jumpTo({ year: dayjs(currentDate).year(), month: dayjs(currentDate).month() + 1 });
				}}>
					<img src={ChangDateIcon} alt="" className="w-full h-full" />
				</div>
			</div>

			<Popup
				visible={visible1}
				closeOnMaskClick
				onClose={() => {
					setVisible1(false);
				}}
				bodyStyle={{ height: '420px' }}
			>
				<div style={{ padding: '12px', height: '360px' }}>
					<Calendar
						value={val}
						ref={ref1}
						onChange={(val) => {
							setVal(val);
						}}
						selectionMode="single"
						defaultValue={currentDate}
						shouldDisableDate={(date) => {
							const dates = [16, 17, 18, 19];
							const d = dayjs(date).date();
							return !dates.includes(d);
						}}
						renderLabel={date => {
							const dates = [16, 17, 18, 19];
							const d = dayjs(date).date();
							if (dates.includes(d)) {
								return (
									<Badge color="#87d068" content={Badge.dot} />
								);
							}
						}}
					/>
				</div>

				<div className="relative bg-white pr-[24px] text-right" onClick={() => {
					setVisible1(false);
					setCurrentDate(val);
				}}>
					<Button color="primary">确认</Button>
				</div>
			</Popup>


		</div>
	</>);
};

const TrainingPlanItemListComponent = () => {

	const amList = [
		{
			title: '怀旧认知训练',
		},
		{
			title: '怀旧认知训练',
		},
		{
			title: '怀旧认知训练',
		},
	];

	const pmList = [
		{
			title: '怀旧认知训练',
		},
		{
			title: '怀旧认知训练',
		},
		{
			title: '怀旧认知训练',
		},
	];

	return (<>
		<div className="w-full">
			<div
				className=" mx-3 justify-start items-center gap-2 inline-flex  py-[24px] border-b-[#F5ECCD] border-b-2">
				<div className="text-zinc-800 text-base font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">上午
				</div>
				<div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
					{amList.map((item, index) => {
						return (
							<div
								className="w-[311px] h-[38px] px-3 py-2 bg-amber-400 bg-opacity-5 border-l-2 border-[#D8B438] justify-start items-start gap-6 inline-flex">
								<div className="text-gray-600 text-base font-bold font-['Alibaba PuHuiTi 3.0']">综合认知训练
								</div>
								<div className="text-gray-600 text-base font-normal font-['Alibaba PuHuiTi 3.0']">7/12
								</div>
							</div>
						);
					})}
				</div>
			</div>


			<div className=" px-3 justify-start items-center gap-2 inline-flex  py-[24px]">
				<div className="text-zinc-800 text-base font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">下午
				</div>
				<div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
					{pmList.map((item, index) => {
						return (
							<div
								className="w-[311px] h-[38px] px-3 py-2 bg-amber-400 bg-opacity-5 border-l-2 border-[#D8B438] justify-start items-start gap-6 inline-flex">
								<div className="text-gray-600 text-base font-bold font-['Alibaba PuHuiTi 3.0']">综合认知训练
								</div>
								<div className="text-gray-600 text-base font-normal font-['Alibaba PuHuiTi 3.0']">7/12
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>


	</>);
};


const NotInPlanComponent = () => {

	return (<>
		<div className="w-[311px] h-[216px] flex-col justify-start items-center gap-8 inline-flex">
			<div className="w-[120px] h-[120px] relative" />
			<div
				className="w-[311px] text-gray-600 text-xl font-medium font-['Alibaba PuHuiTi 3.0'] leading-loose">长者当前训练计划已完成，请再次进行评估。
			</div>
		</div>
	</>);
};

const NotHasTaskComponent = () => {

	return (<>
		<div
			className="w-[311px] text-gray-600 text-lg font-medium font-['Alibaba PuHuiTi 3.0'] leading-loose">根据训练计划的安排，今天开始已经没有更多训练任务了，可以给长者做自由训练喔~
		</div>
	</>);
};

const PlanPage = () => {
	const { params } = useMatch('/train/plan/:customerId');
	const { customerId } = params;

	const [searchParams] = useSearchParams();

	const userToken = searchParams.get('userToken');

	useEffect(() => {
		if (userToken) {
			// 加载数据
		}
	}, []);


	const { data } = useLoadData({ customerId, userToken });

	const [currentDate, setCurrentDate] = useState(new Date('2023-06-16'));

	const hasDataDate = ['2023-06-16', '2023-06-17', '2023-06-18', '2023-06-19'];
	// 判断今天是否在可选日期列表内，如果不在，那么展示距离最近的下一个可选日期，如果没有下一个可选日期，那么展示空页面1
	// 判断今天是否已经大于可选日期列表，如果大于，那么展示空页面2
	const today = new Date();
	const dates = [16, 17, 18, 19];
	const todayDate = dayjs(today).date();
	if (!dates.includes(todayDate)) {
		const nextDate = dates.find((d) => d > todayDate);
		if (nextDate) {
			today.setDate(nextDate);
		} else {
			// 展示空页面1
		}
	}
	console.log(today);
	if (today > new Date('2023-06-19')) {
		// 展示空页面2
	}

	const queryParams = new URLSearchParams({
		userToken,
	});
	const preLink = `/train/report/${customerId}?${queryParams}`;
	const nextLink = `/evaluate/result/${customerId}?${queryParams}`;

	return (<>
		<div className="h-screen">
			<NavBar backArrow={false}
							className=" bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] h-[50px]  w-full">
				<div
					className=" text-zinc-900 text-base font-semibold  leading-snug">训练计划
				</div>
			</NavBar>
			<div style={{
				height: 'calc(100vh - 80px)',
			}}
					 className="w-full   gap-4   overflow-y-scroll bg-white ">
				<CognitiveTrainingOverviewComponent data={data} />
				<DatePickerComponent currentDate={currentDate} setCurrentDate={setCurrentDate}
														 dateRange={[new Date('2020-06-16'), new Date('2026-06-16')]} />

				<TrainingPlanItemListComponent />


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

export default PlanPage;