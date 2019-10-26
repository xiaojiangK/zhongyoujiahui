/*
 * APICloud JavaScript Library
 * Copyright (c) 2014 apicloud.com
 */
 
(function(window){
    // var baseUrl = 'http://zhongyou.cc';
    var baseUrl = 'https://api.cn-pw.cn'
    // var baseUrl = 'http://zyjh.test.api.qiuxin.tech';
    var serviceUrl = {
      login            :          baseUrl + '/Admin/login', //登录
      forgotPassword       :      baseUrl + "/Admin/ForgotPassword",  //忘记密码
      info             :          baseUrl + "/Admin/Info",  //用户信息
      smscode          :          baseUrl + "/Admin/Smscode",  //发送验证码
      projectList         :       baseUrl + "/Project/All",  //项目列表
      projectCreate      :        baseUrl + "/Project/Create",  //项目报备
      projectInfo        :        baseUrl + "/Project/Info",  //项目详情
      projectUnfreeze      :      baseUrl + "/Project/Unfreeze",  //项目申请解冻
      projectTransfer      :      baseUrl + "/Project/Transfer",  //项目申请转让
      projectUnfreezeaudit    :   baseUrl + "/project/Unfreezeaudit",//解冻审核
      projectStates      :        baseUrl + "/Project/States",  //项目状态列表
      projectSchedules      :     baseUrl + "/Project/Schedules",  //项目进度列表
      projectSubjects      :      baseUrl + "/Project/Subjects",  //项目公司主体列表
      projectRegions      :       baseUrl + "/Project/Regions",  //项目大区列表
      projectTypes        :       baseUrl + "/Project/Types",  //项目类型列表
      projectEdit         :       baseUrl + "/Project/Edit",  //项目修改
      orderCreate        :        baseUrl + "/Order/Create",  //订单创建
      orderDetail         :        baseUrl + "/Order/Info",  //订单详情
      orderList          :         baseUrl + "/Order/All",  //订单列表
      orderReceipt      :         baseUrl + "/Order/Receipt",  //订单确认收货
      orderLogisticsChange   :    baseUrl + "/Order/Logistics_Change",  //订单物流变更
      orderStates         :       baseUrl + "/Order/States",//订单状态
      orderEdit           :       baseUrl + "/Order/Edit",  //订单修改
      orderClose          :       baseUrl + "/Order/Close",  //取消订单
      contractCreate      :       baseUrl + "/Contract/Create",  //合同创建
      contractInfo        :       baseUrl + "/Contract/Info",  //合同详情
      contractList        :        baseUrl + "/Contract/All",  //合同列表
      depositList        :         baseUrl + "/Deposit/All",  //保证金列表
      depositInfo        :        baseUrl + "/Deposit/Info",//保证金详情
      depositCreate     :         baseUrl + "/Deposit/Create",//保证金申请
      depositRefund       :       baseUrl + "/Deposit/Refund",//保证金退还
      orderInvoiceList      :      baseUrl + "/Order/Invoice_All",//发票列表
      orderInvoiceInfo      :     baseUrl + "/Order/Invoice/Info",//发票列表详情
      userAll           :         baseUrl + "/User/All",//客户列表
      userCreate        :         baseUrl + "/User/Create",//客户创建
      productAll         :        baseUrl + "/Product/all",//产品查询
      productUnit        :        baseUrl + "/Product/Unit",//产品单位
      provincesList     :         baseUrl + "/Provinces/All",//所有省
      citysList     :             baseUrl + "/Citys/All",//所有市
      areasList     :             baseUrl + "/Areas/All",//所有区
      orderDelete     :           baseUrl + "/Order/Delete", //订单删除
      projectDelete     :         baseUrl + "/Project/Delete", //删除项目
      orderConfirmation   :       baseUrl + "/Order/Confirmation",//订单确认
      projectInvoiceAdd   :       baseUrl + "/Project/invoice_add", //填写开票信息
      projectInvoiceInfo   :      baseUrl + "/Project/invoice_info",//开票信息详情
      orderOutstock_all   :       baseUrl + "/Order/outstock_all", // 出库单列表
      orderOutstock_confirm   :   baseUrl + "/Order/outstock_confirm", // 出库单确认收货
      bondAll         :           baseUrl + "/Bond/All", // 收款单列表
      invoiceBill    :            baseUrl + "/Order/Invoice_Bill",//发票账单
      bondInvoice_All    :        baseUrl + "/Bond/Invoice_All", // 发票列表
      orderInvoice_Create    :    baseUrl + "/Order/Invoice_Create", // 发票创建
      projectAudit       :        baseUrl + "/Project/Audit", // 项目审核
      projectRevokeAudit    :     baseUrl + "/Project/revokeAudit",//项目撤销审核
      orderAudit       :          baseUrl + "/Order/Audit",//订单审核
      orderRevokeAudit    :       baseUrl + "/Order/revokeAudit",//订单撤销审核
      orderRebate_Apply    :      baseUrl + "/Order/Rebate_Apply",//订单返款返利申请
      adminRoles           :      baseUrl + "/Admin/Roles",//角色集合
      projectOverdraft     :      baseUrl + "/Project/Overdraft",//查询欠款
      adminUpdate        :        baseUrl + "/Admin/Update"//修改用戶资料
    }

    window.useUrl = serviceUrl;

})(window);
