// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 获取模板--下拉框 GET /template/choice */
export async function getDataTemplateUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDataTemplateUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListTemplateMainDto>(
    `/hcsp-gateway/clientApi/v1/template/choice`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取模板元素 GET /template/show */
export async function getDataTemplateUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getDataTemplateUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouDataTemplateListDto>(
    `/hcsp-gateway/clientApi/v1/template/show`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
