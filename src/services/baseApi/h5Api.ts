// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 亲情训练认知 认知训练报告接口 GET /hcsp-gateway/baseApi/v1/cognitiveDisordersH5/affectionTraining */
export async function getHcspGatewayBaseApiV1CognitiveDisordersH5AffectionTraining(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getHcspGatewayBaseApiV1CognitiveDisordersH5AffectionTrainingParams,
  options?: { [key: string]: any },
) {
  return request<{
    '': string;
    data: {
      dataList: { itemName: string; itemResult: string; trend: string; trendDesc: string };
      createTime: string;
    };
  }>(`/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/affectionTraining`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 训练计划信息 GET /hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingPlan */
export async function getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingPlan(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingPlanParams,
  options?: { [key: string]: any },
) {
  return request<{
    data: {
      hasDataDateList: number[];
      startDate: number;
      endDate: number;
      totalCount: number;
      finishCount: number;
    };
  }>(`/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingPlan`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 训练计划信息-单日 Copy GET /hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingPlanDay */
export async function getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingPlanDay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingPlanDayParams,
  options?: { [key: string]: any },
) {
  return request<{
    data: { amDataList: { className: string }[]; pmData: { className: string }[] };
  }>(`/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingPlanDay`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 认知训练报告 时间：按照当前月 GET /hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingReport */
export async function getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingReport(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingReportParams,
  options?: { [key: string]: any },
) {
  return request<{
    data: {
      durationSecondOfMath: string;
      correctRateOfMath: string;
      totalCount: string;
      totalDurationSecond: string;
      list: {
        countOfMonth: string;
        scoreOfMonth: string;
        trainingDurationData: { currentMonth: string; preMonth: string };
        thinkTimeData: { currentMonth: string; preMonth: string };
        correctRateData: { currentMonth: string; preMonth: string };
        className: string;
      }[];
    };
  }>(`/hcsp-gateway/baseApi/v1/cognitiveDisordersH5/trainingReport`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
