// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 根据文件ID返回可访问的文件URL GET /files/${param0} */
export async function showFileByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.showFileByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { fileId: param0, ...queryParams } = params;
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGou>(
    `/hcsp-gateway/baseApi/v1/files/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 删除文件服务器中某个文件 DELETE /files/dleFile */
export async function deleteFileUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.deleteFileUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<baseApiInterface.FanHuiLeiXingJiChuJieGou>(
    `/hcsp-gateway/baseApi/v1/files/dleFile`,
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 下载文件 GET /files/download/${param0} */
export async function downLoadUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.downLoadUsingGETParams,
  options?: { [key: string]: any },
) {
  const { fileId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/hcsp-gateway/baseApi/v1/files/download/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 以原File的形式上传私有文件 POST /files/private */
export async function uploadPrivateFileUsingPost(
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouUploadFileInfoVo>(
    `/hcsp-gateway/baseApi/v1/files/private`,
    {
      method: 'POST',
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 以原File的形式上传公有文件 POST /files/public */
export async function uploadPublicFileUsingPost(
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouUploadFileInfoVo>(
    `/hcsp-gateway/baseApi/v1/files/public`,
    {
      method: 'POST',
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 以原File的形式上传公有文件 POST /files/public/uploadPicture */
export async function uploadPictureUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.uploadPictureUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/files/public/uploadPicture`,
    {
      method: 'POST',
      params: {
        ...params,
      },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 以原File的形式上传公有文件 POST /files/public/uploadVideo */
export async function uploadVideoUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: baseApiInterface.uploadVideoUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<baseApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/baseApi/v1/files/public/uploadVideo`,
    {
      method: 'POST',
      params: {
        ...params,
      },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}
