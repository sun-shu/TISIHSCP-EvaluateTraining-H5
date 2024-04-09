// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 取得轮播图 GET /fileManage */
export async function getFileManageByTypeUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getFileManageByTypeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListFileManage>(
    `/hcsp-gateway/baseApi/v1/fileManage`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 新增机构报警图标 POST /fileManage/addAlarmInfo */
export async function addAlarmInfoUsingPost(
  body: baseApiInterface.TenantAlarmInfoDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/fileManage/addAlarmInfo`,
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

/** 新增文件配置管理 POST /fileManage/addFileConfig */
export async function addFileConfigUsingPost(
  body: baseApiInterface.FileManageConfigDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/fileManage/addFileConfig`,
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

/** 获取所有报警图标信息 GET /fileManage/alertTypeAll */
export async function getAlertTypeAllUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getAlertTypeAllUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListAlarmInfoDto>(
    `/hcsp-gateway/baseApi/v1/fileManage/alertTypeAll`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 删除机构报警图标 PUT /fileManage/delAlarmInfo */
export async function delAlarmInfoUsingPut(
  body: baseApiInterface.TenantAlarmInfoDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGou>(
    `/hcsp-gateway/baseApi/v1/fileManage/delAlarmInfo`,
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

/** 删除文件配置管理 PUT /fileManage/delFileConfig */
export async function delFileConfigUsingPut(
  body: baseApiInterface.FileManageConfigDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/fileManage/delFileConfig`,
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

/** 查询机构报警图标 GET /fileManage/getAlarmInfo */
export async function getAlarmInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getAlarmInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageTenantAlarmInfoDto>(
    `/hcsp-gateway/baseApi/v1/fileManage/getAlarmInfo`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取所有房间消息-对应苗米设备 GET /fileManage/getRoomInfoAll */
export async function getRoomInfoAllUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getRoomInfoAllUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageRoomInfoSelectDto>(
    `/hcsp-gateway/baseApi/v1/fileManage/getRoomInfoAll`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 根据业务编码获取文件url GET /fileManage/queryBusinessUrl */
export async function queryBusinessUrlUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.queryBusinessUrlUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/fileManage/queryBusinessUrl`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 根据业务编码获取文件url-list GET /fileManage/queryBusinessUrlList */
export async function queryBusinessUrlListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.queryBusinessUrlListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouListFileManage>(
    `/hcsp-gateway/baseApi/v1/fileManage/queryBusinessUrlList`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询文件配置管理 GET /fileManage/queryFileConfig */
export async function queryFileConfigUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.queryFileConfigUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/fileManage/queryFileConfig`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 修改机构报警图标 PUT /fileManage/updateAlarmInfo */
export async function updateAlarmInfoUsingPut(
  body: baseApiInterface.TenantAlarmInfoDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/fileManage/updateAlarmInfo`,
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

/** 修改文件配置管理 PUT /fileManage/updateFileConfig */
export async function updateFileConfigUsingPut(
  body: baseApiInterface.FileManageConfigDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/fileManage/updateFileConfig`,
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
