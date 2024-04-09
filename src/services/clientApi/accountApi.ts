// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 分页获取某个租户下的用户信息 GET /accounts */
export async function getAccountListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getAccountListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageDomainAccountDto>(
    `/hcsp-gateway/clientApi/v1/accounts`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 更新后台用户信息 PUT /accounts */
export async function updateAccountUsingPut(
  body: clientApiInterface.DomainAccountDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/accounts`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 创建后台用户信息 POST /accounts */
export async function addAccountUsingPost(
  body: clientApiInterface.DomainAccountDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/accounts`,
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

/** 删除用户信息 DELETE /accounts */
export async function deleteAccountUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.deleteAccountUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/accounts`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取某个租户下的用户名称列表 GET /accounts/getAccountInfo */
export async function getAccountInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getAccountInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListDomainAccountNameDto>(
    `/hcsp-gateway/clientApi/v1/accounts/getAccountInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取苗米未绑定项目的用户名称列表 GET /accounts/getRiceAccountInfo */
export async function getRiceAccountInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getRiceAccountInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListTisiRiceAccountNameDto>(
    `/hcsp-gateway/clientApi/v1/accounts/getRiceAccountInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 根据userId获取用户信息 GET /accounts/oneUserInfo */
export async function getUserInfoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getUserInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouDomainAccountDto>(
    `/hcsp-gateway/clientApi/v1/accounts/oneUserInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 分页获取某个租户下的用户信息-下拉 GET /accounts/select */
export async function getAccountListSelectUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getAccountListSelectUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageDomainAccountDto>(
    `/hcsp-gateway/clientApi/v1/accounts/select`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 首次登录，更新密码 PUT /accounts/updatepw */
export async function updateAccountPasswordUsingPut(
  body: clientApiInterface.PasswordUpdateDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/accounts/updatepw`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
