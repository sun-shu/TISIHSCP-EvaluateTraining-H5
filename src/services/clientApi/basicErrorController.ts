// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** errorHtml GET /error */
export async function errorHtmlUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/hcsp-gateway/clientApi/v1/error`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** errorHtml PUT /error */
export async function errorHtmlUsingPut(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/hcsp-gateway/clientApi/v1/error`, {
    method: 'PUT',
    ...(options || {}),
  });
}

/** errorHtml POST /error */
export async function errorHtmlUsingPost(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/hcsp-gateway/clientApi/v1/error`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** errorHtml DELETE /error */
export async function errorHtmlUsingDelete(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/hcsp-gateway/clientApi/v1/error`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** errorHtml PATCH /error */
export async function errorHtmlUsingPatch(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/hcsp-gateway/clientApi/v1/error`, {
    method: 'PATCH',
    ...(options || {}),
  });
}
