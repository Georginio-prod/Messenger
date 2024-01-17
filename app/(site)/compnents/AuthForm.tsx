'use client';


import {useCallback, useState} from "react";
import {FieldValue, SubmitHandler, useForm} from "react-hook-form";
import Input from "../../components/inputs/Input";
import Button from "@/app/components/Button";

type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () => {
    const[variant, setVariant] = useState<Variant>("LOGIN");
    const[isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() =>{
        if ( variant == 'LOGIN'){
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValue<any>>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    });

    const onSubmit: SubmitHandler<FieldValue<any>> = (data) =>{
        setIsLoading(true);

        if (variant == 'REGISTER'){
            //axios register
        }

        if (variant == 'LOGIN'){
            //nextAuth SignIn
        }
    }

    const socialAction = (action : string) => {
        setIsLoading(true);
        //Next Auth Social Sign In
    }

    return (
        <div
        className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
        >
            <div
            className="
            bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
            "
            >

                <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                >
                    {variant == 'REGISTER' &&(
                    <Input
                        id ="name"
                        label="name"
                        register={register}
                        errors={errors}
                    />
                    )}
                    <Input
                        id ="email"
                        label="email address"
                        type="email"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id ="password"
                        label="password"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                    <div>
                        <button>Test</button>
                    </div>

                </form>

            </div>

        </div>
    );
}

export default AuthForm;