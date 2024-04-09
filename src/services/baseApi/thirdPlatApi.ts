// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 来自乐养平台的通用手环地址接收 POST /third/common/bracelets */
export async function receiveCommonBraceletsUsingPost(
  body: baseApiInterface.ComMsgInfoFromLyDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/third/common/bracelets`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 来自乐养平台的通用消息接收 POST /third/common/msg */
export async function receiveCommonMsgUsingPost(
  body: baseApiInterface.ComMsgInfoFromLyDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/third/common/msg`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 乐养大屏重定向认知训练H5 GET /third/h5/train */
export async function elderTrainUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.elderTrainUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/third/h5/train`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 手环时间校准 POST /third/time/msg */
export async function timeCommonMsgUsingPost(
  body: baseApiInterface.ComMsgInfoFromLyDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/third/time/msg`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取本周训练长者数量 GET /third/train/elder */
export async function trainElderEveryWeekNumUsingGet(options?: { [key: string]: any }) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouTrainElderEveryWeekNumDto>(
    `/hcsp-gateway/baseApi/v1/third/train/elder`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
