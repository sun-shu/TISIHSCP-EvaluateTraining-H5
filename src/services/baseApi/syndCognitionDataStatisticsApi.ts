// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 评估、训练数据数据 GET /syndCognition/data/assessAndTraining */
export async function getAssessAndTrainingDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getAssessAndTrainingDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouAssessAndTrainingDataDto>(
    `/hcsp-gateway/baseApi/v1/syndCognition/data/assessAndTraining`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 认知症看板异常行为情况概览 GET /syndCognition/data/getAlarmOverview */
export async function getAlarmOverviewUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getAlarmOverviewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListAlarmAlertDto>(
    `/hcsp-gateway/baseApi/v1/syndCognition/data/getAlarmOverview`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 认知症看板长者统计数据 GET /syndCognition/data/getCustomerCount */
export async function getCustomerCountUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getCustomerCountUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouCustomerCountStatisticsDto>(
    `/hcsp-gateway/baseApi/v1/syndCognition/data/getCustomerCount`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 认知症看板长者列表数据 GET /syndCognition/data/getCustomerData */
export async function getCustomerDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getCustomerDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageCustomerDataStatisticsDto>(
    `/hcsp-gateway/baseApi/v1/syndCognition/data/getCustomerData`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 认知症看板异常行为情况概览-昼夜总览 GET /syndCognition/data/getDayAndNightAlarmOverview */
export async function getDayAndNightAlarmOverviewUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getDayAndNightAlarmOverviewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListDayAndNightAlarmOverviewDto>(
    `/hcsp-gateway/baseApi/v1/syndCognition/data/getDayAndNightAlarmOverview`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 认知症看板异常行为情况概览-楼层报警总数总览 GET /syndCognition/data/getFloorAlarmOverview */
export async function getFloorAlarmOverviewUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getFloorAlarmOverviewUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListFloorAlarmOverviewDto>(
    `/hcsp-gateway/baseApi/v1/syndCognition/data/getFloorAlarmOverview`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 评估训练数据 GET /syndCognition/data/trainingAndAssess */
export async function getTrainingAndAssessDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTrainingAndAssessDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouTrainingAndAssessResDto>(
    `/hcsp-gateway/baseApi/v1/syndCognition/data/trainingAndAssess`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
