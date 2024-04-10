import { useRequest } from '@/.umi/exports';
import baseApi from '@/services/baseApi';

const useLoadPlanTaskData = (locationParams, currentDate) => {
	const { cognitiveDisordersH5DataShowApi } = baseApi;

	const { data = {}, loading, run } = useRequest(() => {
		return cognitiveDisordersH5DataShowApi.trainingPlanDayUsingGet({
			customerId: locationParams.customerId,
			date: currentDate,
		}, {
			headers: {
				'Content-Type': 'application/json',
				'X-Authorization': locationParams.userToken,
			},
		});
	}, {
		refreshDeps: [currentDate],
	});

	return {
		data,
		loading,
	};
};

export default useLoadPlanTaskData;