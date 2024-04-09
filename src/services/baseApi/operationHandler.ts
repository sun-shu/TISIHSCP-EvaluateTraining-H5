// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** handle GET /actuator/health */
export async function handleUsingGet2(
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/health`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/health/${param0} */
export async function handleUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.handleUsingGET1Params,
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  const { component: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/health/${param0}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/health/${param0}/${param1} */
export async function handleUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.handleUsingGETParams,
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  const { component: param0, instance: param1, ...queryParams } = params;
  return request<Record<string, any>>(
    `/hcsp-gateway/baseApi/v1/actuator/health/${param0}/${param1}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    },
  );
}

/** handle GET /actuator/heapdump */
export async function handleUsingGet3(
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/heapdump`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/httptrace */
export async function handleUsingGet4(
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/httptrace`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/info */
export async function handleUsingGet5(
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/loggers */
export async function handleUsingGet7(
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/loggers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/loggers/${param0} */
export async function handleUsingGet6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.handleUsingGET6Params,
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  const { name: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/loggers/${param0}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** handle POST /actuator/loggers/${param0} */
export async function handleUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.handleUsingPOSTParams,
  body: {},
  options?: { [key: string]: any },
) {
  const { name: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/loggers/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** handle GET /actuator/mappings */
export async function handleUsingGet8(
  body: baseApiInterface.HandleUsingGet2Body,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator/mappings`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
