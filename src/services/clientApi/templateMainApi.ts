// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 新增模版 POST /template/addTemplateMain */
export async function addTemplateMainUsingPost(
  body: clientApiInterface.TemplateMainInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/template/addTemplateMain`,
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

/** 删除模版 PUT /template/delTemplateMain */
export async function delTemplateMainUsingPut(
  body: clientApiInterface.TemplateMainInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/template/delTemplateMain`,
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

/** 查询评估模版下拉数据 GET /template/getAssessmentSelect */
export async function getAssessmentSelectUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getAssessmentSelectUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageTemplateMainSelect>(
    `/hcsp-gateway/clientApi/v1/template/getAssessmentSelect`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询评估模版下拉数据-新增规则配置使用 GET /template/getTemplateConfig */
export async function getTemplateConfigUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getTemplateConfigUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageTemplateMainSelect>(
    `/hcsp-gateway/clientApi/v1/template/getTemplateConfig`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询模版 GET /template/getTemplateMain */
export async function getTemplateMainUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getTemplateMainUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageTemplateMainResDto>(
    `/hcsp-gateway/clientApi/v1/template/getTemplateMain`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查询模版下拉数据 GET /template/getTemplateMainSelect */
export async function getTemplateMainSelectUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getTemplateMainSelectUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageTemplateMainSelect>(
    `/hcsp-gateway/clientApi/v1/template/getTemplateMainSelect`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 查看模版数据 GET /template/seeTemplateData */
export async function seeTemplateDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.seeTemplateDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouTemplateDataResultDto>(
    `/hcsp-gateway/clientApi/v1/template/seeTemplateData`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 模版发布公开 PUT /template/templateOpen */
export async function templateOpenUsingPut(
  body: clientApiInterface.TemplateReleaseDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/template/templateOpen`,
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

/** 模版发布 POST /template/templateRelease */
export async function templateReleaseUsingPost(
  body: clientApiInterface.TemplateReleaseDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/template/templateRelease`,
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

/** 修改模版 PUT /template/updateTemplateMain */
export async function updateTemplateMainUsingPut(
  body: clientApiInterface.TemplateMainInfoDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/template/updateTemplateMain`,
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
