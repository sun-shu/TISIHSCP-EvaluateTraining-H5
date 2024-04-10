import { Badge, Button, Calendar, CalendarPickerRef, NavBar, Popup } from 'antd-mobile';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChangDateIcon from '@/assets/icon/change-date.png';
import dayjs from 'dayjs';
import { LeftOutline, RightOutline } from 'antd-mobile-icons';
import { history, useMatch } from 'umi';
import { useSearchParams } from '@@/exports';
import useLoadPlanInfoData from './hooks/useLoadPlanInfoData';
import useLoadPlanTaskData from './hooks/useLoadPlanTaskData';
import EmptyDataImg from '@/assets/empty-data.png';

const CognitiveTrainingOverviewComponent = ({ data }) => {
	console.log('data', data);

	return (<>
		<div className="w-full   bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] relative h-[80px] ">
			<div
				className="w-auto  right-[16px] left-[16px] px-[16px] py-[16px] bg-white rounded-xl shadow justify-between inline-flex absolute">
				<div className="flex-col justify-around items-center gap-2 inline-flex">
					<div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">开始日期</div>
					<div className="justify-start items-end inline-flex">

						<div
							className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">{dayjs(data.startDate)?.format('YYYY-MM-DD')}
						</div>
					</div>
				</div>

				<div className="flex-col  items-center gap-2 inline-flex justify-around">
					<div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">结束日期</div>
					<div className="justify-start items-end inline-flex">

						<div
							className="text-gray-600 text-sm font-normal font-['Alibaba PuHuiTi 3.0']">{dayjs(data.endDate)?.format('YYYY-MM-DD')}
						</div>
					</div>
				</div>

				<div className="flex-col justify-around items-center gap-2 inline-flex">
					<div className="text-gray-600 text-sm font-bold font-['Alibaba PuHuiTi 3.0']">整体完成度</div>
					<div className="justify-start items-baseline gap-[2px] inline-flex">
						<div
							className="text-amber-400 text-2xl font-bold font-['Alibaba PuHuiTi 3.0'] leading-normal">
							{Math.round(data.finishCount / data.totalCount * 100)}
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

const DatePickerComponent = ({ hasDataDateList, currentDate, setCurrentDate }) => {

	const [val, setVal] = useState<Date | null>(currentDate);
	const [visible1, setVisible1] = useState(false);

	const ref1 = useRef<CalendarPickerRef>(null);

	return (<>
		<div
			className="w-full mt-[40px] h-[52px] px-6 py-3 bg-white shadow flex-col justify-start items-end gap-4 inline-flex">
			<div className="self-stretch justify-between items-center inline-flex">
				<div
					className="text-gray-600 text-xl font-bold font-['Alibaba PuHuiTi 3.0']">{currentDate && dayjs(currentDate).format('YYYY-MM-DD')}
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
							//hasDataDateList是一个时间戳集合，如果包含date这个日期(完整日期)，那么就是可选的，否则不可选
							const dates = hasDataDateList.map((item) => dayjs(item).format('YYYY-MM-DD'));
							const d = dayjs(date).format('YYYY-MM-DD');
							console.log('dates', dates, d);
							return !dates.includes(d);
						}}
						renderLabel={date => {
							//hasDataDateList是一个时间戳集合，如果包含date这个日期，那么返回一个Badge，否则返回null

							const dates = hasDataDateList.map((item) => dayjs(item).format('YYYY-MM-DD'));
							const d = dayjs(date).format('YYYY-MM-DD');
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
					console.log('val', dayjs(val).format('YYYY-MM-DD HH:mm:ss'));
					setCurrentDate(val);
				}}>
					<Button color="primary">确认</Button>
				</div>
			</Popup>


		</div>
	</>);
};

