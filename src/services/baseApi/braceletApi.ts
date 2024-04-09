// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 获取某个租户下的手环用户名称列表 GET /bracelet/accountInfo */
export async function getAccountInfoUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getAccountInfoUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListDomainAccountNameDto>(
    `/hcsp-gateway/baseApi/v1/bracelet/accountInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取所有手环组--下拉框 GET /bracelet/group */
export async function getBraceletGroupListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getBraceletGroupListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListBraceletGroupDto>(
    `/hcsp-gateway/baseApi/v1/bracelet/group`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
