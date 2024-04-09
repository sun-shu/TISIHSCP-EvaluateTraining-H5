// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 评估数据 GET /mmse/data/assess */
export async function getAssessDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getAssessDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouAssessDataResDto>(
    `/hcsp-gateway/baseApi/v1/mmse/data/assess`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练数据 GET /mmse/data/training */
export async function getTrainingDataUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTrainingDataUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListTrainingDto>(
    `/hcsp-gateway/baseApi/v1/mmse/data/training`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 训练时长 GET /mmse/data/trainingDuration */
export async function getTrainingDurationUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTrainingDurationUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListTrainingDto>(
    `/hcsp-gateway/baseApi/v1/mmse/data/trainingDuration`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
