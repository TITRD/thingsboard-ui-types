import { TranslateService } from '@ngx-translate/core';
export interface RateLimits {
    value: string;
    time: string;
}
export declare enum RateLimitsType {
    DEVICE_MESSAGES = "DEVICE_MESSAGES",
    DEVICE_TELEMETRY_MESSAGES = "DEVICE_TELEMETRY_MESSAGES",
    DEVICE_TELEMETRY_DATA_POINTS = "DEVICE_TELEMETRY_DATA_POINTS",
    TENANT_MESSAGES = "TENANT_MESSAGES",
    TENANT_TELEMETRY_MESSAGES = "TENANT_TELEMETRY_MESSAGES",
    TENANT_TELEMETRY_DATA_POINTS = "TENANT_TELEMETRY_DATA_POINTS",
    TENANT_SERVER_REST_LIMITS_CONFIGURATION = "TENANT_SERVER_REST_LIMITS_CONFIGURATION",
    CUSTOMER_SERVER_REST_LIMITS_CONFIGURATION = "CUSTOMER_SERVER_REST_LIMITS_CONFIGURATION",
    WS_UPDATE_PER_SESSION_RATE_LIMIT = "WS_UPDATE_PER_SESSION_RATE_LIMIT",
    CASSANDRA_QUERY_TENANT_RATE_LIMITS_CONFIGURATION = "CASSANDRA_QUERY_TENANT_RATE_LIMITS_CONFIGURATION",
    TENANT_ENTITY_EXPORT_RATE_LIMIT = "TENANT_ENTITY_EXPORT_RATE_LIMIT",
    TENANT_ENTITY_IMPORT_RATE_LIMIT = "TENANT_ENTITY_IMPORT_RATE_LIMIT"
}
export declare const rateLimitsLabelTranslationMap: Map<RateLimitsType, string>;
export declare const rateLimitsDialogTitleTranslationMap: Map<RateLimitsType, string>;
export declare function stringToRateLimitsArray(rateLimits: string): Array<RateLimits>;
export declare function rateLimitsArrayToString(rateLimits: Array<RateLimits>): string;
export declare function rateLimitsArrayToHtml(translate: TranslateService, rateLimitsArray: Array<RateLimits>): string;
