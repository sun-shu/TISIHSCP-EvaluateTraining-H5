// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** links GET /actuator */
export async function linksUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/actuator`, {
    method: 'GET',
    ...(options || {}),
  });
}