const TrainingPlanItemListComponent = ({ data = {} }) => {
	console.log('TrainingPlanItemListComponent data', data);
	const { amDataList = [], pmDataList = [] } = data;

	return (<>
		<div className="w-full">
			{
				amDataList.length > 0 && <div
					className=" mx-3 justify-start items-center gap-2 inline-flex  py-[24px] border-b-[#F5ECCD] border-b-2">
					<div className="text-zinc-800 text-base font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">上午
					</div>
					<div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
						{amDataList.map((item, index) => {
							return (
								<div
									className="w-[311px] h-[38px] px-3 py-2 bg-amber-400 bg-opacity-5 border-l-2 border-[#D8B438] justify-start items-start gap-6 inline-flex">
									<div className="text-gray-600 text-base font-bold font-['Alibaba PuHuiTi 3.0']">{item.className}
									</div>
									<div className="text-gray-600 text-base font-normal font-['Alibaba PuHuiTi 3.0']">
									</div>
								</div>
							);
						})}
					</div>
				</div>
			}


			{pmDataList.length > 0 && <div className=" px-3 justify-start items-center gap-2 inline-flex  py-[24px]">
				<div className="text-zinc-800 text-base font-normal font-['Alibaba PuHuiTi 3.0'] leading-snug">下午
				</div>
				<div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
					{pmDataList.map((item, index) => {
						return (
							<div
								className="w-[311px] h-[38px] px-3 py-2 bg-amber-400 bg-opacity-5 border-l-2 border-[#D8B438] justify-start items-start gap-6 inline-flex">
								<div className="text-gray-600 text-base font-bold font-['Alibaba PuHuiTi 3.0']">{item.className}
								</div>
								<div className="text-gray-600 text-base font-normal font-['Alibaba PuHuiTi 3.0']">
								</div>
							</div>
						);
					})}
				</div>
			</div>}
		</div>


	</>);
};


const NotInPlanComponent = () => {

	return (<>
		<div className="w-full h-full flex-center flex-col gap-8 inline-flex p-5">
			<img src={EmptyDataImg} width={120} height={120} />
			<div
				className="w-full text-gray-600 text-xl font-medium font-['Alibaba PuHuiTi 3.0'] leading-loose">长者当前训练计划已完成，请再次进行评估。
			</div>
		</div>
	</>);
};

const NotHasTaskComponent = () => {

	return (<>
		<div
			className="w-full p-5 text-gray-600 text-lg font-medium font-['Alibaba PuHuiTi 3.0'] leading-loose">根据训练计划的安排，今天开始已经没有更多训练任务了，可以给长者做自由训练喔~
		</div>
	</>);
};

const PlanPage = () => {
	const { params } = useMatch('/train/plan/:customerId');
	const { customerId } = params;

	const [searchParams] = useSearchParams();
	const userToken = searchParams.get('userToken');

	const locationParams = { customerId, userToken };

	const [currentDate, setCurrentDate] = useState();

	const { data: planData } = useLoadPlanInfoData(locationParams);
	const { data: taskData } = useLoadPlanTaskData(locationParams, currentDate);

	console.log('taskData', taskData);
	const isInPlan = useMemo(() => {
		const today = dayjs().valueOf();
		const startDate = planData?.startDate;
		const endDate = planData?.endDate;

		console.log('21', today, startDate, endDate, !!(today > startDate && today < endDate));
		return !!(today > startDate && today < endDate);
	}, [planData]);

	const currentDateInit = useMemo(() => {
		// 判断是否有今天或者未来的任务
		const today = dayjs().format('YYYY-MM-DD');
		const hasDataDateList = planData?.hasDataDateList;
		const hasToday = hasDataDateList?.includes(today);
		const hasFuture = hasDataDateList?.find((item) => dayjs(item).isAfter(dayjs()));
		return hasToday || hasFuture;
	}, [planData]);

	useEffect(() => {
		//根据planData?.hasDataDateList时间戳列表中今天或者距离今天最近的未来时间来设置currentDate 时间戳即可
		isInPlan && currentDateInit && setCurrentDate(currentDateInit);
	}, [isInPlan, currentDateInit]);


	const queryParams = new URLSearchParams({
		userToken,
	});
	const preLink = `/train/report/${customerId}?${queryParams}`;
	const nextLink = `/evaluate/result/${customerId}?${queryParams}`;

	const changeCurrentDate = (date) => {
		// 根据planData?.hasDataDateList时间戳列表设置时间
		const hasDataDateList = planData?.hasDataDateList;
		const targetDate = hasDataDateList.find((item) => dayjs(item).isSame(date, 'day'));
		setCurrentDate(targetDate);
	};
	const ChildrenComponent = () => {
		if (!isInPlan) {
			return <NotInPlanComponent />;
		}

		return (<>
			<CognitiveTrainingOverviewComponent data={planData} />
			<DatePickerComponent currentDate={currentDate} setCurrentDate={changeCurrentDate}
													 hasDataDateList={planData?.hasDataDateList} />
			{
				isInPlan && !currentDate ? <NotHasTaskComponent /> : <TrainingPlanItemListComponent data={taskData} />
			}

		</>);

	};
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
				<ChildrenComponent />
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