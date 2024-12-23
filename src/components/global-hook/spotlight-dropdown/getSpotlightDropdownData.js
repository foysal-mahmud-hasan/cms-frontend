const getSpotlightDropdownData = (t) => {
  return [
    {
      group: "Core",
      actions: ("core")
          ? [
            {
              id: "customer",
              label: t("CustomerN"),
              description: t("WhereWePresentTheCustomerInformationN"),
            },
            {
              id: "user",
              label: t("UserN"),
              description: t("WhereWePresentTheUserInformationN"),
            },
            {
              id: "vendor",
              label: t("VendorN"),
              description: t("WhereWePresentTheVendorInformationN"),
            },
            {
              id: "setting",
              label: t("CoreSetting"),
              description: t("WhereWePresentTheVendorInformationN"),
            },
            {
              id: "location",
              label: t("CoreLocation"),
              description: t("WhereWePresentTheVendorInformationN"),
            },
            {
              id: "marketing-executive",
              label: t("MarketingExecutiveN"),
              description: t("WhereWePresentTheVendorInformationN"),
            },
            {
              id: "file-upload",
              label: t("ManageFile"),
              description: t("WhereWePresentTheFileInformation"),
            },
          ]
          : [],
    },
    {
      group: "Sales & Purchase",
      actions: ("sales-purchase")
          ? [
            {
              id: "sales",
              label: t("SalesN"),
              description: t("WhereWePresentTheSalesInformationN"),
            },
            {
              id: "sales-invoice",
              label: t("NewSalesN"),
              description: t("WhereWePresentTheSalesInvoiceInformationN"),
            },
            {
              id: "purchase",
              label: t("PurchaseN"),
              description: t("WhereWePresentThePurchaseInformationN"),
            },
            {
              id: "purchase-invoice",
              label: t("NewPurchaseN"),
              description: t("WhereWePresentThePurchaseInvoiceInformationN"),
            },
            {
              id: "invoice-batch",
              label: t("InvoiceBatchN"),
              description: t("WhereWePresentTheInvoiceBatchInformationN"),
            },
          ]
          : [],
    },
    {
      group: "Inventory",
      actions: ("inventory")
          ? [
            {
              id: "category",
              label: t("CategoryN"),
              description: t("WhereWePresentTheCategoryInformationN"),
            },
            {
              id: "category-group",
              label: t("CategoryGroupnN"),
              description: t("WhereWePresentTheCategoryGroupInformationN"),
            },
            {
              id: "product",
              label: t("ProductN"),
              description: t("WhereWePresentTheProductInformationN"),
            },
            {
              id: "product-settings",
              label: t("ProductSettingN"),
              description: t("WhereWePresentTheInvoiceBatchInformationN"),
            },
            {
              id: "particular",
              label: t("ParticularSettingN"),
              description: t("WhereWePresentTheInvoiceBatchInformationN"),
            },
            {
              id: "config",
              label: t("InventoryConfigurationN"),
              description: t("WhereWePresentTheInvoiceBatchInformationN"),
            },
          ]
          : [],
    },
    {
      group: "Production",
      actions: ("production")
          ? [
            {
              id: "items",
              label: t("ProductionReceipeN"),
              description: t("WhereWePresentTheProductionReceipeInformationN"),
            },
            {
              id: "setting",
              label: t("ProductionSetting"),
              description: t("WhereWePresentTheProductionInformationN"),
            },
            {
              id: "config",
              label: t("ProductionConfigurationN"),
              description: t("WhereWePresentTheProductionInhouseInformationN"),
            },
            {
              id: "batch",
              label: t("ProductionInhouseN"),
              description: t("WhereWePresentTheProductionInhouseInformationN"),
            },
          ]
          : [],
    },
    {
      group: "Domain",
      actions: ("domain")
          ? [
            {
              id: "",
              label: t("DomainN"),
              description: t("WhereWePresentTheDomainInformationN"),
            },
          ]
          : [],
    },
    {
      group: "Accounting",
      actions: ("accounting")
          ? [
            {
              id: "transaction-mode",
              label: t("TransactionModeN"),
              description: t("WhereWePresentTheTransactionModeInformationN"),
            },
            {
              id: "voucher-entry",
              label: t("VoucherEntryN"),
              description: t("WhereWePresentTheVoucherInformationN"),
            },
            {
              id: "ledger",
              label: t("LedgerN"),
              description: t("WhereWePresentTheLedgerInformationN"),
            },
            {
              id: "head-group",
              label: t("HeadGroupN"),
              description: t("WhereWePresentTheHeadGroupInformationN"),
            },
            {
              id: "head-subgroup",
              label: t("HeadSubGroupN"),
              description: t("WhereWePresentTheHeadSubGroupInformationN"),
            },
          ]
          : [],
    },
    {
      group: "Procurement",
      actions: ("procurement")
          ? [
            {
              id: "requisition",
              label: t("Requisition"),
              description: t("WhereWePresentTheTransactionModeInformationN"),
            },
            {
              id: "new-requisition",
              label: t("NewRequisition"),
              description: t("WhereWePresentTheTransactionModeInformationN"),
            },
          ]
          : [],
    },
  ].filter(group => group.actions.length > 0);
};
export default getSpotlightDropdownData;
