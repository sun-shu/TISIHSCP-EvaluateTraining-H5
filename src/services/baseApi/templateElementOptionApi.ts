// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 新增元素答案选项 POST /questionsAnswers/addOption */
export async function addOptionUsingPost(
  body: baseApiInterface.TemplateElementOptionDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/questionsAnswers/addOption`,
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

/** 删除元素答案选项 PUT /questionsAnswers/delOption */
export async function delOptionUsingPut(
  body: baseApiInterface.TemplateElementOptionDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/questionsAnswers/delOption`,
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

/** 查询元素答案选项 GET /questionsAnswers/getOption */
export async function getOptionUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getOptionUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageTemplateElementOptionDto>(
    `/hcsp-gateway/baseApi/v1/questionsAnswers/getOption`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 修改元素答案选项 PUT /questionsAnswers/updateOption */
export async function updateOptionUsingPut(
  body: baseApiInterface.TemplateElementOptionDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/questionsAnswers/updateOption`,
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
