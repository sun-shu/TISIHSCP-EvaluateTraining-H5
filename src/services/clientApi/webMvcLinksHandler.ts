// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** links GET /actuator */
export async function linksUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/hcsp-gateway/clientApi/v1/actuator`, {
    method: 'GET',
    ...(options || {}),
  });
}
