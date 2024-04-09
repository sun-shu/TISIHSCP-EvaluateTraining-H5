// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 运行设备管理-查询 GET /run/deviceManage */
export async function getSunDeviceUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getSunDeviceUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageTisiDevice>(
    `/hcsp-gateway/clientApi/v1/run/deviceManage`,
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
  body: clientApiInterface.RunDeviceManageDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/run/deviceManage`,
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
  body: clientApiInterface.RunDeviceManageDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/run/deviceManage`,
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
  params: clientApiInterface.deleteSunDeviceUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/run/deviceManage`,
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
  body: clientApiInterface.BindDeviceMobileDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/run/deviceManage/bindWxMsg`,
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
  params: clientApiInterface.getDeviceLoRaUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListDeviceResDto>(
    `/hcsp-gateway/clientApi/v1/run/deviceManage/getDeviceLoRa`,
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
  params: clientApiInterface.getDeviceMobileRelationUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListDeviceMobileRelation>(
    `/hcsp-gateway/clientApi/v1/run/deviceManage/getDeviceMobileRelation`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
