"use client";

import ButtonUI from "@/ui/ButtonUI";
import CardUI from "@/ui/CardUI";
import InputFieldUI from "@/ui/InputFieldUI";
import React, { useState, useEffect, useRef } from "react";
import { LuLogIn, LuEye, LuEyeOff } from "react-icons/lu";
import { useRouter } from "next/navigation"
import Image from "next/image";
import { signIn } from "next-auth/react";

type Props = {
    callbackUrl?: string;
    error?: string;
}

export default function LoginComponent({ callbackUrl, error }: Props) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [fadeIn, setFadeIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');



    const toggleVisibility = () => setIsVisible(!isVisible);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(async () => {
            await signIn('credentials', {
                email: email,
                password: password,
                callbackUrl: callbackUrl ?? '/dashboard',
                redirect: true
            })
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const containerClassNames = `flex flex-col w-full h-screen justify-center items-center ${fadeIn ? 'fade-in' : ''}`;
    return (
        <div className={containerClassNames}>
            <CardUI
                classNames={"mx-10 w-[80%] md:w-[70%] lg:w-[50%]"}
                bodyClassName="flex flex-col flex-wrap gap-y-8"
            >
                <div className="flex justify-center">
                    <Image
                        src="/assets/UBP_LOGO.svg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                    ></Image>
                </div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center mb-4">
                    ระบบติดตามการหมักก๊าซ UBP
                </h1>
                {!!error && <div className="text-red-500">{error}</div>}
                {error}
                <form onSubmit={onSubmit}>
                    <div className="grid gap-y-4">
                        <div className="">
                            <InputFieldUI type="email" label="Email" onValueChange={(e) => setEmail(e)} /></div>
                        <div className="">
                            <InputFieldUI
                                onValueChange={(e) => setPassword(e)}
                                label="password"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibility}
                                    >
                                        {isVisible ? (
                                            <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <LuEye className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                            />
                        </div>
                    </div>

                    <div className="input_button my-6">
                        <ButtonUI
                            type="submit"
                            color="primary"
                            size="lg"
                            fullWidth
                            isLoading={loading}
                            startContent={loading ? null : <LuLogIn />}
                        >
                            Login
                        </ButtonUI>
                    </div>
                </form>
            </CardUI>
        </div>
    )
}