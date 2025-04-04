"use client"

import { useForm } from "react-hook-form";
import { Form } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardProceedFormValidation } from "@/lib/validation/OnboardProceedFormValidation";
import { useEffect } from "react";
import { useStepper } from "@/app/context/StepperContext";
import { getUserId } from "@/lib/actions/getHeadersData.action";
import { toast } from "sonner";
import { OnboardProceed } from "@/lib/actions/onboardProceed.action";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { CustomFormField, FormFieldType } from "../CustomFormField";
import { SelectItem } from "../ui/select";
import { businessTypes } from "@/constants/rootConstant";
import { useTopLoader } from "nextjs-toploader";

const OnboardProceedForm = ({ role }) => {
    const router = useRouter();
    const loader = useTopLoader();

    const { setSubmitForm, setIsLoading, setIsFullyComplete } = useStepper();

    const form = useForm({
        resolver: zodResolver(OnboardProceedFormValidation),
        defaultValues: {
            userId: null,
            roles: null,
            storeName: '',
            storeType: '',
            storeAddress: ''
        }
    });

    useEffect(() => {
        async function fetchUserId() {
            const id = await getUserId();
            form.reset({ userId: Number(id), roles: Number(role) })
        }
        fetchUserId();
    }, [form]);


    useEffect(() => {
        setSubmitForm(() => form.handleSubmit(onProceedSubmit));
    }, [setSubmitForm]);


    const onProceedSubmit = async (data) => {
        setIsLoading(true);
        loader.start();
        try {
            const payload = {
                ...data,
                roles: [data.roles]
            }
            const result = await OnboardProceed(payload);

            if (!result.onboarded) return toast("Failed", {
                description: result.message,
            });
            router.push('/dashboard');
            setIsFullyComplete(true);

        } catch (err) {
            toast("Something went wrong", {
                description: err.message,
            });
            setIsFullyComplete(false);
        } finally {
            setIsLoading(false);
            loader.done();
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onProceedSubmit)}
                className={cn("flex flex-col gap-6 py-6")}
            >
                <section className="flex flex-wrap gap-4">
                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="storeType"
                        label="Business Type"
                        placeholder="Select business type"
                    >
                        {businessTypes.map((business, i) => (
                            <SelectItem key={business.name + i} value={business.key}>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <p>{business.name}</p>
                                </div>
                            </SelectItem>
                        ))}
                    </CustomFormField>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="storeName"
                    label="Business Name"
                    placeholder="Enter your business name"
                />
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="storeAddress"
                    label="Business Address"
                    placeholder="Enter your business address"
                />
            </form>
        </Form>
    )
}

export default OnboardProceedForm