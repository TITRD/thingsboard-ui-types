import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdminSettings, RepositorySettings, MailServerSettings, SecuritySettings, TestSmsRequest, UpdateMessage, AutoCommitSettings } from '@shared/models/settings.models';
import { EntitiesVersionControlService } from '@core/http/entities-version-control.service';
import * as i0 from "@angular/core";
export declare class AdminService {
    private http;
    private entitiesVersionControlService;
    constructor(http: HttpClient, entitiesVersionControlService: EntitiesVersionControlService);
    getAdminSettings<T>(key: string, config?: RequestConfig): Observable<AdminSettings<T>>;
    saveAdminSettings<T>(adminSettings: AdminSettings<T>, config?: RequestConfig): Observable<AdminSettings<T>>;
    sendTestMail(adminSettings: AdminSettings<MailServerSettings>, config?: RequestConfig): Observable<void>;
    sendTestSms(testSmsRequest: TestSmsRequest, config?: RequestConfig): Observable<void>;
    getSecuritySettings(config?: RequestConfig): Observable<SecuritySettings>;
    saveSecuritySettings(securitySettings: SecuritySettings, config?: RequestConfig): Observable<SecuritySettings>;
    getRepositorySettings(config?: RequestConfig): Observable<RepositorySettings>;
    saveRepositorySettings(repositorySettings: RepositorySettings, config?: RequestConfig): Observable<RepositorySettings>;
    deleteRepositorySettings(config?: RequestConfig): Observable<Object>;
    checkRepositoryAccess(repositorySettings: RepositorySettings, config?: RequestConfig): Observable<void>;
    getAutoCommitSettings(config?: RequestConfig): Observable<AutoCommitSettings>;
    autoCommitSettingsExists(config?: RequestConfig): Observable<boolean>;
    saveAutoCommitSettings(autoCommitSettings: AutoCommitSettings, config?: RequestConfig): Observable<AutoCommitSettings>;
    deleteAutoCommitSettings(config?: RequestConfig): Observable<Object>;
    checkUpdates(config?: RequestConfig): Observable<UpdateMessage>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminService>;
}
