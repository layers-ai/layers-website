/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WaitlistCountUpdateFormInputValues = {
    count?: number;
};
export declare type WaitlistCountUpdateFormValidationValues = {
    count?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WaitlistCountUpdateFormOverridesProps = {
    WaitlistCountUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WaitlistCountUpdateFormProps = React.PropsWithChildren<{
    overrides?: WaitlistCountUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    waitlistCount?: any;
    onSubmit?: (fields: WaitlistCountUpdateFormInputValues) => WaitlistCountUpdateFormInputValues;
    onSuccess?: (fields: WaitlistCountUpdateFormInputValues) => void;
    onError?: (fields: WaitlistCountUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WaitlistCountUpdateFormInputValues) => WaitlistCountUpdateFormInputValues;
    onValidate?: WaitlistCountUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WaitlistCountUpdateForm(props: WaitlistCountUpdateFormProps): React.ReactElement;
