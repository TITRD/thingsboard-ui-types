import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { BranchInfo, EntityDataDiff, EntityDataInfo, EntityLoadError, EntityVersion, VersionCreateRequest, VersionCreationResult, VersionLoadRequest, VersionLoadResult } from '@shared/models/vc.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class EntitiesVersionControlService {
    private http;
    private translate;
    private sanitizer;
    private store;
    branchList: Array<BranchInfo>;
    constructor(http: HttpClient, translate: TranslateService, sanitizer: DomSanitizer, store: Store<AppState>);
    clearBranchList(): void;
    listBranches(): Observable<Array<BranchInfo>>;
    getEntityDataInfo(externalEntityId: EntityId, versionId: string, config?: RequestConfig): Observable<EntityDataInfo>;
    saveEntitiesVersion(request: VersionCreateRequest, config?: RequestConfig): Observable<VersionCreationResult>;
    private getVersionCreateRequestStatus;
    listEntityVersions(pageLink: PageLink, branch: string, externalEntityId: EntityId, config?: RequestConfig): Observable<PageData<EntityVersion>>;
    listEntityTypeVersions(pageLink: PageLink, branch: string, entityType: EntityType, config?: RequestConfig): Observable<PageData<EntityVersion>>;
    listVersions(pageLink: PageLink, branch: string, config?: RequestConfig): Observable<PageData<EntityVersion>>;
    loadEntitiesVersion(request: VersionLoadRequest, config?: RequestConfig): Observable<VersionLoadResult>;
    private getVersionLoadRequestStatus;
    compareEntityDataToVersion(entityId: EntityId, versionId: string, config?: RequestConfig): Observable<EntityDataDiff>;
    entityLoadErrorToMessage(entityLoadError: EntityLoadError): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitiesVersionControlService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntitiesVersionControlService>;
}
