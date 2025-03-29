"use client";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const FormFieldType = {
    INPUT: "input",
    TEXTAREA: "textarea",
    CHECKBOX: "checkbox",
    PHONE_INPUT: "phoneInput",
    DATE_PICKER: "datePicker",
    SELECT: "select",
    SKELETON: "skeleton",
}

const RenderField = ({ field, props }) => {
    const {
        fieldType,
        iconSrc,
        iconAlt,
        placeholder,
        dateFormat,
        showTimeSelect,
        renderSkeleton,
        children,
        inputProps,
        name
    } = props;

    const isPassword = name === 'password';
    const [showPassword, setShowPassword] = useState(false);

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="relative flex rounded-md border">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            width={22}
                            height={22}
                            alt={iconAlt || "icon"}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            {...(inputProps || {})}
                            type={isPassword ? (!showPassword ? "password" : "text") : 'text'}
                            className="shad-input border-0 placeholder:text-dark-700/95"
                        />
                    </FormControl>

                    {isPassword && (
                        <button type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
                        >
                            {!showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    )}
                </div>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        placeholder={props.placeholder}
                        {...field}
                        className="shad-textArea"
                        disabled={props.disabled}
                    />
                </FormControl>
            );
        case FormFieldType.CHECKBOX:
            return (
                <FormControl>
                    <div className="flex items-center gap-4">
                        <Checkbox
                            id={props.name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                        <label htmlFor={props.name} className="checkbox-label">
                            {props.label}
                        </label>
                    </div>
                </FormControl>
            );
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry="BD"
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value}
                        onChange={(phoneNumber) => {
                            if (phoneNumber) {
                                const cleanedPhoneNumber = phoneNumber.replace(/\s+/g, "");
                                field.onChange(cleanedPhoneNumber)
                            }
                        }}
                        countryCallingCodeEditable={false}
                        className="input-phone"
                    />
                </FormControl>
            );
        case FormFieldType.DATE_PICKER:
            return (
                <div className="flex rounded-md border ">
                    <Image
                        src="/assets/icons/calendar.svg"
                        height={24}
                        width={24}
                        alt="user"
                        className="ml-2"
                    />
                    <FormControl>
                        <ReactDatePicker
                            showTimeSelect={showTimeSelect ?? false}
                            selected={field.value}
                            onChange={(date) => field.onChange(date)}
                            timeInputLabel="Time:"
                            dateFormat={dateFormat ?? "MM/dd/yyyy"}
                            wrapperClassName="date-picker"
                        />
                    </FormControl>
                </div>
            );
        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="shad-select-trigger">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="shad-select-content">
                            {children}
                        </SelectContent>
                    </Select>
                </FormControl>
            );
        case FormFieldType.SKELETON:
            return renderSkeleton ? renderSkeleton(field) : null;
        default:
            break;
    }
};

export function CustomFormField(props) {
    const { control, fieldType, name, label } = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel className="data-[error=true]:text-black font-semibold">
                            {label}
                        </FormLabel>
                    )}
                    <RenderField field={field} props={props} />
                    <FormMessage className="text-red-400" />
                </FormItem>
            )}
        />
    )
}