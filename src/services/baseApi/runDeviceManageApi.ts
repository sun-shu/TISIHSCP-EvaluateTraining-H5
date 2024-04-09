// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 运行设备管理-查询 GET /run/deviceManage */
export async function getSunDeviceUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getSunDeviceUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageTisiDevice>(
    `/hcsp-gateway/baseApi/v1/run/deviceManage`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 运行设备管理-修改 PUT /run/deviceManage */
export async function updateSunDeviceUsingPut(
  body: baseApiInterface.RunDeviceManageDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/run/deviceManage`,
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

/** 运行设备管理-新增 POST /run/deviceManage */
export async function addSunDeviceUsingPost(
  body: baseApiInterface.RunDeviceManageDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/run/deviceManage`,
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

/** 运行设备管理-删除 DELETE /run/deviceManage */
export async function deleteSunDeviceUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.deleteSunDeviceUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/baseApi/v1/run/deviceManage`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 家属告警绑定 PUT /run/deviceManage/bindWxMsg */
export async function bindWxMsgUsingPut(
  body: baseApiInterface.BindDeviceMobileDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/run/deviceManage/bindWxMsg`,
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

/** 查询LoRa设备 GET /run/deviceManage/getDeviceLoRa */
export async function getDeviceLoRaUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getDeviceLoRaUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListDeviceResDto>(
    `/hcsp-gateway/baseApi/v1/run/deviceManage/getDeviceLoRa`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 设备告警联系人查询 GET /run/deviceManage/getDeviceMobileRelation */
export async function getDeviceMobileRelationUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getDeviceMobileRelationUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListDeviceMobileRelation>(
    `/hcsp-gateway/baseApi/v1/run/deviceManage/getDeviceMobileRelation`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
