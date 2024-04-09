// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 亲情训练 GET /cognitiveDisordersH5/affectionTraining */
export async function affectionTrainingUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.affectionTrainingUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouAffectionTrainingDto>(
    `/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/affectionTraining`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** mmse评估记录展示 GET /cognitiveDisordersH5/showMmseResult */
export async function showMmseResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.showMmseResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouShowMmseResultDto>(
    `/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/showMmseResult`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练计划 GET /cognitiveDisordersH5/trainingPlan */
export async function trainingPlanUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.trainingPlanUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouTrainingPlanResDto>(
    `/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingPlan`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练计划天 GET /cognitiveDisordersH5/trainingPlanDay */
export async function trainingPlanDayUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.trainingPlanDayUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouTrainingPlanDayResDto>(
    `/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingPlanDay`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 认知症训练报告 GET /cognitiveDisordersH5/trainingReport */
export async function trainingReportUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.trainingReportUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouTrainingReportResDto>(
    `/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingReport`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
