// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** MMSE结果提交 POST /QAResult/addMmseResult */
export async function addMmseResultUsingPost(
  body: baseApiInterface.MmesResultDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouJsonObject>(
    `/hcsp-gateway/baseApi/v1/QAResult/addMmseResult`,
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

/** 问卷问答结果提交 POST /QAResult/addResult */
export async function addResultUsingPost(
  body: baseApiInterface.ResultDto,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouRecordResDto>(
    `/hcsp-gateway/baseApi/v1/QAResult/addResult`,
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

/** 用户任务提交结果展示 GET /QAResult/customerShowResult */
export async function customerShowResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.customerShowResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouDataTemplateShowDto>(
    `/hcsp-gateway/baseApi/v1/QAResult/customerShowResult`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 用户评估分数结果展示 GET /QAResult/customerShowScoreResult */
export async function customerShowScoreResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.customerShowScoreResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouCommentaryResultShowDto>(
    `/hcsp-gateway/baseApi/v1/QAResult/customerShowScoreResult`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 删除量表填写结果 DELETE /QAResult/delResult */
export async function deleteTemplateResultUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.deleteTemplateResultUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouObject>(
    `/hcsp-gateway/baseApi/v1/QAResult/delResult`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 分页获取问卷记录信息 GET /QAResult/getRecordList */
export async function getRecordListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.getRecordListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageRecordMain>(
    `/hcsp-gateway/baseApi/v1/QAResult/getRecordList`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** mmse评估记录展示 GET /QAResult/showMmseResult */
export async function showMmseResultUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.showMmseResultUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouPageRecordResultWithBloBs>(
    `/hcsp-gateway/baseApi/v1/QAResult/showMmseResult`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 结果展示 GET /QAResult/showResult */
export async function showTemplateResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.showTemplateResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouDataTemplateShowDto>(
    `/hcsp-gateway/baseApi/v1/QAResult/showResult`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 评估分数结果展示 GET /QAResult/showScoreResult */
export async function showScoreResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.showScoreResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouCommentaryResultShowDto>(
    `/hcsp-gateway/baseApi/v1/QAResult/showScoreResult`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** XR训练结果展示 GET /QAResult/showXRResult */
export async function showXrResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.showXRResultUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouTrainingInfo>(
    `/hcsp-gateway/baseApi/v1/QAResult/showXRResult`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
