// @ts-ignore
/* eslint-disable */
import { request } from '@@/exports';

/** 批量新增员工信息 POST /domainEmployee/addBatchEmployees */
export async function addBatchEmployeesUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.addBatchEmployeesUsingPOSTParams,
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

  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouMapStringObject>(
    `/hcsp-gateway/clientApi/v1/domainEmployee/addBatchEmployees`,
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

/** 新增员工信息 POST /domainEmployee/addEmployee */
export async function addEmployeeUsingPost(
  body: clientApiInterface.DomainEmployeeDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/domainEmployee/addEmployee`,
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

/** 员工微信绑定 PUT /domainEmployee/bind/wx */
export async function bindWxAccountUsingPut(
  body: clientApiInterface.EmpBindWxAccountDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/domainEmployee/bind/wx`,
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

/** 删除员工信息 PUT /domainEmployee/delEmployee */
export async function delEmployeeUsingPut(
  body: clientApiInterface.DomainEmployeeDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/domainEmployee/delEmployee`,
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

/** 查询员工信息 GET /domainEmployee/getEmployees */
export async function getEmployeesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: clientApiInterface.getEmployeesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouPageDomainEmployeeDto>(
    `/hcsp-gateway/clientApi/v1/domainEmployee/getEmployees`,
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 更新员工信息 PUT /domainEmployee/updateEmployee */
export async function updateEmployeeUsingPut(
  body: clientApiInterface.DomainEmployeeDto,
  options?: { [key: string]: any },
) {
  return request<clientApiInterface.FanHuiLeiXingJiChuJieGouString>(
    `/hcsp-gateway/clientApi/v1/domainEmployee/updateEmployee`,
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
