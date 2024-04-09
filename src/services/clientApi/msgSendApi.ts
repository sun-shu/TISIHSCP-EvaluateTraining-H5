// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 分页获取消息发送记录 GET /msg */
export async function getMsgRecordListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getMsgRecordListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageMessageRecordDto>(
    `/hcsp-gateway/clientApi/v1/msg`,
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
  body: clientApiInterface.MsgInfoSendDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/msg`,
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
