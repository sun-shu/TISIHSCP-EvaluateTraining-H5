// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 获取前端工程配置接口--基础字典 GET /frontend/configs */
export async function getFrontEndConfigUsingGet(options?: { [key: string]: any }) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouFrontendConfig>(
    `/hcsp-gateway/clientApi/v1/frontend/configs`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
