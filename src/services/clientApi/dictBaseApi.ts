// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 根据查询条件type获取资源表数据，多个type逗号分隔 GET /dict/base */
export async function getDictBasesByTypeUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDictBasesByTypeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouMapStringMapStringString>(
    `/hcsp-gateway/clientApi/v1/dict/base`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** getAll GET /dict/base/all */
export async function getAllUsingGet(options?: { [key: string]: any }) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouMapStringMapStringString>(
    `/hcsp-gateway/clientApi/v1/dict/base/all`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
