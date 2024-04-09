// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 新增评估配置 POST /templateCommentary/addTemplateCommentary */
export async function addTemplateCommentaryUsingPost(
  body: baseApiInterface.TemplateCommentaryDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/templateCommentary/addTemplateCommentary`,
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

/** 删除评估配置 PUT /templateCommentary/delTemplateCommentary */
export async function delTemplateCommentaryUsingPut(
  body: baseApiInterface.TemplateCommentaryDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/templateCommentary/delTemplateCommentary`,
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

/** 查询评估配置 GET /templateCommentary/getTemplateCommentary */
export async function getTemplateCommentaryUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getTemplateCommentaryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageTemplateCommentaryDto>(
    `/hcsp-gateway/baseApi/v1/templateCommentary/getTemplateCommentary`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 修改评估配置 PUT /templateCommentary/updateTemplateCommentary */
export async function updateTemplateCommentaryUsingPut(
  body: baseApiInterface.TemplateCommentaryDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/templateCommentary/updateTemplateCommentary`,
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
