import { useRequest } from '@/.umi/exports';
import baseApi from '@/services/baseApi';

const useLoadEvaluate = (locationParams) => {
	const { cognitiveDisordersH5DataShowApi } = baseApi;

	const { data = {}, loading, run } = useRequest(() => {
		return cognitiveDisordersH5DataShowApi.showMmseResultUsingGet({
			customerId: locationParams.customerId,
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

export default useLoadEvaluate;