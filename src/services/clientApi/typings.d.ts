declare namespace clientApiInterface {
  type addBatchEmployeesUsingPOSTParams = {
    /** lang */
    lang?: string;
  };

  type AffectionTrainingDto = {
    /** 训练时间 */
    createTime?: number;
    /** 各项数据集合 */
    dataList?: AffectionTrainingResultsDto[];
  };

  type AffectionTrainingResultsDto = {
    /** 名称 */
    itemName?: string;
    /** 结果 */
    itemResult?: string;
    /** 趋势 */
    trend?: string;
    /** 趋势描述 */
    trendDesc?: string;
  };

  type affectionTrainingUsingGETParams = {
    /** customerId */
    customerId: number;
    /** lang */
    lang?: string;
  };

  type AgeGroupDto = {
    /** 年龄段类型 */
    ageGroupType?: string;
    /** 数量 */
    count?: number;
  };

  type AlarmAlertDayDto = {
    /** 报警数量 */
    count?: number;
    /** 报警类型 */
    magType?: string;
  };

  type AlarmAlertDto = {
    /** 前一天报警数据 */
    beforeDayAlarmCount?: number;
    /** 报警类型 */
    magType?: string;
    /** 当天报警数据数量 */
    nowDayAlarmCount?: number;
  };

  type AlarmInfoDto = {
    /** 报警类型 */
    msgType?: string;
    /** 报警类型名称 */
    msgTypeDes?: string;
  };

  type AmzGradeDto = {
    /** 认知障碍评估等级分布 01:轻度;02:中度;03:重度 */
    amzGrade?: string;
    /** 数量 */
    count?: number;
  };

  type AmzSymptomDto = {
    /** 认知障碍病状分布 01 阿兹海默症;02 脑血管型症;03 路易小体型症;04 其他病症; */
    amzSymptom?: string;
    /** 数量 */
    count?: number;
  };

  type AssessAndTrainingDataDto = {
    /** 评估总数 */
    assessCount?: number;
    /** 训练总数 */
    assessTrainingCount?: number;
    /** 训练总时长 */
    trainingDurationCount?: number;
  };

  type AssessDataResDto = {
    /** 地点定向力 */
    addressScore?: number[];
    /** 计算力 */
    calculationScore?: number[];
    /** 日期 */
    date?: string[];
    /** 延迟记忆 */
    delayedMemoryScore?: number[];
    /** 时长 */
    durationSecond?: number[];
    /** 即刻记忆 */
    immediateMemoryScore?: number[];
    /** 语言能力 */
    languageScore?: number[];
    /** 得分 */
    score?: number[];
    /** 时间定向力 */
    timeScore?: number[];
    /** 视空间能力 */
    viewSpaceScore?: number[];
  };

  type BedResDto = {
    /** 床位费用 */
    bedCost?: number;
    /** 床位关联设备 */
    bedEquipment?: string;
    /** 床位主键ID */
    bedId?: number;
    /** 床位编号 */
    bedNum?: number;
    /** 床位状态 */
    bedState?: string;
    /** 床位类型 */
    bedType?: string;
    /** 客户ID */
    customerId?: string;
    /** 入住人名称 */
    name?: string;
  };

  type BindDeviceMobileDto = {
    /** 中英文标识 */
    lang?: string;
    /** 微信标识 */
    openId?: string;
    /** 手机号 */
    phone?: string;
  };

  type BraceletGroupDto = {
    braGroupName?: string;
    id?: number;
  };

  type BuildingResDto = {
    /** 楼栋编号 */
    floorId?: string;
    /** 楼层 */
    floorResDTOList?: FloorResDto[];
  };

  type CommentaryResultShowDto = {
    /** 评估结果 */
    commentaryName?: string;
    /** 提交内容 */
    content?: string;
    /** 用户ID */
    customerId?: number;
    /** 用户名称 */
    customerName?: string;
    /** 记录得分 */
    recordScore?: number;
    /** 创建时间 */
    recordTime?: string;
    /** 备注 */
    remark?: string;
    /** 模版ID */
    templateId?: string;
    /** 模版名称 */
    templateName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type ComMsgInfoFromLyDto = {
    /** 手环地址 */
    braceletAddress?: string;
    /** 手环地址群发 */
    braceletAddressList?: string[];
    /** 楼栋编号 */
    buildingSn?: string;
    /** 消息内容 */
    content?: string;
    /** 事件ID */
    eventId?: string;
    /** 楼层编号 */
    floorSn?: string;
    /** 中英文标识 */
    lang?: string;
    /** 测试条数 */
    size?: number;
    /** 01:全量网关发送，02：指定楼层网关发送 */
    type?: string;
    /** 类型--校准时间用 */
    typeTime?: string;
  };

  type CourseInfo = {
    courseId?: number;
    courseName?: string;
    courseTag?: string;
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    id?: number;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type CustomerCompareDto = {
    /** 分数差值 */
    difference?: number;
    /** 长者最新得分 */
    lastScore?: number;
    /** 长者姓名 */
    name?: string;
    /** 长者首次分数 */
    oldScore?: number;
    /** 课程名称 */
    taskName?: string;
  };

  type CustomerCountStatisticsDto = {
    /** 长着年龄段 */
    ageGroup?: AgeGroupDto[];
    /** 认知症床位总数量 */
    amzBedCount?: number;
    /** 认知症床位入住数量 */
    amzBedInCount?: number;
    /** 认知障碍评估等级分布 */
    amzGrade?: AmzGradeDto[];
    /** 认知障碍病状分布 */
    amzSymptom?: AmzSymptomDto[];
    /** 认知症长者数量 */
    customerCount?: number;
    /** 女 */
    femaleCount?: number;
    /** 男 */
    maleCount?: number;
    /** 护理等级 */
    nurseGradeDTOS?: NurseGradeDto[];
  };

  type CustomerDataStatisticsDto = {
    /** 评估得分 */
    assessScore?: number;
    /** 生日 */
    birthday?: string;
    /** 客户ID */
    customerId?: number;
    /** 学历 */
    educationBackground?: string;
    /** 性别 */
    gender?: string;
    /** 长者姓名 */
    name?: string;
    /** 训练得分 */
    trainScore?: number;
  };

  type customerShowResultUsingGETParams = {
    /** customerTaskRecordId */
    customerTaskRecordId: number;
    /** lang */
    lang?: string;
  };

  type customerShowScoreResultUsingGETParams = {
    /** customerTaskRecordId */
    customerTaskRecordId: number;
    /** lang */
    lang?: string;
  };

  type DataTemplateListDto = {
    /** 客户ID */
    customerId?: number;
    /** 操作条件 */
    itemList?: TemplateElementResDto[];
    /** 中英文标识 */
    lang?: string;
    /** 健康记录ID */
    recordMainId?: number;
    /** 模板ID */
    templateId?: number;
    /** 模板名称 */
    templateName?: string;
  };

  type DataTemplateShowDto = {
    /** 评估结果 */
    commentaryName?: string;
    /** 问卷评估全量数据 */
    content?: string;
    /** 用户ID */
    customerId?: number;
    /** 用户名称 */
    customerName?: string;
    /** 记录得分 */
    recordScore?: number;
    /** 创建时间 */
    recordTime?: string;
    resDTO?: TemplateResDto;
    /** 模版ID */
    templateId?: string;
    /** 模版名称 */
    templateName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type DayAndNightAlarmOverviewDto = {
    /** 报警总数量 */
    count?: number;
    /** 报警数据类型集合 */
    list?: AlarmAlertDayDto[];
    /** 报警数据时间类型- 0:白天；1:夜间 */
    timeType?: string;
  };

  type deleteAccountUsingDELETEParams = {
    /** lang */
    lang?: string;
    /** userId */
    userId: number;
  };

  type deleteDeviceSupplierUsingDELETE1Params = {
    /** id */
    id: number;
    /** lang */
    lang?: string;
  };

  type deleteDeviceSupplierUsingDELETEParams = {
    /** id */
    id: number;
    /** lang */
    lang?: string;
  };

  type deleteFileUsingDELETEParams = {
    /** fileId */
    fileId: string;
  };

  type deleteRoleUsingDELETEParams = {
    /** lang */
    lang?: string;
    /** roleId */
    roleId: number;
  };

  type deleteSunDeviceUsingDELETEParams = {
    /** id */
    id: number;
    /** lang */
    lang?: string;
  };

  type deleteTemplateResultUsingDELETEParams = {
    /** lang */
    lang?: string;
    /** recordMainId */
    recordMainId: number;
  };

  type deleteTenantUsingDELETEParams = {
    /** id */
    id: number;
    /** lang */
    lang?: string;
  };

  type delRiceRoomUsingDELETEParams = {
    /** id */
    id: number;
    /** lang */
    lang?: string;
  };

  type DeviceMobileRelation = {
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    deviceSn?: string;
    id?: number;
    phone?: string;
    roomSn?: string;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type DeviceResDto = {
    /** 设备号 */
    deviceSn?: string;
    /** 最后在线时间 */
    lastOnlineTime?: number;
    /** 乐龄汇对应设备号 */
    llhDeviceSn?: string;
    /** 是否在线；online=在线、offline=离线 */
    onOffline?: string;
    /** 设备所在位置 */
    roomName?: string;
  };

  type DeviceSupplierDetailDto = {
    /** 设备名称 */
    deviceName?: string;
    /** 设备类型 */
    deviceType?: string;
    /** 文件列表 */
    fileManageDTOList?: FileManageConfigDto[];
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 网络类型 */
    networkType?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 备注 */
    remark?: string;
    /** 供应商id */
    supplierId?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: number;
    /** 设备型号 */
    version?: string;
  };

  type DeviceSupplierDto = {
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 供应商名称 */
    supplierName?: string;
  };

  type DictBaseDto = {
    code?: string;
    enName?: string;
    jpName?: string;
    name?: string;
  };

  type DomainAccountDto = {
    /** 用户地址 */
    actAddr?: string;
    /** 用户出生日期 */
    actBirth?: string;
    /** 用户邮箱 */
    actEmail?: string;
    /** 用户性别 */
    actGender?: string;
    /** 用户图片链接 */
    actIcon?: string;
    /** 用户证件类型 */
    actIdType?: string;
    /** 用户证件号 */
    actIdnumber?: string;
    /** 登录账号 */
    actLogin?: string;
    /** 用户名称 */
    actName?: string;
    /** 用户昵称 */
    actNickname?: string;
    /** 登录密码 */
    actPwd?: string;
    /** 用户电话 */
    actTel?: string;
    /** 账户类型 */
    actType?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 删除标识 */
    delFlg?: number;
    /** 账号有效期-止期-格式：yyyy-MM-dd */
    endDate?: string;
    /** 健康展示系统账号 */
    healthShowAccount?: string;
    /** 账户是否同步至训练系统 */
    isSyn?: string;
    /** 中英文标识 */
    lang?: string;
    /** 备注 */
    mark?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 角色Id */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 租户Id */
    tenantId?: number;
    /** 租户名称 */
    tenantNname?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUser?: string;
    /** 用户Id */
    userId?: number;
  };

  type DomainAccountNameDto = {
    /** 用户名称 */
    actName?: string;
    /** 用户Id */
    userId?: number;
  };

  type DomainEmployeeDto = {
    /** 账户ID */
    accountId?: number;
    /** 生日 */
    birthday?: string;
    /** 部门 */
    department?: string;
    /** 持证等级 */
    employeeLevel?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工类型 */
    employeeType?: string;
    /** 入职时间 */
    entryDate?: string;
    /** 性别 */
    gender?: string;
    /** 员工ID */
    id?: number;
    /** 多个员工ID */
    ids?: string;
    /** 中英文标识 */
    lang?: string;
    /** 离职时间 */
    leaveDate?: string;
    pageNumber?: number;
    pageSize?: number;
    /** 手机号 */
    phoneNumber?: number;
    /** 多个项目ID */
    projectIds?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type DomainPermissionDto = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 删除标识 */
    delFlg?: number;
    /** 权限Id */
    id?: number;
    /** 操作类型，01-有，02-无，03-查，04-增，05-改，06-删 */
    operatorType?: string;
    /** 资源Id */
    resourceId?: number;
    /** 角色Id */
    roleId?: number;
    /** 租户Id */
    tenantId?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUser?: string;
  };

  type DomainResourceInfo = {
    /** 权限操作类型 */
    operatorType?: string;
    /** 资源代码 */
    resCode?: string;
    /** 资源名称 */
    resName?: string;
    /** 父级资源Id */
    resParentId?: number;
    /** 资源类型：1-大分类，2-菜单，3-业务与应用系统 */
    resType?: number;
    /** 资源Id */
    resourceId?: number;
  };

  type DomainRole = {
    activeFlg?: string;
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    id?: number;
    mark?: string;
    roleName?: string;
    roleParentId?: number;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type DomainRoleDto = {
    /** 是否有效, 0-无效，1-有效 */
    activeFlg?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 删除标识 */
    delFlg?: number;
    /** 中英文标识 */
    lang?: string;
    /** 备注 */
    mark?: string;
    /** 权限分配清单 */
    permissionDTOList?: DomainPermissionDto[];
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 角色父级Id */
    roleParentId?: number;
    /** 租户Id */
    tenantId?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUser?: string;
  };

  type DomainRoleRpsDto = {
    /** 是否有效, 0-无效，1-有效 */
    activeFlg?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 删除标识 */
    delFlg?: number;
    /** 备注 */
    mark?: string;
    /** 角色Id */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 角色父级Id */
    roleParentId?: number;
    /** 租户Id */
    tenantId?: number;
    /** 租户名称 */
    tenantName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUser?: string;
  };

  type DomainTenant = {
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    id?: number;
    remarks?: string;
    scheduledTaskFlag?: number;
    tenantAddr?: string;
    tenantAlias?: string;
    tenantCode?: string;
    tenantContact?: string;
    tenantDesc?: string;
    tenantEmail?: string;
    tenantIcon?: string;
    tenantName?: string;
    tenantParentId?: number;
    tenantParentIds?: string;
    tenantSecret?: string;
    tenantTel?: string;
    tenantUrl?: string;
    updateTime?: string;
    updateUser?: string;
  };

  type DomainTenantDto = {
    tenantId?: number;
    tenantName?: string;
  };

  type DomainTenantInfoDto = {
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 备注 */
    remarks?: string;
    /** 租户别名-大屏名称 */
    tenantAlias?: string;
    /** 租户代码 */
    tenantCode?: string;
    /** 租户名称 */
    tenantName?: string;
    tenantSecret?: string;
  };

  type downLoadUsingGETParams = {
    /** fileId */
    fileId: string;
    /** name */
    name?: string;
  };

  type elderTrainUsingGETParams = {
    /** 长者ID */
    id: number;
    /** 视图编码 */
    viewCode: string;
  };

  type EmpBindWxAccountDto = {
    /** 员工姓名 */
    employeeName?: string;
    /** 中英文标识 */
    lang?: string;
    /** 手机号 */
    phoneNumber?: number;
    /** 员工编码 */
    userCode?: string;
  };

  type EvaluateTrendsResDto = {
    /** 评估总数 */
    assessCount?: number;
    /** 评估次数 */
    numberTimes?: number[];
    /** 评估分数 */
    score?: number[];
  };

  type EvaluationTrainingCompareDto = {
    /** 比较类型｜01=改善、02=退步 */
    compareType?: string;
    /** 长者变化数据 */
    compares?: CustomerCompareDto[];
  };

  type FanHuiLeiXingJiChuJieGou = {
    data?: Record<string, any>;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouAffectionTrainingDto = {
    data?: AffectionTrainingDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouAssessAndTrainingDataDto = {
    data?: AssessAndTrainingDataDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouAssessDataResDto = {
    data?: AssessDataResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouCommentaryResultShowDto = {
    data?: CommentaryResultShowDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouCustomerCountStatisticsDto = {
    data?: CustomerCountStatisticsDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouDataTemplateListDto = {
    data?: DataTemplateListDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouDataTemplateShowDto = {
    data?: DataTemplateShowDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouDomainAccountDto = {
    data?: DomainAccountDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouDomainRoleRpsDto = {
    data?: DomainRoleRpsDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouEvaluateTrendsResDto = {
    data?: EvaluateTrendsResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouFrontendConfig = {
    data?: FrontendConfig;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouJsonObject = {
    data?: Record<string, any>;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListAlarmAlertDto = {
    data?: AlarmAlertDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListAlarmInfoDto = {
    data?: AlarmInfoDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListBraceletGroupDto = {
    data?: BraceletGroupDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListBuildingResDto = {
    data?: BuildingResDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListCourseInfo = {
    data?: CourseInfo[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDayAndNightAlarmOverviewDto = {
    data?: DayAndNightAlarmOverviewDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDeviceMobileRelation = {
    data?: DeviceMobileRelation[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDeviceResDto = {
    data?: DeviceResDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDeviceSupplierDto = {
    data?: DeviceSupplierDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDomainAccountNameDto = {
    data?: DomainAccountNameDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDomainResourceInfo = {
    data?: DomainResourceInfo[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDomainRole = {
    data?: DomainRole[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDomainTenant = {
    data?: DomainTenant[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListDomainTenantDto = {
    data?: DomainTenantDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListEvaluationTrainingCompareDto = {
    data?: EvaluationTrainingCompareDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListFileManage = {
    data?: FileManage[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListFloorAlarmOverviewDto = {
    data?: FloorAlarmOverviewDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListFloorLevelDto = {
    data?: FloorLevelDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListRegionCustomerDto = {
    data?: RegionCustomerDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListRiskCustomerResDto = {
    data?: RiskCustomerResDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListRoomInfoDto = {
    data?: RoomInfoDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListRoomResDto = {
    data?: RoomResDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListSelectDto = {
    data?: SelectDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListStoriedBuildingDto = {
    data?: StoriedBuildingDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListString = {
    data?: string[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListTemplateElementDto = {
    data?: TemplateElementDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListTemplateMainDto = {
    data?: TemplateMainDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListTisiRiceAccountNameDto = {
    data?: TisiRiceAccountNameDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListTrainingDto = {
    data?: TrainingDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListTrainingDurationDto = {
    data?: TrainingDurationDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouListTrainingResultsDto = {
    data?: TrainingResultsDto[];
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouMapStringMapStringString = {
    data?: Record<string, any>;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouMapStringObject = {
    data?: Record<string, any>;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouObject = {
    data?: Record<string, any>;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageCustomerDataStatisticsDto = {
    data?: PageCustomerDataStatisticsDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageDomainAccountDto = {
    data?: PageDomainAccountDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageDomainEmployeeDto = {
    data?: PageDomainEmployeeDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageDomainRoleRpsDto = {
    data?: PageDomainRoleRpsDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageDomainTenant = {
    data?: PageDomainTenant;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageMessageRecordDto = {
    data?: PageMessageRecordDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageRecordMain = {
    data?: PageRecordMain;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageRecordResultWithBloBs = {
    data?: PageRecordResultWithBloBs;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageRoomInfoDto = {
    data?: PageRoomInfoDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageRoomInfoSelectDto = {
    data?: PageRoomInfoSelectDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageRoomResAllDto = {
    data?: PageRoomResAllDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTemplateCommentaryDto = {
    data?: PageTemplateCommentaryDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTemplateElementOptionDto = {
    data?: PageTemplateElementOptionDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTemplateMainResDto = {
    data?: PageTemplateMainResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTemplateMainSelect = {
    data?: PageTemplateMainSelect;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTenantAlarmInfoDto = {
    data?: PageTenantAlarmInfoDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTisiDevice = {
    data?: PageTisiDevice;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTisiDeviceSupplier = {
    data?: PageTisiDeviceSupplier;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTisiDeviceSupplierDetail = {
    data?: PageTisiDeviceSupplierDetail;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTisiRiceRoomInfo = {
    data?: PageTisiRiceRoomInfo;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTisiUploadErrorDetailDto = {
    data?: PageTisiUploadErrorDetailDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouPageTisiUploadRecordDto = {
    data?: PageTisiUploadRecordDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouRadarAlarmDto = {
    data?: RadarAlarmDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouRecordResDto = {
    data?: RecordResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouShowMmseResultDto = {
    data?: ShowMmseResultDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouSleepDurationDto = {
    data?: SleepDurationDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouSosAlarmDto = {
    data?: SosAlarmDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouString = {
    data?: string;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTemplateDataResultDto = {
    data?: TemplateDataResultDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTisiDeviceResCountDto = {
    data?: TisiDeviceResCountDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTrainElderEveryWeekNumDto = {
    data?: TrainElderEveryWeekNumDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTrainingAndAssessResDto = {
    data?: TrainingAndAssessResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTrainingInfo = {
    data?: TrainingInfo;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTrainingPlanDayResDto = {
    data?: TrainingPlanDayResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTrainingPlanResDto = {
    data?: TrainingPlanResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouTrainingReportResDto = {
    data?: TrainingReportResDto;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FanHuiLeiXingJiChuJieGouUploadFileInfoVo = {
    data?: UploadFileInfoVo;
    /** 描述 */
    description?: string;
    /** 状态 */
    status?: string;
  };

  type FileManage = {
    businessName?: string;
    busisnessCode?: string;
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    description?: string;
    fileName?: string;
    fileType?: string;
    fileUrl?: string;
    id?: number;
    projectId?: number;
    sortKey?: number;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type FileManageConfigDto = {
    /** 业务场景名称 */
    businessName?: string;
    /** 业务场景 */
    busisnessCode?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 文件描述 */
    description?: string;
    /** 文件名称 */
    fileName?: string;
    /** 01:轮播图，02：房间图片 */
    fileType?: string;
    /** 文件地址 */
    fileUrl?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 项目编号 */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 排序字段 */
    sortKey?: number;
    /** 机构编号 */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
  };

  type FloorAlarmOverviewDto = {
    /** 报警数据总览-楼层 */
    count?: number;
    /** 楼栋 */
    fool?: string;
  };

  type FloorLevelDto = {
    /** 楼层id */
    floorLevelId?: number;
    /** 楼层号 */
    floorNumber?: string;
  };

  type FloorResDto = {
    /** 楼层号 */
    floorNumber?: string;
  };

  type FrontendConfig = {
    baseTypes?: Record<string, any>;
  };

  type getAccountInfoUsingGET1Params = {
    /** 账号 */
    actLogin?: string;
    /** 真实姓名 */
    actName?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 角色ID */
    roleId?: string;
    tenantId?: number;
    /** 用户Id */
    userId?: number;
  };

  type getAccountInfoUsingGETParams = {
    /** 账号 */
    actLogin?: string;
    /** 真实姓名 */
    actName?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 角色ID */
    roleId?: string;
    tenantId?: number;
    /** 用户Id */
    userId?: number;
  };

  type getAccountListSelectUsingGETParams = {
    /** 账号 */
    actLogin?: string;
    /** 真实姓名 */
    actName?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 角色ID */
    roleId?: string;
    tenantId?: number;
    /** 用户Id */
    userId?: number;
  };

  type getAccountListUsingGETParams = {
    /** 账号 */
    actLogin?: string;
    /** 真实姓名 */
    actName?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 角色ID */
    roleId?: string;
    tenantId?: number;
    /** 用户Id */
    userId?: number;
  };

  type getAlarmInfoUsingGETParams = {
    /** 报警类型 */
    alertType?: string;
    /** 报警类型图标名称 */
    alertTypeName?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 项目Id */
    projectId?: number;
    /** 租户Id */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
  };

  type getAlarmOverviewUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getAlertTypeAllUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getAllRoleListUsingGETParams = {
    /** 状态 */
    activeFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 角色名称 */
    roleName?: string;
    /** 租户Id */
    tenantId?: number;
  };

  type getAllTenantListUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getAssessAndTrainingDataUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getAssessDataUsingGETParams = {
    /** customerId */
    customerId: number;
    /** lang */
    lang?: string;
    /** templateCode */
    templateCode: string;
  };

  type getAssessmentSelectUsingGETParams = {
    /** id */
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 名称 */
    name?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 模版类型 */
    templateClass?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getBraceletGroupListUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getCustomerCountUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getCustomerDataUsingGETParams = {
    /** 中英文标识 */
    lang?: string;
    /** 页数 */
    pageNumber?: number;
    /** 每页显示记录条数 */
    pageSize?: number;
    tenantId?: number;
  };

  type getCustomerOverviewUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getDataBuildingGroupUsingGETParams = {
    /** buildingId */
    buildingId?: string;
    /** tenantId */
    tenantId?: number;
    /** userId */
    userId?: number;
  };

  type getDataBuildingUsingGETParams = {
    /** projectId */
    projectId?: number;
    /** tenantId */
    tenantId?: number;
  };

  type getDataTemplateUsingGET1Params = {
    /** lang */
    lang?: string;
    /** templateId */
    templateId: number;
  };

  type getDataTemplateUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getDataUsingGETParams = {
    /** 楼宇ID */
    buildingId?: number;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 楼号 */
    floorId?: string;
    /** 楼层ID */
    floorLevelId?: number;
    /** 楼层号 */
    floorNumber?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 父节点ID */
    parentId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间朝向 */
    roomOrientation?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 房间唯一识别码 */
    roomUniqueNumber?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getDayAndNightAlarmOverviewUsingGETParams = {
    /** endTime */
    endTime: string;
    /** lang */
    lang?: string;
    /** startTime */
    startTime: string;
  };

  type getDeviceListUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getDeviceLoRaUsingGETParams = {
    /** deviceSn */
    deviceSn?: string;
    /** lang */
    lang?: string;
    /** llhDeviceSn */
    llhDeviceSn?: string;
  };

  type getDeviceMobileRelationUsingGETParams = {
    /** 设备SN */
    deviceSn: string;
    /** lang */
    lang?: string;
    /** 房间SN */
    roomSn: string;
  };

  type getDeviceSupplierSelectUsingGET1Params = {
    /** 设备名称 */
    deviceName?: string;
    /** 设备类型 */
    deviceType?: string;
    /** 业务场景名称 */
    'fileManageDTOList[0].businessName'?: string;
    /** 业务场景 */
    'fileManageDTOList[0].busisnessCode'?: string;
    /** 是否有效, 0-有效，1-无效 */
    'fileManageDTOList[0].delFlg'?: number;
    /** 文件描述 */
    'fileManageDTOList[0].description'?: string;
    /** 文件名称 */
    'fileManageDTOList[0].fileName'?: string;
    /** 01:轮播图，02：房间图片 */
    'fileManageDTOList[0].fileType'?: string;
    /** 文件地址 */
    'fileManageDTOList[0].fileUrl'?: string;
    /** id */
    'fileManageDTOList[0].id'?: number;
    /** 中英文标识 */
    'fileManageDTOList[0].lang'?: string;
    /** 页码 */
    'fileManageDTOList[0].pageNumber'?: number;
    /** 页面条数 */
    'fileManageDTOList[0].pageSize'?: number;
    /** 项目编号 */
    'fileManageDTOList[0].projectId'?: number;
    /** 项目名称 */
    'fileManageDTOList[0].projectName'?: string;
    /** 排序字段 */
    'fileManageDTOList[0].sortKey'?: number;
    /** 机构编号 */
    'fileManageDTOList[0].tenantId'?: number;
    /** 操作时间 */
    'fileManageDTOList[0].updateTime'?: string;
    /** 操作人 */
    'fileManageDTOList[0].updateUser'?: string;
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 网络类型 */
    networkType?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 备注 */
    remark?: string;
    /** 供应商id */
    supplierId?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: number;
    /** 设备型号 */
    version?: string;
  };

  type getDeviceSupplierSelectUsingGETParams = {
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 供应商名称 */
    supplierName?: string;
  };

  type getDeviceSupplierUsingGET1Params = {
    /** 设备名称 */
    deviceName?: string;
    /** 设备类型 */
    deviceType?: string;
    /** 业务场景名称 */
    'fileManageDTOList[0].businessName'?: string;
    /** 业务场景 */
    'fileManageDTOList[0].busisnessCode'?: string;
    /** 是否有效, 0-有效，1-无效 */
    'fileManageDTOList[0].delFlg'?: number;
    /** 文件描述 */
    'fileManageDTOList[0].description'?: string;
    /** 文件名称 */
    'fileManageDTOList[0].fileName'?: string;
    /** 01:轮播图，02：房间图片 */
    'fileManageDTOList[0].fileType'?: string;
    /** 文件地址 */
    'fileManageDTOList[0].fileUrl'?: string;
    /** id */
    'fileManageDTOList[0].id'?: number;
    /** 中英文标识 */
    'fileManageDTOList[0].lang'?: string;
    /** 页码 */
    'fileManageDTOList[0].pageNumber'?: number;
    /** 页面条数 */
    'fileManageDTOList[0].pageSize'?: number;
    /** 项目编号 */
    'fileManageDTOList[0].projectId'?: number;
    /** 项目名称 */
    'fileManageDTOList[0].projectName'?: string;
    /** 排序字段 */
    'fileManageDTOList[0].sortKey'?: number;
    /** 机构编号 */
    'fileManageDTOList[0].tenantId'?: number;
    /** 操作时间 */
    'fileManageDTOList[0].updateTime'?: string;
    /** 操作人 */
    'fileManageDTOList[0].updateUser'?: string;
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 网络类型 */
    networkType?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 备注 */
    remark?: string;
    /** 供应商id */
    supplierId?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: number;
    /** 设备型号 */
    version?: string;
  };

  type getDeviceSupplierUsingGETParams = {
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 供应商名称 */
    supplierName?: string;
  };

  type getDictBasesByTypeUsingGETParams = {
    /** type */
    type: string;
  };

  type getEmployeesUsingGETParams = {
    /** 账户ID */
    accountId?: number;
    /** 生日 */
    birthday?: string;
    /** 部门 */
    department?: string;
    /** 持证等级 */
    employeeLevel?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工类型 */
    employeeType?: string;
    /** 入职时间 */
    entryDate?: string;
    /** 性别 */
    gender?: string;
    /** 员工ID */
    id?: number;
    /** 多个员工ID */
    ids?: string;
    /** 中英文标识 */
    lang?: string;
    /** 离职时间 */
    leaveDate?: string;
    pageNumber?: number;
    pageSize?: number;
    /** 手机号 */
    phoneNumber?: number;
    /** 多个项目ID */
    projectIds?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getEvaluateCompareUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getEvaluateTrendsUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getFileManageByTypeUsingGETParams = {
    /** fileType */
    fileType: string;
    /** lang */
    lang?: string;
  };

  type getFloorAlarmOverviewUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getFloorLevelInfoUsingGETParams = {
    /** 楼宇ID */
    buildingId?: number;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 楼号 */
    floorId?: string;
    /** 楼层ID */
    floorLevelId?: number;
    /** 楼层号 */
    floorNumber?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 父节点ID */
    parentId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间朝向 */
    roomOrientation?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 房间唯一识别码 */
    roomUniqueNumber?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getHcspGatewayBaseApiV1CognitiveDisordersH5AffectionTrainingParams = {
    customerId?: number;
  };

  type getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingPlanDayParams = {
    customerId?: number;
    /** 日期 (暂定时间戳 */
    date?: number;
  };

  type getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingPlanParams = {
    customerId?: number;
  };

  type getHcspGatewayBaseApiV1CognitiveDisordersH5TrainingReportParams = {
    customerId?: string;
    /** (时间戳 */
    startTime?: number;
    /** (时间戳 */
    endTime?: number;
  };

  type getLanguageDataUsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getLanguageDataV2UsingGETParams = {
    /** lang */
    lang?: string;
  };

  type getMsgRecordListUsingGETParams = {
    /** 消息内容 */
    content?: string;
    /** 发送时间 */
    createTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 消息渠道--默认手环 */
    msgChannel?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 发送对象 */
    receiverName?: string;
    /** 发送用户Id即操作者 */
    sendUserId?: string;
    /** 发送用户名称即操作者 */
    sendUserName?: string;
  };

  type getOneRoleInfoUsingGETParams = {
    /** lang */
    lang?: string;
    /** roleId */
    roleId: number;
  };

  type getOptionUsingGETParams = {
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 元素ID */
    elementId?: number;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 答案key */
    optionKey?: string;
    /** 答案名称 */
    optionName?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 选项得分 */
    score?: number;
    /** 模版ID */
    templateId?: number;
    /** 租户ID */
    tenantId?: number;
    /** 创建时间 */
    updateTime?: string;
    /** 创建人 */
    updateUser?: string;
  };

  type getQuestionsUsingGETParams = {
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 模板元素类型为1时:对应画面可输入类型, 0-数字 1-汉字 */
    elementDataType?: string;
    /** 元素显示顺序 */
    elementDisplayOrder?: number;
    /** 元素key(对应保存结果json中的识别key) */
    elementKey?: string;
    /** 最大长度 */
    elementMaxLength?: number;
    /** 元素名称 */
    elementName?: string;
    /** 元素控件提示文字 */
    elementPlaceholder?: string;
    /** 元素选项类型(0-非必选 1-必选) */
    elementRequireFlg?: string;
    /** 引导提示 */
    elementTips?: string;
    /** 元素类型 */
    elementType?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 模版ID */
    templateId?: number;
    /** 租户ID */
    tenantId?: number;
    /** 创建时间 */
    updateTime?: string;
    /** 创建人 */
    updateUser?: string;
  };

  type getRadarAlarmUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getRecordListUsingGETParams = {
    /** 个人客户ID */
    customerId?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 记录时间开始 */
    recordTimeBegin?: string;
    /** 记录时间结束 */
    recordTimeEnd?: string;
    /** 模版类型 */
    templateClass?: string;
  };

  type getRegionCustomerUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getRiceAccountInfoUsingGETParams = {
    /** lang */
    lang?: string;
    /** userName */
    userName?: string;
  };

  type getRiceRoomUsingGETParams = {
    /** 楼栋名称 */
    buildingId?: string;
    /** 楼层名称 */
    groupId?: string;
    /** id */
    id?: number;
    /** 多个id , 拼接 */
    ids?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 房间名称 */
    roomName?: string;
    /** 租户id */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
    /** 用户id */
    userId?: number;
  };

  type getRiskCustomerUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getRolePageListUsingGETParams = {
    /** 状态 */
    activeFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 角色名称 */
    roleName?: string;
    /** 租户Id */
    tenantId?: number;
  };

  type getRolePermissionUsingGETParams = {
    /** lang */
    lang?: string;
    /** roleId */
    roleId: number;
  };

  type getRoomAllUsingGETParams = {
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 房间id */
    roomId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getRoomBedInfoUsingGETParams = {
    /** 最大床位费用 */
    bedCostMax?: number;
    /** 最小床位费用 */
    bedCostMin?: number;
    /** 床位关联设备 */
    bedEquipment?: string;
    /** 床位编号 */
    bedNum?: number;
    /** 床位状态 */
    bedState?: string;
    /** 床位类型 */
    bedType?: string;
    /** 楼号 */
    floorId?: string;
    /** 楼层号 */
    floorNumber?: string;
    /** 中英文标识 */
    lang?: string;
    parentId?: number;
    /** 所属房间ID */
    roomId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间朝向 */
    roomOrientation?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getRoomInfoAllUsingGETParams = {
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 房间名称 */
    roomName?: string;
    /** 租户ID */
    tenantId?: number;
    /** 用户ID */
    userId?: number;
  };

  type getRoomInfoUsingGETParams = {
    /** 楼宇ID */
    buildingId?: number;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 楼号 */
    floorId?: string;
    /** 楼层ID */
    floorLevelId?: number;
    /** 楼层号 */
    floorNumber?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 父节点ID */
    parentId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间朝向 */
    roomOrientation?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 房间唯一识别码 */
    roomUniqueNumber?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getSleepDurationUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getSOSAlarmUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getStoreyInfoUsingGETParams = {
    /** 楼宇ID */
    buildingId?: number;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 楼号 */
    floorId?: string;
    /** 楼层ID */
    floorLevelId?: number;
    /** 楼层号 */
    floorNumber?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 父节点ID */
    parentId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间朝向 */
    roomOrientation?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 房间唯一识别码 */
    roomUniqueNumber?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getStoriedBuildingInfoUsingGETParams = {
    /** 楼宇ID */
    buildingId?: number;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 楼号 */
    floorId?: string;
    /** 楼层ID */
    floorLevelId?: number;
    /** 楼层号 */
    floorNumber?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 父节点ID */
    parentId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间朝向 */
    roomOrientation?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 房间唯一识别码 */
    roomUniqueNumber?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getSunDeviceUsingGETParams = {
    /** 设备名称 */
    deviceName?: string;
    /** 设备SN */
    deviceSn?: string;
    /** 设备类型 */
    deviceType?: string;
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 网络类型 */
    networkType?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 家属手机号 */
    phones?: string[];
    /** 所属项目 */
    projectId?: number;
    /** 备注 */
    remark?: string;
    /** 所属区域 */
    roomName?: string;
    /** 房间SN */
    roomSn?: string;
    /** 是否消息推送Y-推送；N-不通知 */
    sendMsg?: string;
    /** 供应商ID */
    supplierId?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getTemplateCommentaryUsingGETParams = {
    /** 评价名称 */
    commentaryName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 教育程度 */
    educationBackground?: string;
    /** id */
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 发布时间 */
    releaseTime?: string;
    /** 备注 */
    remark?: string;
    /** 该评价级别对应的最高分数 */
    scoreCeiling?: number;
    /** 该评价级别对应的最低分数 */
    scoreFloor?: number;
    /** 方案ID */
    solutionId?: number;
    /** 方案名称 */
    solutionName?: string;
    /** 模版code */
    templateCode?: string;
    /** 模版ID */
    templateId?: number;
    /** 模版名称 */
    templateName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getTemplateConfigUsingGETParams = {
    /** id */
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 名称 */
    name?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 模版类型 */
    templateClass?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getTemplateMainSelectUsingGETParams = {
    /** id */
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 名称 */
    name?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 模版类型 */
    templateClass?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getTemplateMainUsingGETParams = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 模版类型 */
    templateClass?: string;
    /** 模版code */
    templateCode?: string;
    /** 描述 */
    templateDesc?: string;
    /** 模版名称 */
    templateName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type getTenantUsingGETParams = {
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 备注 */
    remarks?: string;
    /** 租户别名-大屏名称 */
    tenantAlias?: string;
    /** 租户代码 */
    tenantCode?: string;
    /** 租户名称 */
    tenantName?: string;
    tenantSecret?: string;
  };

  type getTrainingAndAssessDataUsingGETParams = {
    /** 客户ID */
    customerId?: number;
    /** 结束时间|yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 开始时间|yyyy-MM-dd HH:mm:ss */
    startTime?: string;
    /** 模版code */
    templateCode?: string;
    templateId?: string;
    tenantId?: number;
  };

  type getTrainingCompareUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getTrainingDataUsingGET1Params = {
    /** 课程ID */
    courseId?: number;
    /** 客户ID */
    customerId?: number;
    /** 结束时间|yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 开始时间|yyyy-MM-dd HH:mm:ss */
    startTime?: string;
    tenantId?: number;
  };

  type getTrainingDataUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getTrainingDurationUsingGET1Params = {
    /** 课程ID */
    courseId?: number;
    /** 客户ID */
    customerId?: number;
    /** 结束时间|yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 开始时间|yyyy-MM-dd HH:mm:ss */
    startTime?: string;
    tenantId?: number;
  };

  type getTrainingDurationUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getTrainingResultsUsingGETParams = {
    /** 结束时间 */
    endTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 区域ID */
    regionId?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: number;
    /** 报警类型 */
    type?: string;
  };

  type getUploadRecordErrorDetailsUsingGETParams = {
    /** 记录创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 描述 */
    description?: string;
    /** 文件名称 */
    fileName?: string;
    /** 上传记录ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    pageNumber?: number;
    pageSize?: number;
    /** 状态 */
    status?: string;
    /** 租户ID */
    tenantId?: number;
    /** 上传时间查询范围最大值 */
    uploadTimeCeiling?: string;
    /** 上传时间查询范围最小值 */
    uploadTimeFloor?: string;
    /** 上载类型 */
    uploadType?: string;
  };

  type getUploadRecordsUsingGETParams = {
    /** 记录创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 描述 */
    description?: string;
    /** 文件名称 */
    fileName?: string;
    /** 上传记录ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    pageNumber?: number;
    pageSize?: number;
    /** 状态 */
    status?: string;
    /** 租户ID */
    tenantId?: number;
    /** 上传时间查询范围最大值 */
    uploadTimeCeiling?: string;
    /** 上传时间查询范围最小值 */
    uploadTimeFloor?: string;
    /** 上载类型 */
    uploadType?: string;
  };

  type getUserInfoByIdUsingGETParams = {
    /** lang */
    lang?: string;
    /** userId */
    userId: number;
  };

  type handleUsingGET1Params = {
    component: string;
  };

  type HandleUsingGet2Body = {};

  type handleUsingGET6Params = {
    name: string;
  };

  type handleUsingGETParams = {
    component: string;
    instance: string;
  };

  type handleUsingPOSTParams = {
    name: string;
  };

  type JsonObject = {};

  type LanguageDto = {
    data?: string;
    /** 中英文标识 */
    lang?: string;
  };

  type Link = {
    href?: string;
    templated?: boolean;
  };

  type MapStringLink = {};

  type MapStringMapStringString = {};

  type MapStringString = {};

  type MessageRecordDto = {
    /** 消息内容 */
    content?: string;
    /** 发送时间 */
    createTime?: string;
    /** 中英文标识 */
    lang?: string;
    /** 消息渠道--默认手环 */
    msgChannel?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 发送对象 */
    receiverName?: string;
    /** 发送用户Id即操作者 */
    sendUserId?: string;
    /** 发送用户名称即操作者 */
    sendUserName?: string;
  };

  type MmesResultDto = {
    /** 评估结果内容 */
    content?: Record<string, any>;
    /** 用户ID */
    customerId?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 分数 */
    score?: number;
    /** 模板code */
    templateCode?: string;
    /** 所属租户 */
    tenantId?: number;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | '100 CONTINUE'
      | '101 SWITCHING_PROTOCOLS'
      | '102 PROCESSING'
      | '103 CHECKPOINT'
      | '200 OK'
      | '201 CREATED'
      | '202 ACCEPTED'
      | '203 NON_AUTHORITATIVE_INFORMATION'
      | '204 NO_CONTENT'
      | '205 RESET_CONTENT'
      | '206 PARTIAL_CONTENT'
      | '207 MULTI_STATUS'
      | '208 ALREADY_REPORTED'
      | '226 IM_USED'
      | '300 MULTIPLE_CHOICES'
      | '301 MOVED_PERMANENTLY'
      | '302 FOUND'
      | '302 MOVED_TEMPORARILY'
      | '303 SEE_OTHER'
      | '304 NOT_MODIFIED'
      | '305 USE_PROXY'
      | '307 TEMPORARY_REDIRECT'
      | '308 PERMANENT_REDIRECT'
      | '400 BAD_REQUEST'
      | '401 UNAUTHORIZED'
      | '402 PAYMENT_REQUIRED'
      | '403 FORBIDDEN'
      | '404 NOT_FOUND'
      | '405 METHOD_NOT_ALLOWED'
      | '406 NOT_ACCEPTABLE'
      | '407 PROXY_AUTHENTICATION_REQUIRED'
      | '408 REQUEST_TIMEOUT'
      | '409 CONFLICT'
      | '410 GONE'
      | '411 LENGTH_REQUIRED'
      | '412 PRECONDITION_FAILED'
      | '413 PAYLOAD_TOO_LARGE'
      | '413 REQUEST_ENTITY_TOO_LARGE'
      | '414 URI_TOO_LONG'
      | '414 REQUEST_URI_TOO_LONG'
      | '415 UNSUPPORTED_MEDIA_TYPE'
      | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
      | '417 EXPECTATION_FAILED'
      | '418 I_AM_A_TEAPOT'
      | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
      | '420 METHOD_FAILURE'
      | '421 DESTINATION_LOCKED'
      | '422 UNPROCESSABLE_ENTITY'
      | '423 LOCKED'
      | '424 FAILED_DEPENDENCY'
      | '426 UPGRADE_REQUIRED'
      | '428 PRECONDITION_REQUIRED'
      | '429 TOO_MANY_REQUESTS'
      | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
      | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
      | '500 INTERNAL_SERVER_ERROR'
      | '501 NOT_IMPLEMENTED'
      | '502 BAD_GATEWAY'
      | '503 SERVICE_UNAVAILABLE'
      | '504 GATEWAY_TIMEOUT'
      | '505 HTTP_VERSION_NOT_SUPPORTED'
      | '506 VARIANT_ALSO_NEGOTIATES'
      | '507 INSUFFICIENT_STORAGE'
      | '508 LOOP_DETECTED'
      | '509 BANDWIDTH_LIMIT_EXCEEDED'
      | '510 NOT_EXTENDED'
      | '511 NETWORK_AUTHENTICATION_REQUIRED';
    view?: View;
    viewName?: string;
  };

  type MsgInfoSendDto = {
    /** 发送内容 */
    content?: string;
    /** 手环组 */
    groupIdList?: number[];
    /** 中英文标识 */
    lang?: string;
    /** 本地网关端口号 */
    port?: string;
    /** 接收对象 */
    receiveTarget?: string;
    /** 发送用户 */
    sendUserId?: string;
    /** 接收用户组 */
    userIdList?: number[];
  };

  type NurseGradeDto = {
    /** 数量 */
    count?: number;
    /** 照护等级 */
    nurseGrade?: string;
  };

  type OrderTemplateElementDto = {
    /** 中英文标识 */
    lang?: string;
    /** 元素顺序对象数组 */
    orderList?: TemplateElement[];
    /** 租户ID */
    tenantId?: number;
  };

  type PageCustomerDataStatisticsDto = {
    currentPage?: number;
    dataList?: CustomerDataStatisticsDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageDomainAccountDto = {
    currentPage?: number;
    dataList?: DomainAccountDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageDomainEmployeeDto = {
    currentPage?: number;
    dataList?: DomainEmployeeDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageDomainRoleRpsDto = {
    currentPage?: number;
    dataList?: DomainRoleRpsDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageDomainTenant = {
    currentPage?: number;
    dataList?: DomainTenant[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageMessageRecordDto = {
    currentPage?: number;
    dataList?: MessageRecordDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageRecordMain = {
    currentPage?: number;
    dataList?: RecordMain[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageRecordResultWithBloBs = {
    currentPage?: number;
    dataList?: RecordResultWithBloBs[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageRoomInfoDto = {
    currentPage?: number;
    dataList?: RoomInfoDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageRoomInfoSelectDto = {
    currentPage?: number;
    dataList?: RoomInfoSelectDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageRoomResAllDto = {
    currentPage?: number;
    dataList?: RoomResAllDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTemplateCommentaryDto = {
    currentPage?: number;
    dataList?: TemplateCommentaryDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTemplateElementOptionDto = {
    currentPage?: number;
    dataList?: TemplateElementOptionDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTemplateMainResDto = {
    currentPage?: number;
    dataList?: TemplateMainResDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTemplateMainSelect = {
    currentPage?: number;
    dataList?: TemplateMainSelect[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTenantAlarmInfoDto = {
    currentPage?: number;
    dataList?: TenantAlarmInfoDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTisiDevice = {
    currentPage?: number;
    dataList?: TisiDevice[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTisiDeviceSupplier = {
    currentPage?: number;
    dataList?: TisiDeviceSupplier[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTisiDeviceSupplierDetail = {
    currentPage?: number;
    dataList?: TisiDeviceSupplierDetail[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTisiRiceRoomInfo = {
    currentPage?: number;
    dataList?: TisiRiceRoomInfo[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTisiUploadErrorDetailDto = {
    currentPage?: number;
    dataList?: TisiUploadErrorDetailDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PageTisiUploadRecordDto = {
    currentPage?: number;
    dataList?: TisiUploadRecordDto[];
    pageSize?: number;
    totalNum?: number;
    totalPage?: number;
  };

  type PasswordUpdateDto = {
    /** 中英文标识 */
    lang?: string;
    /** 新密码 */
    password?: string;
    /** 确认新密码 */
    passwordSure?: string;
    /** 用户Id */
    userId?: number;
  };

  type PingGuJieGuoQuShi = {
    /** (字符串 */
    createTime: string;
    itemName: string;
    itemResult: string;
    /** 趋势枚举 1上升 -1下降 0持平 */
    trend: string;
    /** 趋势描述 */
    trendDesc: string;
  };

  type QaResultDataDto = {
    /** 问答答案 */
    answer?: string;
    /** 元素ID */
    elementId?: number;
    /** 选项答案，多个逗号分隔 */
    optionValues?: string;
  };

  type queryBusinessUrlListUsingGETParams = {
    /** 业务场景名称 */
    businessName?: string;
    /** 业务场景 */
    busisnessCode?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 文件描述 */
    description?: string;
    /** 文件名称 */
    fileName?: string;
    /** 01:轮播图，02：房间图片 */
    fileType?: string;
    /** 文件地址 */
    fileUrl?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 项目编号 */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 排序字段 */
    sortKey?: number;
    /** 机构编号 */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
  };

  type queryBusinessUrlUsingGETParams = {
    /** 业务场景名称 */
    businessName?: string;
    /** 业务场景 */
    busisnessCode?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 文件描述 */
    description?: string;
    /** 文件名称 */
    fileName?: string;
    /** 01:轮播图，02：房间图片 */
    fileType?: string;
    /** 文件地址 */
    fileUrl?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 项目编号 */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 排序字段 */
    sortKey?: number;
    /** 机构编号 */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
  };

  type queryFileConfigUsingGETParams = {
    /** 业务场景名称 */
    businessName?: string;
    /** 业务场景 */
    busisnessCode?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 文件描述 */
    description?: string;
    /** 文件名称 */
    fileName?: string;
    /** 01:轮播图，02：房间图片 */
    fileType?: string;
    /** 文件地址 */
    fileUrl?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 项目编号 */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 排序字段 */
    sortKey?: number;
    /** 机构编号 */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
  };

  type RadarAlarmDto = {
    /** 告警次数数据集合 */
    alertCount?: number[];
    /** 告警类型数据集合 */
    alertType?: string[];
  };

  type RecordMain = {
    createTime?: string;
    createUser?: string;
    customerId?: number;
    delFlg?: number;
    recordMainId?: number;
    recordTime?: string;
    templateClass?: string;
    templateCode?: string;
    templateId?: string;
    templateName?: string;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type RecordResDto = {
    /** 评价名称 */
    commentaryName?: string;
    /** 评价建议 */
    commentaryRemark?: string;
    /** 记录得分 */
    recordScore?: number;
  };

  type RecordResultWithBloBs = {
    answersResult?: string;
    commentaryId?: number;
    content?: string;
    createTime?: string;
    createUser?: string;
    customerId?: number;
    customerTaskRecordId?: number;
    delFlg?: number;
    id?: number;
    recordMainId?: number;
    recordScore?: number;
    recordTimes?: number;
    templateId?: string;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type RegionCustomerDto = {
    /** 风险区域名称 */
    regionName?: string;
    /** 风险区域名称 */
    type?: string;
  };

  type ResultDto = {
    /** 用户ID */
    customerId?: number;
    /** 用户任务记录ID */
    customerTaskRecordId?: number;
    /** 中英文标识 */
    lang?: string;
    /** 提交时间 */
    recordTime?: string;
    /** 结果数据 */
    resultDataList?: QaResultDataDto[];
    /** 模板ID */
    templateId?: number;
    /** 所属租户 */
    tenantId?: number;
  };

  type RiskCustomerDto = {
    /** 类型 */
    alarmType?: string;
    /** 长者床位描述 */
    bedName?: string;
    /** 长者ID */
    customerId?: number;
    /** 长者头像 */
    imageUrl?: string;
    /** 长者姓名 */
    name?: string;
  };

  type RiskCustomerResDto = {
    /** 本月风险长者-重点 */
    keynoteList?: RiskCustomerDto[];
    /** 本月风险长者-提醒 */
    remindList?: RiskCustomerDto[];
  };

  type RoomInfoDto = {
    /** 楼宇ID */
    buildingId?: number;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 楼号 */
    floorId?: string;
    /** 楼层ID */
    floorLevelId?: number;
    /** 楼层号 */
    floorNumber?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 父节点ID */
    parentId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间朝向 */
    roomOrientation?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 房间唯一识别码 */
    roomUniqueNumber?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type RoomInfoSelectDto = {
    /** 房间ID */
    roomId?: number;
    /** 房间名称 */
    roomName?: string;
    /** 房间sn */
    roomSn?: string;
  };

  type RoomResAllDto = {
    /** 房间id */
    roomId?: number;
    /** 房间名称 */
    roomName?: string;
  };

  type RoomResDto = {
    /** 楼号 */
    floorId?: string;
    /** 楼层号 */
    floorNumber?: string;
    /** 房间床位数据 */
    list?: BedResDto[];
    /** 房间名称 */
    roomName?: string;
    /** 房间最大人数 */
    roomPeopleSize?: number;
    /** 房间区域 */
    roomRegion?: string;
    /** 房间状态 */
    roomState?: string;
    /** 房间类型 */
    roomType?: string;
    /** 房间唯一识别码 */
    roomUniqueNumber?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type RunDeviceManageDto = {
    /** 设备名称 */
    deviceName?: string;
    /** 设备SN */
    deviceSn?: string;
    /** 设备类型 */
    deviceType?: string;
    /** 主键ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 网络类型 */
    networkType?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 家属手机号 */
    phones?: string[];
    /** 所属项目 */
    projectId?: number;
    /** 备注 */
    remark?: string;
    /** 所属区域 */
    roomName?: string;
    /** 房间SN */
    roomSn?: string;
    /** 是否消息推送Y-推送；N-不通知 */
    sendMsg?: string;
    /** 供应商ID */
    supplierId?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type seeTemplateDataUsingGETParams = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 模版类型 */
    templateClass?: string;
    /** 模版code */
    templateCode?: string;
    /** 描述 */
    templateDesc?: string;
    /** 模版名称 */
    templateName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type SelectDto = {
    /** key */
    code?: string;
    /** 网络类型 */
    networkType?: string;
    /** value */
    value?: string;
  };

  type selectTenantListUsingGETParams = {
    /** lang */
    lang?: string;
    tenantId?: number;
    tenantName?: string;
  };

  type showFileByIdUsingGETParams = {
    /** fileId */
    fileId: string;
  };

  type ShowMmseResultDto = {
    /** 地点定向力 */
    addressScore?: number;
    /** 计算力 */
    calculationScore?: number;
    /** 评测结果 */
    commentaryName?: string;
    /** 评估时间 */
    createdTime?: string;
    /** 延迟记忆 */
    delayedMemoryScore?: number;
    /** 定向力 */
    directionalForce?: number;
    /** 评估时长/单位秒 */
    durationSecond?: number;
    /** 三步指令 */
    eightScore?: number;
    /** 命名 */
    fiveScore?: number;
    /** 即刻记忆 */
    immediateMemoryScore?: number;
    /** 语言能力 */
    languageScore?: number;
    /** 表达 */
    nineScore?: number;
    /** 评测分数 */
    score?: number;
    /** 参考分数区间高值-该评价级别对应的最高分数 */
    scoreCeiling?: number;
    /** 参考分数区间低值-该评价级别对应的最低分数 */
    scoreFloor?: number;
    /** 阅读 */
    sevenScore?: number;
    /** 重复 */
    sixScore?: number;
    /** 时间定向力 */
    timeScore?: number;
    /** 绘图/视空间能力 */
    viewSpaceScore?: number;
  };

  type showMmseResultUsingGET1Params = {
    'content.array'?: boolean;
    'content.nullObject'?: boolean;
    /** 用户ID */
    customerId?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 分数 */
    score?: number;
    /** 模板code */
    templateCode?: string;
    /** 所属租户 */
    tenantId?: number;
  };

  type showMmseResultUsingGETParams = {
    /** customerId */
    customerId: number;
    /** lang */
    lang?: string;
  };

  type showScoreResultUsingGETParams = {
    /** lang */
    lang?: string;
    /** recordMainId */
    recordMainId: number;
  };

  type showTemplateResultUsingGETParams = {
    /** lang */
    lang?: string;
    /** recordMainId */
    recordMainId: number;
  };

  type showXRResultUsingGETParams = {
    /** customerTaskRecordId */
    customerTaskRecordId: number;
    /** lang */
    lang?: string;
  };

  type SleepDurationDto = {
    /** 楼层数据集合 */
    floor?: string[];
    /** 平均睡眠时长集合 */
    sleepDuration?: number[];
  };

  type SosAlarmDto = {
    /** 告警次数数据集合 */
    alertCount?: number[];
    /** 楼层数据集合 */
    floor?: string[];
  };

  type StoriedBuildingDto = {
    /** 楼宇ID */
    buildingId?: number;
    /** 楼栋名称 */
    floorId?: string;
  };

  type TemplateCommentaryDto = {
    /** 评价名称 */
    commentaryName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 教育程度 */
    educationBackground?: string;
    /** id */
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 发布时间 */
    releaseTime?: string;
    /** 备注 */
    remark?: string;
    /** 该评价级别对应的最高分数 */
    scoreCeiling?: number;
    /** 该评价级别对应的最低分数 */
    scoreFloor?: number;
    /** 方案ID */
    solutionId?: number;
    /** 方案名称 */
    solutionName?: string;
    /** 模版code */
    templateCode?: string;
    /** 模版ID */
    templateId?: number;
    /** 模版名称 */
    templateName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type TemplateDataResultDto = {
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    resDTO?: TemplateResDto;
    templateId?: number;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type TemplateElement = {
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    elementDataType?: string;
    elementDisplayOrder?: number;
    elementKey?: string;
    elementMaxLength?: number;
    elementName?: string;
    elementPlaceholder?: string;
    elementRequireFlg?: string;
    elementTips?: string;
    elementType?: string;
    id?: number;
    templateId?: number;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
  };

  type TemplateElementDto = {
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 模板元素类型为1时:对应画面可输入类型, 0-数字 1-汉字 */
    elementDataType?: string;
    /** 元素显示顺序 */
    elementDisplayOrder?: number;
    /** 元素key(对应保存结果json中的识别key) */
    elementKey?: string;
    /** 最大长度 */
    elementMaxLength?: number;
    /** 元素名称 */
    elementName?: string;
    /** 元素控件提示文字 */
    elementPlaceholder?: string;
    /** 元素选项类型(0-非必选 1-必选) */
    elementRequireFlg?: string;
    /** 引导提示 */
    elementTips?: string;
    /** 元素类型 */
    elementType?: string;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 模版ID */
    templateId?: number;
    /** 租户ID */
    tenantId?: number;
    /** 创建时间 */
    updateTime?: string;
    /** 创建人 */
    updateUser?: string;
  };

  type TemplateElementOptionDto = {
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** 元素ID */
    elementId?: number;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 答案key */
    optionKey?: string;
    /** 答案名称 */
    optionName?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 选项得分 */
    score?: number;
    /** 模版ID */
    templateId?: number;
    /** 租户ID */
    tenantId?: number;
    /** 创建时间 */
    updateTime?: string;
    /** 创建人 */
    updateUser?: string;
  };

  type TemplateElementOptionResDto = {
    id?: number;
    optionKey?: string;
    optionName?: string;
    score?: number;
  };

  type TemplateElementResDto = {
    answer?: string;
    elementDataType?: string;
    elementDisplayOrder?: number;
    elementKey?: string;
    elementMaxLength?: number;
    elementName?: string;
    elementPlaceholder?: string;
    elementRequireFlg?: string;
    elementTips?: string;
    elementType?: string;
    id?: number;
    optionList?: TemplateElementOptionResDto[];
  };

  type TemplateMainDto = {
    templateDesc?: string;
    templateId?: number;
    templateName?: string;
  };

  type TemplateMainInfoDto = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 模版类型 */
    templateClass?: string;
    /** 模版code */
    templateCode?: string;
    /** 描述 */
    templateDesc?: string;
    /** 模版名称 */
    templateName?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type TemplateMainResDto = {
    /** id */
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 发布时间 */
    releaseTime?: string;
    /** 模版类型 */
    templateClass?: string;
    /** 模版code */
    templateCode?: string;
    /** 描述 */
    templateDesc?: string;
    /** 模版名称 */
    templateName?: string;
    /** 创建时间 */
    updateTime?: string;
    /** 创建人 */
    updateUser?: string;
  };

  type TemplateMainSelect = {
    /** id */
    id?: number;
    /** 是否公开 */
    isPublicFlg?: string;
    /** 名称 */
    name?: string;
    /** 模版类型 */
    templateClass?: string;
    /** 模版编码 */
    templateCode?: string;
    /** 描述 */
    templateDesc?: string;
  };

  type TemplateReleaseDto = {
    /** 模版ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 租户ID */
    tenantId?: number;
  };

  type TemplateResDto = {
    elementList?: TemplateElementResDto[];
    templateClass?: string;
    templateCode?: string;
    templateDesc?: string;
    templateName?: string;
  };

  type TenantAlarmInfoDto = {
    /** 报警类型 */
    alertType?: string;
    /** 报警类型图标名称 */
    alertTypeName?: string;
    /** 是否有效, 0-有效，1-无效 */
    delFlg?: number;
    /** id */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 项目Id */
    projectId?: number;
    /** 租户Id */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
  };

  type TisiDevice = {
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    deviceLocation?: string;
    deviceName?: string;
    deviceSn?: string;
    deviceSource?: string;
    deviceType?: string;
    id?: number;
    llhDeviceSn?: string;
    networkType?: string;
    offlineTime?: string;
    onOffline?: string;
    onlineTime?: string;
    projectId?: number;
    recordTime?: string;
    remark?: string;
    roomId?: number;
    roomName?: string;
    roomSn?: string;
    sendMsg?: string;
    supplierId?: number;
    supplierName?: string;
    tenantId?: number;
    token?: string;
    type?: string;
    updateTime?: string;
    updateUser?: string;
    userId?: number;
  };

  type TisiDeviceResCountDto = {
    /** 摄像头设备数量 */
    cameraCount?: number;
    /** 床垫设备数量 */
    mattressCount?: number;
    /** 毫米波设备数量 */
    radarCount?: number;
    /** 紧急呼叫设备数量 */
    sosCount?: number;
  };

  type TisiDeviceSupplier = {
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    id?: number;
    supplierName?: string;
    updateTime?: string;
    updateUser?: string;
  };

  type TisiDeviceSupplierDetail = {
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    deviceName?: string;
    deviceType?: string;
    id?: number;
    networkType?: string;
    remark?: string;
    supplierId?: number;
    supplierName?: string;
    updateTime?: string;
    updateUser?: string;
    version?: string;
  };

  type TisiRiceAccountNameDto = {
    /** 用户Id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
  };

  type TisiRiceRoomInfo = {
    buildingId?: string;
    createTime?: string;
    createUser?: string;
    delFlg?: number;
    groupId?: string;
    id?: number;
    isAmzRoom?: string;
    length?: number;
    roomId?: number;
    roomName?: string;
    roomSn?: string;
    sortId?: number;
    tenantId?: number;
    updateTime?: string;
    updateUser?: string;
    userId?: number;
    width?: number;
  };

  type TisiRiceRoomInfoDto = {
    /** 楼栋名称 */
    buildingId?: string;
    /** 楼层名称 */
    groupId?: string;
    /** id */
    id?: number;
    /** 多个id , 拼接 */
    ids?: string;
    /** 中英文标识 */
    lang?: string;
    /** 页码 */
    pageNumber?: number;
    /** 页面条数 */
    pageSize?: number;
    /** 房间名称 */
    roomName?: string;
    /** 租户id */
    tenantId?: number;
    /** 操作时间 */
    updateTime?: string;
    /** 操作人 */
    updateUser?: string;
    /** 用户id */
    userId?: number;
  };

  type TisiUploadErrorDetailDto = {
    /** 错误描述 */
    errorDesc?: string;
    /** 中英文标识 */
    lang?: string;
    /** 记录行数 */
    lineNum?: number;
    pageNumber?: number;
    pageSize?: number;
    /** 租户ID */
    tenantId?: number;
    /** 上传记录ID */
    uploadRecordId?: number;
  };

  type TisiUploadRecordDto = {
    /** 记录创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 描述 */
    description?: string;
    /** 文件名称 */
    fileName?: string;
    /** 上传记录ID */
    id?: number;
    /** 中英文标识 */
    lang?: string;
    pageNumber?: number;
    pageSize?: number;
    /** 状态 */
    status?: string;
    /** 租户ID */
    tenantId?: number;
    /** 上传时间查询范围最大值 */
    uploadTimeCeiling?: string;
    /** 上传时间查询范围最小值 */
    uploadTimeFloor?: string;
    /** 上载类型 */
    uploadType?: string;
  };

  type TrainElderEveryWeekNumDto = {
    /** 本周总训练老人数量 */
    totalTrainElderNum?: number;
    /** 本周已经训练老人数量 */
    trainElderNum?: number;
  };

  type TrainingAndAssessDto = {
    /** 次数 */
    count?: number;
    /** 日期 */
    date?: string;
    /** 月 */
    month?: number;
  };

  type TrainingAndAssessResDto = {
    /** 评估数据 */
    assessList?: TrainingAndAssessDto[];
    /** 训练数据 */
    trainingList?: TrainingAndAssessDto[];
  };

  type TrainingDto = {
    /** 正确率 */
    correct?: number;
    /** 月 */
    month?: number;
    /** 训练平均时长|分钟 */
    trainDuration?: number;
    /** 训练总时长 */
    trainSumDuration?: number;
    /** 年 */
    years?: number;
  };

  type TrainingDurationDto = {
    /** 课程训练总时长 */
    duration?: number;
    /** 课程名称 */
    taskName?: string;
  };

  type TrainingInfo = {
    clickButtonCount?: number;
    correct?: string;
    courseId?: number;
    courseName?: string;
    createTime?: string;
    createUser?: string;
    customerTaskRecordId?: number;
    delFlg?: number;
    focusDuration?: number;
    id?: number;
    reactionTimeChoice?: number;
    reactionTimeConfirm?: number;
    tenantId?: number;
    thirdCustomerId?: string;
    trainDuration?: number;
    trainFinishDuration?: number;
    trainMode?: string;
    trainScore?: number;
    updateTime?: string;
    updateUser?: string;
    userName?: string;
  };

  type TrainingPlanDayDto = {
    /** 任务名称 */
    className?: string;
  };

  type TrainingPlanDayResDto = {
    /** 上午 */
    amDataList?: TrainingPlanDayDto[];
    /** 下午 */
    pmData?: TrainingPlanDayDto[];
  };

  type trainingPlanDayUsingGETParams = {
    /** customerId */
    customerId: number;
    /** date */
    date: number;
    /** lang */
    lang?: string;
  };

  type TrainingPlanResDto = {
    /** 结束日期 */
    endDate?: number;
    /** 完成数 */
    finishCount?: number;
    /** 计划内有任务数据集合 */
    hasDataDateList?: number[];
    /** 开始日期 */
    startDate?: number;
    /** 总数 */
    totalCount?: number;
  };

  type trainingPlanUsingGETParams = {
    /** customerId */
    customerId: number;
    /** lang */
    lang?: string;
  };

  type TrainingReportClassDto = {
    accuracyRateData?: TrainingReportDto;
    /** 课程名称 */
    className?: string;
    /** 本月训练次数 */
    countOfMonth?: string;
    /** 本月训练得分 */
    scoreOfMonth?: string;
    thinkTimeData?: TrainingReportDto;
    trainingDurationData?: TrainingReportDto;
  };

  type TrainingReportDto = {
    /** 本月 */
    currentMonth?: string;
    /** 上个月 */
    preMonth?: string;
  };

  type TrainingReportResDto = {
    /** 本月正确率 */
    correctRateOfMath?: string;
    /** 本月训练时长 */
    durationSecondOfMath?: string;
    /** 本月训练数据 */
    list?: TrainingReportClassDto[];
    /** 累计训练 */
    totalCount?: string;
    /** 累计时长 */
    totalDurationSecond?: string;
  };

  type trainingReportUsingGETParams = {
    /** customerId */
    customerId: number;
    /** endTime */
    endTime: number;
    /** lang */
    lang?: string;
    /** startTime */
    startTime: number;
  };

  type TrainingResultsDto = {
    /** 训练次数 */
    numberTimes?: string[];
    /** 训练结果分数 */
    score?: number[];
    /** 课程名称 */
    taskName?: string;
  };

  type UploadFileInfoVo = {
    /** 文件ID，后续接口icon等字段的值 */
    fileId?: string;
    /** 图片访问路径 */
    fileUrl?: string;
    /** 上传时间 */
    uploadTime?: number;
  };

  type uploadPictureUsingPOSTParams = {
    /** deviceSn */
    deviceSn: string;
  };

  type uploadVideoUsingPOSTParams = {
    /** deviceSn */
    deviceSn: string;
    /** localtime */
    localtime: string;
  };

  type View = {
    contentType?: string;
  };
}
