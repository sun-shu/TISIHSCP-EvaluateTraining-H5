// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 新增数据 POST /roomInfo/addRoomInfo */
export async function addRoomInfoUsingPost(
  body: clientApiInterface.RoomInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/roomInfo/addRoomInfo`,
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

/** 房间管理页面-批量修改苗米房间数据 PUT /roomInfo/batchUpdateRiceRoom */
export async function batchUpdateRiceRoomUsingPut(
  body: clientApiInterface.TisiRiceRoomInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/roomInfo/batchUpdateRiceRoom`,
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

/** 房间管理页面-批量修改苗米房间数据 DELETE /roomInfo/delRiceRoom */
export async function delRiceRoomUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.delRiceRoomUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGou>(
    `/hcsp-gateway/clientApi/v1/roomInfo/delRiceRoom`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 删除房间数据 PUT /roomInfo/delRoomInfo */
export async function delRoomInfoUsingPut(
  body: clientApiInterface.RoomInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGou>(
    `/hcsp-gateway/clientApi/v1/roomInfo/delRoomInfo`,
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

/** 数据查询 GET /roomInfo/getData */
export async function getDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListRoomInfoDto>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getData`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 文件管理-楼栋查询 GET /roomInfo/getDataBuilding */
export async function getDataBuildingUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDataBuildingUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListString>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getDataBuilding`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 文件管理-楼层查询 GET /roomInfo/getDataBuildingGroup */
export async function getDataBuildingGroupUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDataBuildingGroupUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListString>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getDataBuildingGroup`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询楼层下拉数据 GET /roomInfo/getFloorLevelInfo */
export async function getFloorLevelInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getFloorLevelInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListFloorLevelDto>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getFloorLevelInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 房间管理页面-查询苗米房间数据 GET /roomInfo/getRiceRoom */
export async function getRiceRoomUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getRiceRoomUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageTisiRiceRoomInfo>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getRiceRoom`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询所有房间数据 GET /roomInfo/getRoomAll */
export async function getRoomAllUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getRoomAllUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageRoomResAllDto>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getRoomAll`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询房间床位数据 GET /roomInfo/getRoomBedInfo */
export async function getRoomBedInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getRoomBedInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListRoomResDto>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getRoomBedInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询房间数据 GET /roomInfo/getRoomInfo */
export async function getRoomInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getRoomInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageRoomInfoDto>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getRoomInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询楼层数据 GET /roomInfo/getStoreyInfo */
export async function getStoreyInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getStoreyInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListBuildingResDto>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getStoreyInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询楼宇下拉数据 GET /roomInfo/getStoriedBuildingInfo */
export async function getStoriedBuildingInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getStoriedBuildingInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListStoriedBuildingDto>(
    `/hcsp-gateway/clientApi/v1/roomInfo/getStoriedBuildingInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 房间管理页面-修改苗米房间数据 PUT /roomInfo/updateRiceRoom */
export async function updateRiceRoomUsingPut(
  body: clientApiInterface.TisiRiceRoomInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/roomInfo/updateRiceRoom`,
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

/** 修改房间数据 PUT /roomInfo/updateRoomInfo */
export async function updateRoomInfoUsingPut(
  body: clientApiInterface.RoomInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/roomInfo/updateRoomInfo`,
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
