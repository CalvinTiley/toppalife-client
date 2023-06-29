import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

interface SignInFormValues {
    email: string;
    password: string;
}

interface ResponseErrors {
    email: string;
    password: string;
    form?: string;
}

export const SignIn = () => {
    const [responseErrors, setResponseErrors] = useState<ResponseErrors>({
        email: "",
        form: "",
        password: "",
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormValues>();

    const login: SubmitHandler<SignInFormValues> = async ({
        email,
        password
    }) => {
        const response = await (await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
        })).json();

        if (response.error || response.errors) {
            const newErrors: ResponseErrors = {
                email: "",
                form: "",
                password: "",
            };

            if (response.error) {
                newErrors.form = response.error;
            }

            if (response.errors) {
                response.errors.forEach((error: { message: string, path: string[] }) => {
                    newErrors[error.path[0] as "email" | "password"] = error.message;
                });
            }

            setResponseErrors(newErrors);
        }
    };

    return (
        <div className="page-sign-in">
            <div className="page-sign-in__container">
                <h1 className="page-sign-in__title">Login</h1>

                <form className="page-sign-in__form" onSubmit={handleSubmit(login)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", { required: true })} />
                    {errors.email || responseErrors.email ? (
                        <p>{(errors.email || responseErrors.email) as string}</p>
                    ) : null}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password", { required: true, })} />
                    {errors.password || responseErrors.password ? (
                        <p>{(errors.password || responseErrors.password) as string}</p>
                    ) : null}

                    <Button type="submit">Sign In</Button>
                    {responseErrors.form ? (
                        <p>{(responseErrors.form) as string}</p>
                    ) : null}

                    <Link to="/register">Or create an account</Link>
                </form>
            </div>
        </div>
    );
}