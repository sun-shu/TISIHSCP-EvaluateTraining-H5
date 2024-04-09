// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 认知症专区概览-长者&床位相关 GET /amzSceneData/getCustomerOverview */
export async function getCustomerOverviewUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getCustomerOverviewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouCustomerCountStatisticsDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getCustomerOverview`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取AIoT设备数据 GET /amzSceneData/getDeviceList */
export async function getDeviceListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getDeviceListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouTisiDeviceResCountDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getDeviceList`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 评估结果对比数据详情 GET /amzSceneData/getEvaluateCompare */
export async function getEvaluateCompareUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getEvaluateCompareUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListEvaluationTrainingCompareDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getEvaluateCompare`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 评估数据&评估结果趋势 GET /amzSceneData/getEvaluateTrends */
export async function getEvaluateTrendsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getEvaluateTrendsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouEvaluateTrendsResDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getEvaluateTrends`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 毫米波数据统计 GET /amzSceneData/getRadarAlarm */
export async function getRadarAlarmUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getRadarAlarmUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouRadarAlarmDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getRadarAlarm`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 本月风险区域 GET /amzSceneData/getRegionCustomer */
export async function getRegionCustomerUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getRegionCustomerUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListRegionCustomerDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getRegionCustomer`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 本月风险长者 GET /amzSceneData/getRiskCustomer */
export async function getRiskCustomerUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getRiskCustomerUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListRiskCustomerResDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getRiskCustomer`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 智能床垫睡眠时长 GET /amzSceneData/getSleepDuration */
export async function getSleepDurationUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getSleepDurationUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouSleepDurationDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getSleepDuration`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** SOS数据统计 GET /amzSceneData/getSOSAlarm */
export async function getSosAlarmUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getSOSAlarmUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouSosAlarmDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getSOSAlarm`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练结果对比数据详情 GET /amzSceneData/getTrainingCompare */
export async function getTrainingCompareUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTrainingCompareUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListEvaluationTrainingCompareDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getTrainingCompare`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练数据数据 GET /amzSceneData/getTrainingData */
export async function getTrainingDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTrainingDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouAssessAndTrainingDataDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getTrainingData`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练时长分布 GET /amzSceneData/getTrainingDuration */
export async function getTrainingDurationUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTrainingDurationUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListTrainingDurationDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getTrainingDuration`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练结果趋势 GET /amzSceneData/getTrainingResults */
export async function getTrainingResultsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTrainingResultsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListTrainingResultsDto>(
    `/hcsp-gateway/baseApi/v1/amzSceneData/getTrainingResults`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
