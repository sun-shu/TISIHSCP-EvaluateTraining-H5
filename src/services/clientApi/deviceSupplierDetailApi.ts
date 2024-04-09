// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 接入设备管理-查询 GET /device/supplierDetail */
export async function getDeviceSupplierUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDeviceSupplierUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageTisiDeviceSupplierDetail>(
    `/hcsp-gateway/clientApi/v1/device/supplierDetail`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 接入设备管理-修改 PUT /device/supplierDetail */
export async function updateDeviceSupplierUsingPut1(
  body: clientApiInterface.DeviceSupplierDetailDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/device/supplierDetail`,
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

/** 接入设备管理-新增 POST /device/supplierDetail */
export async function addDeviceSupplierUsingPost1(
  body: clientApiInterface.DeviceSupplierDetailDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/device/supplierDetail`,
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

/** 接入设备管理-删除 DELETE /device/supplierDetail */
export async function deleteDeviceSupplierUsingDelete1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.deleteDeviceSupplierUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/device/supplierDetail`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 接入设备管理-下拉查询 GET /device/supplierDetail/select */
export async function getDeviceSupplierSelectUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDeviceSupplierSelectUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListSelectDto>(
    `/hcsp-gateway/clientApi/v1/device/supplierDetail/select`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
