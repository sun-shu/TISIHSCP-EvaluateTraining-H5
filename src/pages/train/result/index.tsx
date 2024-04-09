import { NavBar } from 'antd-mobile';
import React, { useEffect } from 'react';
import UpArrowIcon from '@/assets/icon/up-arrow.png';
import DownArrowIcon from '@/assets/icon/down-arrow.png';
import EqualArrowIcon from '@/assets/icon/equal.png';
import { LeftOutline, RightOutline } from 'antd-mobile-icons';
import { history, useMatch } from 'umi';
import { useSearchParams } from '@@/exports';
import useLoadData from './hooks/useLoadData';


const iconMap = {
	up: UpArrowIcon,
	down: DownArrowIcon,
	equal: EqualArrowIcon,
};

const textColorClassMap = {
	up: 'text-lime-500',
	down: 'text-zinc-400',
	equal: 'text-zinc-400',

};
const FamilyAffectionResultItemComponent = ({ item }) => {
	const { itemName, itemResult, trend, trendDesc } = item;
	return (<>
		<div
			className="w-full min-h-[105px] px-3 py-2 rounded-xl shadow border border-amber-400 flex-col justify-start items-start inline-flex">
			<div
				className="text-zinc-800 text-base font-bold font-['Alibaba PuHuiTi 3.0'] leading-snug line-clamp-2">{itemName}</div>
			<div className="text-amber-400 text-[32px] font-bold font-['Alibaba PuHuiTi 3.0'] line-clamp-2">{itemResult}</div>
			<div className="justify-start items-center gap-1 inline-flex">
				<div

					className={`${textColorClassMap[trend]} items-center text-base font-normal flex align-bottom gap-[8px] line-clamp-2`}>
					<img src={iconMap[trend]} alt="" width={15} height={10} className="h-[8px] line-clamp-2" />
					{trendDesc}
				</div>
			</div>
		</div>
	</>);
};

const data = {
	createTime: '2021-09-01 12:00:00',
	dataList: [
		{
			'createTime': '2024-01-23',
			'itemName': '测试名称',
			'itemResult': '测试名称',
			'trend': 'up',
			'trendDesc': 'string',
		},
		{
			'createTime': '2024-01-23',
			'itemName': '测试名称',
			'itemResult': '测试名称',
			'trend': 'down',
			'trendDesc': 'string',
		},
		{
			'createTime': '2024-01-23',
			'itemName': '测试名称',
			'itemResult': '测试名称',
			'trend': 'equal',
			'trendDesc': 'string',
		},
	],
};
const ResultPage = () => {
	const { params } = useMatch('/train/result/:customerId');
	const { customerId } = params;

	const [searchParams] = useSearchParams();

	const userToken = searchParams.get('userToken');

	useEffect(() => {
		if (userToken) {
			// 加载数据
		}
	}, []);


	const { data } = useLoadData({ customerId, userToken });

	const { dataList = [], createTime } = data;

	const queryParams = new URLSearchParams({
		userToken,
	});
	const preLink = `/evaluate/result/${customerId}?${queryParams}`;
	const nextLink = `/train/report/${customerId}?${queryParams}`;
	return (<>
		<div className="h-screen">
			<NavBar backArrow={false}
							className="bg-white bg-gradient-to-r from-[#E1CB9C] to-[#BFA671] h-[50px]  w-full">
				<div
					className=" text-zinc-900 text-base font-semibold  leading-snug">亲情训练认知
				</div>
			</NavBar>
			<div style={{
				height: 'calc(100vh - 80px)',
			}}
					 className="w-full  p-[16px]   gap-4  bg-white overflow-y-scroll ">

				<div className="w-full text-right mb-[16px]">训练时间：{createTime}</div>
				<div className="w-full max-h-max grid grid-cols-2 justify-center gap-[24px] items-center">
					{dataList.map((item, index) => {
						return <div key={index}>
							<FamilyAffectionResultItemComponent item={item} />
						</div>;
					})}
				</div>
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

export default ResultPage;