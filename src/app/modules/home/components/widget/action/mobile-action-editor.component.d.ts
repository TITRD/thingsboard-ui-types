import { OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { WidgetMobileActionDescriptor, WidgetMobileActionType } from '@shared/models/widget.models';
import { JsFuncComponent } from '@shared/components/js-func.component';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class MobileActionEditorComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    private widgetService;
    jsFuncComponents: QueryList<JsFuncComponent>;
    mobileActionTypes: string[];
    mobileActionTypeTranslations: Map<WidgetMobileActionType, string>;
    mobileActionType: typeof WidgetMobileActionType;
    customActionEditorCompleter: import("../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    mobileActionFormGroup: UntypedFormGroup;
    mobileActionTypeFormGroup: UntypedFormGroup;
    functionScopeVariables: string[];
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, widgetService: WidgetService);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetMobileActionDescriptor | null): void;
    private updateModel;
    private updateMobileActionType;
    validateOnSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileActionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileActionEditorComponent, "tb-mobile-action-editor", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
