// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 获取XR课程训练 GET /courseInfo/getCourseInfo */
export async function getCourseInfoUsingGet(options?: { [key: string]: any }) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouListCourseInfo>(
    `/hcsp-gateway/clientApi/v1/courseInfo/getCourseInfo`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
