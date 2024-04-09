// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 获取前端工程配置接口--基础字典 GET /frontend/configs */
export async function getFrontEndConfigUsingGet(options?: { [key: string]: any }) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouFrontendConfig>(
    `/hcsp-gateway/baseApi/v1/frontend/configs`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
