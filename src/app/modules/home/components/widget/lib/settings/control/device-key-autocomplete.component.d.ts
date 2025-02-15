import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { Observable } from 'rxjs';
import { IAliasController } from '@core/api/widget-api.models';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
export declare class DeviceKeyAutocompleteComponent extends PageComponent implements OnInit, ControlValueAccessor, OnChanges {
    protected store: Store<AppState>;
    private translate;
    private entityService;
    private fb;
    keyInput: ElementRef;
    disabled: boolean;
    aliasController: IAliasController;
    targetDeviceAliasId: string;
    keyType: DataKeyType;
    attributeLabel: string;
    timeseriesLabel: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    dataKeyType: typeof DataKeyType;
    private modelValue;
    private propagateChange;
    deviceKeyFormGroup: UntypedFormGroup;
    filteredKeys: Observable<Array<string>>;
    keySearchText: string;
    private latestKeySearchResult;
    private keysFetchObservable$;
    constructor(store: Store<AppState>, translate: TranslateService, entityService: EntityService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    clearKey(): void;
    onFocus(): void;
    private updateModel;
    private clearKeysCache;
    private fetchKeys;
    private getKeys;
    private fetchEntityKeys;
    private createKeyFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceKeyAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceKeyAutocompleteComponent, "tb-device-key-autocomplete", never, { "disabled": "disabled"; "aliasController": "aliasController"; "targetDeviceAliasId": "targetDeviceAliasId"; "keyType": "keyType"; "attributeLabel": "attributeLabel"; "timeseriesLabel": "timeseriesLabel"; "required": "required"; }, {}, never, never, false, never>;
}
