// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 接入设备管理供应商-查询 GET /device/supplier */
export async function getDeviceSupplierUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getDeviceSupplierUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageTisiDeviceSupplier>(
    `/hcsp-gateway/baseApi/v1/device/supplier`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 接入设备管理供应商-修改 PUT /device/supplier */
export async function updateDeviceSupplierUsingPut(
  body: baseApiInterface.DeviceSupplierDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/device/supplier`,
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

/** 接入设备管理供应商-新增 POST /device/supplier */
export async function addDeviceSupplierUsingPost(
  body: baseApiInterface.DeviceSupplierDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/device/supplier`,
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

/** 接入设备管理供应商-删除 DELETE /device/supplier */
export async function deleteDeviceSupplierUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.deleteDeviceSupplierUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/baseApi/v1/device/supplier`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 接入设备管理供应商-下拉查询 GET /device/supplier/select */
export async function getDeviceSupplierSelectUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getDeviceSupplierSelectUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListDeviceSupplierDto>(
    `/hcsp-gateway/baseApi/v1/device/supplier/select`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
