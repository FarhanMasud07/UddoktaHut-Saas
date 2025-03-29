"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { OtpVerify } from "@/lib/actions/otp.action";
import { toast } from "sonner";

export const OtpVerificationModal = ({ setShowOtpModal, identifier, selectedMethod }) => {
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const [passkey, setPasskey] = useState("");
    const [time, setTime] = useState(60);
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        if (time === 0) {
            setTimeUp(true);
            return;
        }

        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);

    }, [time]);

    const closeModal = () => {
        setOpen(false);
        setShowOtpModal(false);
    };

    const validatePasskey = async (e) => {
        e.preventDefault();
        if (passkey) {
            try {
                const result = await OtpVerify({
                    identifier,
                    otp: passkey,
                    selectedMethod
                });
                if (result && result.verified) {
                    setShowOtpModal(false);
                    setOpen(false);
                    router.push(`/onboarding`);
                } else {
                    toast("Failed", {
                        description: "Invalid or expired otp",
                    });
                }
            } catch (error) {
                toast("Something went wrong", {
                    description: err.message,
                });
            }

        }
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="shad-alert-dialog">
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-start justify-between">
                        Otp Verification
                        {timeUp && <Image
                            src="/assets/icons/close.svg"
                            alt="close"
                            width={20}
                            height={20}
                            onClick={() => closeModal()}
                            className="cursor-pointer"
                        />}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        To sign up, please check your {selectedMethod === 'email' ? 'email' : 'phone'} & enter the otp.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <section>
                    <InputOTP
                        maxLength={5}
                        value={passkey}
                        onChange={(value) => setPasskey(value)}
                    >
                        <InputOTPGroup className="shad-otp">
                            <InputOTPSlot className="shad-otp-slot" index={0} />
                            <InputOTPSlot className="shad-otp-slot" index={1} />
                            <InputOTPSlot className="shad-otp-slot" index={2} />
                            <InputOTPSlot className="shad-otp-slot" index={3} />
                            <InputOTPSlot className="shad-otp-slot" index={4} />
                        </InputOTPGroup>
                    </InputOTP>
                </section>
                <p className="text-dark-600 font-medium text-sm">
                    {timeUp ? 'Time is up please try again' : `Time remaining: ${time} seconds`}
                </p>
                <AlertDialogFooter>
                    <AlertDialogAction
                        onClick={(e) => validatePasskey(e)}
                        className="shad-primary-btn w-full hover:bg-[#05f27c] cursor-pointer"
                    >
                        Enter Otp
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
