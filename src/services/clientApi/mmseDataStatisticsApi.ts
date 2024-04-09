// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 评估数据 GET /mmse/data/assess */
export async function getAssessDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getAssessDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouAssessDataResDto>(
    `/hcsp-gateway/clientApi/v1/mmse/data/assess`,
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
  params: clientApiInterface.getTrainingDataUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListTrainingDto>(
    `/hcsp-gateway/clientApi/v1/mmse/data/training`,
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
  params: clientApiInterface.getTrainingDurationUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListTrainingDto>(
    `/hcsp-gateway/clientApi/v1/mmse/data/trainingDuration`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
