// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 获取语言数据 GET /language/getLanguageData */
export async function getLanguageDataUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getLanguageDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/language/getLanguageData`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取语言数据 GET /language/getLanguageDataV2 */
export async function getLanguageDataV2UsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getLanguageDataV2UsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/language/getLanguageDataV2`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 语言数据存储 POST /language/save */
export async function saveUsingPost(
  body: clientApiInterface.LanguageDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/language/save`,
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

/** 语言数据存储 POST /language/saveV2 */
export async function saveV2UsingPost(
  body: clientApiInterface.LanguageDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/clientApi/v1/language/saveV2`,
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
