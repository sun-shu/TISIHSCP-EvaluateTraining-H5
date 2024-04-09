// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 查询上传记录错误信息 GET /tisiUploadRecordApi/getUploadRecordErrorDetails */
export async function getUploadRecordErrorDetailsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getUploadRecordErrorDetailsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageTisiUploadErrorDetailDto>(
    `/hcsp-gateway/baseApi/v1/tisiUploadRecordApi/getUploadRecordErrorDetails`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询文件上传记录 GET /tisiUploadRecordApi/getUploadRecords */
export async function getUploadRecordsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getUploadRecordsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageTisiUploadRecordDto>(
    `/hcsp-gateway/baseApi/v1/tisiUploadRecordApi/getUploadRecords`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
