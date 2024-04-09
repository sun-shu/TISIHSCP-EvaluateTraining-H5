// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 分页获取消息发送记录 GET /msg */
export async function getMsgRecordListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getMsgRecordListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageMessageRecordDto>(
    `/hcsp-gateway/baseApi/v1/msg`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 发送消息 POST /msg */
export async function sendMsgInfoUsingPost(
  body: baseApiInterface.MsgInfoSendDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouObject>(`/hcsp-gateway/baseApi/v1/msg`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
