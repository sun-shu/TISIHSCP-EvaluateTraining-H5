// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 新增元素 POST /templateElement/addQuestions */
export async function addQuestionsUsingPost(
  body: clientApiInterface.TemplateElementDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/templateElement/addQuestions`,
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

/** 删除元素 PUT /templateElement/delQuestions */
export async function delQuestionsUsingPut(
  body: clientApiInterface.TemplateElementDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/templateElement/delQuestions`,
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

/** 查询元素 GET /templateElement/getQuestions */
export async function getQuestionsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getQuestionsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListTemplateElementDto>(
    `/hcsp-gateway/clientApi/v1/templateElement/getQuestions`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 修改元素排序 PUT /templateElement/orderQuestions */
export async function orderQuestionsUsingPut(
  body: clientApiInterface.OrderTemplateElementDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/templateElement/orderQuestions`,
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

/** 修改元素 PUT /templateElement/updateQuestions */
export async function updateQuestionsUsingPut(
  body: clientApiInterface.TemplateElementDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/templateElement/updateQuestions`,
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
