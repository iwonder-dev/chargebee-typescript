import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Invoice extends Model {
  public id: string;
  public po_number?: string;
  public customer_id: string;
  public subscription_id?: string;
  public recurring: boolean;
  public status: string;
  public vat_number?: string;
  public price_type: string;
  public date?: number;
  public due_date?: number;
  public net_term_days?: number;
  public currency_code: string;
  public total?: number;
  public amount_paid?: number;
  public amount_adjusted?: number;
  public write_off_amount?: number;
  public credits_applied?: number;
  public amount_due?: number;
  public paid_at?: number;
  public dunning_status?: string;
  public next_retry_at?: number;
  public voided_at?: number;
  public resource_version?: number;
  public updated_at?: number;
  public sub_total: number;
  public sub_total_in_local_currency?: number;
  public total_in_local_currency?: number;
  public local_currency_code?: string;
  public tax: number;
  public first_invoice?: boolean;
  public has_advance_charges?: boolean;
  public term_finalized: boolean;
  public is_gifted: boolean;
  public expected_payment_date?: number;
  public amount_to_collect?: number;
  public round_off_amount?: number;
  public line_items?: Array<resources.InvoiceLineItem>;
  public discounts?: Array<resources.InvoiceDiscount>;
  public line_item_discounts?: Array<resources.InvoiceLineItemDiscount>;
  public taxes?: Array<resources.InvoiceTax>;
  public line_item_taxes?: Array<resources.InvoiceLineItemTax>;
  public line_item_tiers?: Array<resources.InvoiceLineItemTier>;
  public linked_payments?: Array<resources.InvoiceLinkedPayment>;
  public dunning_attempts?: Array<resources.InvoiceDunningAttempt>;
  public applied_credits?: Array<resources.InvoiceAppliedCredit>;
  public adjustment_credit_notes?: Array<resources.InvoiceAdjustmentCreditNote>;
  public issued_credit_notes?: Array<resources.InvoiceIssuedCreditNote>;
  public linked_orders?: Array<resources.InvoiceLinkedOrder>;
  public notes?: Array<resources.InvoiceNote>;
  public shipping_address?: resources.InvoiceShippingAddress;
  public billing_address?: resources.InvoiceBillingAddress;
  public payment_owner?: string;
  public void_reason_code?: string;
  public deleted: boolean;

  

  // OPERATIONS
  //-----------

  public static create(params?: _invoice.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static charge(params?: _invoice.charge_params) {
    return new RequestWrapper([params], {
      'methodName': 'charge',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/charge',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static charge_addon(params?: _invoice.charge_addon_params) {
    return new RequestWrapper([params], {
      'methodName': 'charge_addon',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/charge_addon',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static stop_dunning(invoice_id: string, params?: _invoice.stop_dunning_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'stop_dunning',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/stop_dunning',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static import_invoice(params?: _invoice.import_invoice_params) {
    return new RequestWrapper([params], {
      'methodName': 'import_invoice',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/import_invoice',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static apply_payments(invoice_id: string, params?: _invoice.apply_payments_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'apply_payments',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/apply_payments',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static apply_credits(invoice_id: string, params?: _invoice.apply_credits_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'apply_credits',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/apply_credits',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _invoice.invoice_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static invoices_for_customer(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'invoices_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/invoices',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static invoices_for_subscription(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'invoices_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/invoices',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static retrieve(invoice_id: string, params?: any) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static pdf(invoice_id: string, params?: _invoice.pdf_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/pdf',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static add_charge(invoice_id: string, params?: _invoice.add_charge_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'add_charge',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/add_charge',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static add_addon_charge(invoice_id: string, params?: _invoice.add_addon_charge_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'add_addon_charge',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/add_addon_charge',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static close(invoice_id: string, params?: _invoice.close_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'close',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/close',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static collect_payment(invoice_id: string, params?: _invoice.collect_payment_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'collect_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/collect_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static record_payment(invoice_id: string, params?: _invoice.record_payment_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'record_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/record_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static refund(invoice_id: string, params?: _invoice.refund_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'refund',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static record_refund(invoice_id: string, params?: _invoice.record_refund_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'record_refund',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/record_refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static remove_payment(invoice_id: string, params?: _invoice.remove_payment_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'remove_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/remove_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static remove_credit_note(invoice_id: string, params?: _invoice.remove_credit_note_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'remove_credit_note',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/remove_credit_note',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static void_invoice(invoice_id: string, params?: _invoice.void_invoice_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'void_invoice',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/void',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static write_off(invoice_id: string, params?: _invoice.write_off_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'write_off',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/write_off',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(invoice_id: string, params?: _invoice.delete_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_details(invoice_id: string, params?: _invoice.update_details_params) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'update_details',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/update_details',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Invoice



  // REQUEST PARAMS
  //---------------

export namespace _invoice {
  export interface create_params {
    customer_id: string;
    currency_code?: string;
    coupon?: string;
    po_number?: string;
    authorization_transaction_id?: string;
    payment_source_id?: string;
    auto_collection?: string;
    replace_primary_payment_source?: boolean;
    shipping_address?: shipping_address_create_params;
    payment_intent?: payment_intent_create_params;
    addons?: Array<addons_create_params>;
    charges?: Array<charges_create_params>;
  }
  export interface charge_params {
    customer_id?: string;
    subscription_id?: string;
    currency_code?: string;
    amount: number;
    description: string;
    date_from?: number;
    date_to?: number;
    coupon?: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    po_number?: string;
    payment_source_id?: string;
  }
  export interface charge_addon_params {
    customer_id?: string;
    subscription_id?: string;
    addon_id: string;
    addon_quantity?: number;
    addon_unit_price?: number;
    date_from?: number;
    date_to?: number;
    coupon?: string;
    po_number?: string;
    payment_source_id?: string;
  }
  export interface stop_dunning_params {
    comment?: string;
  }
  export interface import_invoice_params {
    id: string;
    currency_code?: string;
    customer_id?: string;
    subscription_id?: string;
    po_number?: string;
    price_type?: string;
    tax_override_reason?: string;
    vat_number?: string;
    date: number;
    total: number;
    round_off?: number;
    status?: string;
    due_date?: number;
    net_term_days?: number;
    use_for_proration?: boolean;
    billing_address?: billing_address_import_invoice_params;
    shipping_address?: shipping_address_import_invoice_params;
    line_items?: Array<line_items_import_invoice_params>;
    line_item_tiers?: Array<line_item_tiers_import_invoice_params>;
    discounts?: Array<discounts_import_invoice_params>;
    taxes?: Array<taxes_import_invoice_params>;
    payments?: Array<payments_import_invoice_params>;
    notes?: Array<notes_import_invoice_params>;
  }
  export interface apply_payments_params {
    comment?: string;
    transactions?: Array<transactions_apply_payments_params>;
  }
  export interface apply_credits_params {
    comment?: string;
    credit_notes?: Array<credit_notes_apply_credits_params>;
  }
  export interface invoice_list_params {
    limit?: number;
    offset?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    paid_on_after?: number;
    include_deleted?: boolean;
    id?: filter._string;
    subscription_id?: filter._string;
    customer_id?: filter._string;
    recurring?: filter._boolean;
    status?: filter._enum;
    price_type?: filter._enum;
    date?: filter._timestamp;
    paid_at?: filter._timestamp;
    total?: filter._number;
    amount_paid?: filter._number;
    amount_adjusted?: filter._number;
    credits_applied?: filter._number;
    amount_due?: filter._number;
    dunning_status?: filter._enum;
    payment_owner?: filter._string;
    updated_at?: filter._timestamp;
    voided_at?: filter._timestamp;
    void_reason_code?: filter._string;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface pdf_params {
    disposition_type?: string;
  }
  export interface add_charge_params {
    amount: number;
    description: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    comment?: string;
    line_item?: line_item_add_charge_params;
  }
  export interface add_addon_charge_params {
    addon_id: string;
    addon_quantity?: number;
    addon_unit_price?: number;
    comment?: string;
    line_item?: line_item_add_addon_charge_params;
  }
  export interface close_params {
    comment?: string;
  }
  export interface collect_payment_params {
    amount?: number;
    authorization_transaction_id?: string;
    payment_source_id?: string;
    comment?: string;
  }
  export interface record_payment_params {
    comment?: string;
    transaction?: transaction_record_payment_params;
  }
  export interface refund_params {
    refund_amount?: number;
    comment?: string;
    customer_notes?: string;
    credit_note?: credit_note_refund_params;
  }
  export interface record_refund_params {
    comment?: string;
    customer_notes?: string;
    transaction?: transaction_record_refund_params;
    credit_note?: credit_note_record_refund_params;
  }
  export interface remove_payment_params {
    transaction?: transaction_remove_payment_params;
  }
  export interface remove_credit_note_params {
    credit_note?: credit_note_remove_credit_note_params;
  }
  export interface void_invoice_params {
    comment?: string;
    void_reason_code?: string;
  }
  export interface write_off_params {
    comment?: string;
  }
  export interface delete_params {
    comment?: string;
    claim_credits?: boolean;
  }
  export interface update_details_params {
    vat_number?: string;
    po_number?: string;
    comment?: string;
    billing_address?: billing_address_update_details_params;
    shipping_address?: shipping_address_update_details_params;
  }
  export interface shipping_address_create_params {
    first_name?: string;
  }
  export interface shipping_address_create_params {
    last_name?: string;
  }
  export interface shipping_address_create_params {
    email?: string;
  }
  export interface shipping_address_create_params {
    company?: string;
  }
  export interface shipping_address_create_params {
    phone?: string;
  }
  export interface shipping_address_create_params {
    line1?: string;
  }
  export interface shipping_address_create_params {
    line2?: string;
  }
  export interface shipping_address_create_params {
    line3?: string;
  }
  export interface shipping_address_create_params {
    city?: string;
  }
  export interface shipping_address_create_params {
    state_code?: string;
  }
  export interface shipping_address_create_params {
    state?: string;
  }
  export interface shipping_address_create_params {
    zip?: string;
  }
  export interface shipping_address_create_params {
    country?: string;
  }
  export interface shipping_address_create_params {
    validation_status?: string;
  }
  export interface payment_intent_create_params {
    id?: string;
  }
  export interface payment_intent_create_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_params {
    gw_token?: string;
  }
  export interface payment_intent_create_params {
    reference_id?: string;
  }
  export interface payment_intent_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface addons_create_params {
    id?: string;
  }
  export interface addons_create_params {
    quantity?: number;
  }
  export interface addons_create_params {
    unit_price?: number;
  }
  export interface addons_create_params {
    date_from?: number;
  }
  export interface addons_create_params {
    date_to?: number;
  }
  export interface charges_create_params {
    amount?: number;
  }
  export interface charges_create_params {
    description?: string;
  }
  export interface charges_create_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_params {
    avalara_service_type?: number;
  }
  export interface charges_create_params {
    date_from?: number;
  }
  export interface charges_create_params {
    date_to?: number;
  }
  export interface billing_address_import_invoice_params {
    first_name?: string;
  }
  export interface billing_address_import_invoice_params {
    last_name?: string;
  }
  export interface billing_address_import_invoice_params {
    email?: string;
  }
  export interface billing_address_import_invoice_params {
    company?: string;
  }
  export interface billing_address_import_invoice_params {
    phone?: string;
  }
  export interface billing_address_import_invoice_params {
    line1?: string;
  }
  export interface billing_address_import_invoice_params {
    line2?: string;
  }
  export interface billing_address_import_invoice_params {
    line3?: string;
  }
  export interface billing_address_import_invoice_params {
    city?: string;
  }
  export interface billing_address_import_invoice_params {
    state_code?: string;
  }
  export interface billing_address_import_invoice_params {
    state?: string;
  }
  export interface billing_address_import_invoice_params {
    zip?: string;
  }
  export interface billing_address_import_invoice_params {
    country?: string;
  }
  export interface billing_address_import_invoice_params {
    validation_status?: string;
  }
  export interface shipping_address_import_invoice_params {
    first_name?: string;
  }
  export interface shipping_address_import_invoice_params {
    last_name?: string;
  }
  export interface shipping_address_import_invoice_params {
    email?: string;
  }
  export interface shipping_address_import_invoice_params {
    company?: string;
  }
  export interface shipping_address_import_invoice_params {
    phone?: string;
  }
  export interface shipping_address_import_invoice_params {
    line1?: string;
  }
  export interface shipping_address_import_invoice_params {
    line2?: string;
  }
  export interface shipping_address_import_invoice_params {
    line3?: string;
  }
  export interface shipping_address_import_invoice_params {
    city?: string;
  }
  export interface shipping_address_import_invoice_params {
    state_code?: string;
  }
  export interface shipping_address_import_invoice_params {
    state?: string;
  }
  export interface shipping_address_import_invoice_params {
    zip?: string;
  }
  export interface shipping_address_import_invoice_params {
    country?: string;
  }
  export interface shipping_address_import_invoice_params {
    validation_status?: string;
  }
  export interface line_items_import_invoice_params {
    id?: string;
  }
  export interface line_items_import_invoice_params {
    date_from?: number;
  }
  export interface line_items_import_invoice_params {
    date_to?: number;
  }
  export interface line_items_import_invoice_params {
    description: string;
  }
  export interface line_items_import_invoice_params {
    unit_amount?: number;
  }
  export interface line_items_import_invoice_params {
    quantity?: number;
  }
  export interface line_items_import_invoice_params {
    amount?: number;
  }
  export interface line_items_import_invoice_params {
    entity_type?: string;
  }
  export interface line_items_import_invoice_params {
    entity_id?: string;
  }
  export interface line_items_import_invoice_params {
    item_level_discount1_entity_id?: string;
  }
  export interface line_items_import_invoice_params {
    item_level_discount1_amount?: number;
  }
  export interface line_items_import_invoice_params {
    item_level_discount2_entity_id?: string;
  }
  export interface line_items_import_invoice_params {
    item_level_discount2_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax1_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax1_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax2_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax2_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax3_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax3_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax4_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax4_amount?: number;
  }
  export interface line_item_tiers_import_invoice_params {
    line_item_id: string;
  }
  export interface line_item_tiers_import_invoice_params {
    starting_unit: number;
  }
  export interface line_item_tiers_import_invoice_params {
    ending_unit: number;
  }
  export interface line_item_tiers_import_invoice_params {
    quantity_used: number;
  }
  export interface line_item_tiers_import_invoice_params {
    unit_amount: number;
  }
  export interface discounts_import_invoice_params {
    entity_type: string;
  }
  export interface discounts_import_invoice_params {
    entity_id?: string;
  }
  export interface discounts_import_invoice_params {
    description?: string;
  }
  export interface discounts_import_invoice_params {
    amount: number;
  }
  export interface taxes_import_invoice_params {
    name: string;
  }
  export interface taxes_import_invoice_params {
    rate: number;
  }
  export interface taxes_import_invoice_params {
    amount?: number;
  }
  export interface taxes_import_invoice_params {
    description?: string;
  }
  export interface taxes_import_invoice_params {
    juris_type?: string;
  }
  export interface taxes_import_invoice_params {
    juris_name?: string;
  }
  export interface taxes_import_invoice_params {
    juris_code?: string;
  }
  export interface payments_import_invoice_params {
    amount: number;
  }
  export interface payments_import_invoice_params {
    payment_method: string;
  }
  export interface payments_import_invoice_params {
    date?: number;
  }
  export interface payments_import_invoice_params {
    reference_number?: string;
  }
  export interface notes_import_invoice_params {
    entity_type?: string;
  }
  export interface notes_import_invoice_params {
    entity_id?: string;
  }
  export interface notes_import_invoice_params {
    note?: string;
  }
  export interface transactions_apply_payments_params {
    id?: string;
  }
  export interface credit_notes_apply_credits_params {
    id?: string;
  }
  export interface line_item_add_charge_params {
    date_from?: number;
  }
  export interface line_item_add_charge_params {
    date_to?: number;
  }
  export interface line_item_add_addon_charge_params {
    date_from?: number;
  }
  export interface line_item_add_addon_charge_params {
    date_to?: number;
  }
  export interface transaction_record_payment_params {
    amount?: number;
  }
  export interface transaction_record_payment_params {
    payment_method: string;
  }
  export interface transaction_record_payment_params {
    reference_number?: string;
  }
  export interface transaction_record_payment_params {
    id_at_gateway?: string;
  }
  export interface transaction_record_payment_params {
    status?: string;
  }
  export interface transaction_record_payment_params {
    date?: number;
  }
  export interface transaction_record_payment_params {
    error_code?: string;
  }
  export interface transaction_record_payment_params {
    error_text?: string;
  }
  export interface credit_note_refund_params {
    reason_code?: string;
  }
  export interface transaction_record_refund_params {
    amount?: number;
  }
  export interface transaction_record_refund_params {
    payment_method: string;
  }
  export interface transaction_record_refund_params {
    reference_number?: string;
  }
  export interface transaction_record_refund_params {
    date: number;
  }
  export interface credit_note_record_refund_params {
    reason_code?: string;
  }
  export interface transaction_remove_payment_params {
    id: string;
  }
  export interface credit_note_remove_credit_note_params {
    id: string;
  }
  export interface billing_address_update_details_params {
    first_name?: string;
  }
  export interface billing_address_update_details_params {
    last_name?: string;
  }
  export interface billing_address_update_details_params {
    email?: string;
  }
  export interface billing_address_update_details_params {
    company?: string;
  }
  export interface billing_address_update_details_params {
    phone?: string;
  }
  export interface billing_address_update_details_params {
    line1?: string;
  }
  export interface billing_address_update_details_params {
    line2?: string;
  }
  export interface billing_address_update_details_params {
    line3?: string;
  }
  export interface billing_address_update_details_params {
    city?: string;
  }
  export interface billing_address_update_details_params {
    state_code?: string;
  }
  export interface billing_address_update_details_params {
    state?: string;
  }
  export interface billing_address_update_details_params {
    zip?: string;
  }
  export interface billing_address_update_details_params {
    country?: string;
  }
  export interface billing_address_update_details_params {
    validation_status?: string;
  }
  export interface shipping_address_update_details_params {
    first_name?: string;
  }
  export interface shipping_address_update_details_params {
    last_name?: string;
  }
  export interface shipping_address_update_details_params {
    email?: string;
  }
  export interface shipping_address_update_details_params {
    company?: string;
  }
  export interface shipping_address_update_details_params {
    phone?: string;
  }
  export interface shipping_address_update_details_params {
    line1?: string;
  }
  export interface shipping_address_update_details_params {
    line2?: string;
  }
  export interface shipping_address_update_details_params {
    line3?: string;
  }
  export interface shipping_address_update_details_params {
    city?: string;
  }
  export interface shipping_address_update_details_params {
    state_code?: string;
  }
  export interface shipping_address_update_details_params {
    state?: string;
  }
  export interface shipping_address_update_details_params {
    zip?: string;
  }
  export interface shipping_address_update_details_params {
    country?: string;
  }
  export interface shipping_address_update_details_params {
    validation_status?: string;
  }
}