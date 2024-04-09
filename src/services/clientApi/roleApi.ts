// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 分页获取某个租户下的角色列表 GET /roles */
export async function getRolePageListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getRolePageListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageDomainRoleRpsDto>(
    `/hcsp-gateway/clientApi/v1/roles`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 修改用户角色 PUT /roles */
export async function updateRoleUsingPut(
  body: clientApiInterface.DomainRoleDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/roles`,
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

/** 添加用户角色 POST /roles */
export async function addRoleUsingPost(
  body: clientApiInterface.DomainRoleDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/roles`,
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

/** 删除角色信息 DELETE /roles */
export async function deleteRoleUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.deleteRoleUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/roles`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 下拉选择框--获取角色列表 GET /roles/all */
export async function getAllRoleListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getAllRoleListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListDomainRole>(
    `/hcsp-gateway/clientApi/v1/roles/all`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取单个角色 GET /roles/oneRoleInfo */
export async function getOneRoleInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getOneRoleInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouDomainRoleRpsDto>(
    `/hcsp-gateway/clientApi/v1/roles/oneRoleInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取角色对应的权限列表 GET /roles/permission */
export async function getRolePermissionUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getRolePermissionUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListDomainResourceInfo>(
    `/hcsp-gateway/clientApi/v1/roles/permission`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
