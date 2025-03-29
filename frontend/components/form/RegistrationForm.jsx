"use client"

import { cn } from "@/lib/utils"
import { CustomFormField, FormFieldType } from "../CustomFormField"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form"
import { useState } from "react"
import { passwordRules } from "@/constants/rootConstant"
import { RegistrationFormValidation } from "@/lib/RegistrationValidation"
import { registerUser } from "@/lib/actions/register.action"
import { toast } from "sonner"
import SubmitButton from "../common/SubmitButton"
import Link from "next/link"
import { OtpVerificationModal } from "../common/OtpVerificationModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ComonRegistrationForm } from "./ComonRegistrationForm";

const tabStyle = `
    cursor-pointer
    data-[state=active]:bg-green-400
    data-[state=active]:text-green-900
    data-[state=active]:font-semibold 
    data-[state=active]:ring-2
    data-[state=active]:ring-green-400
    dark:data-[state=active]:ring-offset-0
    data-[state=active]:ring-offset-2
`;

export function RegistrationForm({ className, ...props }) {
    const [isLoading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [identifier, setIdentifier] = useState("");

    const form = useForm({
        resolver: zodResolver(RegistrationFormValidation),
        defaultValues: {
            method: "email",
            name: "",
            email: "",
            password: "",
        }
    });

    async function onSubmit(data) {
        setLoading(true);
        const selectedMethod = form.watch("method");
        try {
            const result = await registerUser(selectedMethod, data);
            if (result && result.success) {
                setShowOtpModal(true);
                setIdentifier(selectedMethod === 'email'
                    ? data.email
                    : data.phoneNumber
                );
                toast(selectedMethod === 'email' ? "Email sended" : "Sms sended", {
                    description: result.message,
                })
            } else {
                toast("Failed", {
                    description: result.message,
                });
            }
        } catch (error) {
            toast("Something went wrong", {
                description: err.message,
            });
        } finally {
            setLoading(false);
        }
    }

    function handleTabChange(value) {
        form.setValue("method", value);
        form.setValue("password", "");
        form.setValue("name", "");
        setPassword("");


        if (value && value === 'phone') {
            form.setValue("phoneNumber", "");
            form.unregister("email");
        } else {
            form.setValue("email", "");
            form.unregister("phoneNumber");
        }
    }

    return (
        <>
            {showOtpModal && <OtpVerificationModal
                setShowOtpModal={setShowOtpModal}
                identifier={identifier}
                selectedMethod={form.watch("method")}
            />}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className={cn("flex flex-col gap-6", className)}
                    {...props}
                >
                    <div className="flex flex-col items-baseline gap-3">
                        <h1 className="text-2xl font-bold">Sign up</h1>
                        <p className="text-balance text-sm text-muted-foreground font-medium">
                            Let’s get started with your <b className="font-bold">7 days free trial</b>
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <Tabs defaultValue="email" className="w-full"
                            onValueChange={handleTabChange}
                        >
                            <TabsList className="w-full">
                                <TabsTrigger value="email" className={tabStyle}>
                                    Email
                                </TabsTrigger>
                                <TabsTrigger value="phone" className={tabStyle}>
                                    Phone
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="email" className="grid gap-6 mt-4">
                                <ComonRegistrationForm
                                    password={password}
                                    setPassword={setPassword}
                                    form={form}
                                    passwordRules={passwordRules}
                                >
                                    <CustomFormField
                                        fieldType={FormFieldType.INPUT}
                                        control={form.control}
                                        name="email"
                                        label="Email"
                                        placeholder="Enter your email address"
                                        iconSrc="/assets/icons/email.svg"
                                        iconAlt="email"
                                    />
                                </ComonRegistrationForm>
                            </TabsContent>

                            <TabsContent value="phone" className="grid gap-6 mt-4">
                                <ComonRegistrationForm
                                    password={password}
                                    setPassword={setPassword}
                                    form={form}
                                    passwordRules={passwordRules}
                                >
                                    <CustomFormField
                                        fieldType={FormFieldType.PHONE_INPUT}
                                        control={form.control}
                                        name="phoneNumber"
                                        label="Phone number"
                                        placeholder="(+880) 162-771889"

                                    />
                                </ComonRegistrationForm>
                            </TabsContent>
                        </Tabs>

                        <SubmitButton
                            isLoading={isLoading}
                            className="w-full bg-green-400 hover:bg-[#05f27c] cursor-pointer"
                            loadingMessage="Enrolling.."
                        >
                            <span className="font-semibold text-green-900">Sign up</span>
                        </SubmitButton>
                    </div>

                    <div className="text-center text-sm">
                        Have an account?{" "}
                        <Link href="/login" className="underline underline-offset-4">
                            Login
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    )
}
