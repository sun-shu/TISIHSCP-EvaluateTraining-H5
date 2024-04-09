import { useRequest } from '@/.umi/exports';
import baseApi from '@/services/baseApi';
import dayjs from 'dayjs';

const useLoadData = (locationParams) => {
	const { cognitiveDisordersH5DataShowApi } = baseApi;

	const { data = {}, loading, run } = useRequest(() => {
		return cognitiveDisordersH5DataShowApi.trainingReportUsingGet({
			customerId: locationParams.customerId,
			// 本月第一天
			startTime: dayjs().startOf('month').valueOf(),
			// 本月最后一天
			endTime: dayjs().endOf('month').valueOf(),
		}, {
			headers: {
				'Content-Type': 'application/json',
				'X-Authorization': locationParams.userToken,
			},
		});
	});

	return {
		data,
		loading,
	};
};

export default useLoadData;