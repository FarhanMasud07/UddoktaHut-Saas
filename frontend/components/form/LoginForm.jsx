"use client"

import { cn } from "@/lib/utils"
import { CustomFormField, FormFieldType } from "../CustomFormField"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValidation } from "@/lib/loginFormValidation"
import { Form } from "../ui/form"
import { useState } from "react"
import SubmitButton from "../common/SubmitButton"
import Link from "next/link"


export function LoginForm({ className, ...props }) {
    const [isLoading, setLoding] = useState(false);

    const form = useForm({
        resolver: zodResolver(LoginFormValidation),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    async function onSubmit({
        email,
        password,
    }) {
        setLoding(true);

        try {
            console.log(email);
            console.log(password);
        } catch (error) {
            console.log(error);
            setLoding(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className={cn("flex flex-col gap-6", className)}
                {...props}
            >
                <div className="flex flex-col items-baseline gap-3">
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                    <p className="text-balance text-sm text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div className="grid gap-6">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="farhan@gmail.com"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"
                    />

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="********"
                        iconSrc="/assets/icons/password.svg"
                        iconAlt="password"

                    />
                    <SubmitButton
                        isLoading={isLoading}
                        className="w-full bg-green-400 hover:bg-[#05f27c] cursor-pointer"
                        loadingMessage="Logging in.."
                    >
                        <span className="font-semibold text-green-900">Login</span>
                    </SubmitButton>
                </div>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline underline-offset-4">
                        Sign up
                    </Link>
                </div>
            </form>
        </Form>
    )
}
