import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/Authentication";
import axios from "axios";

interface SignInFormValues {
    email: string;
    password: string;
}

interface ResponseErrors extends SignInFormValues {
    form?: string;
}

export const SignIn = () => {
    const navigate = useNavigate();
    const user = useContext(AuthenticationContext);
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
        try {
            const { data: response } = await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/login`,
                { email, password }
            );

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
                        newErrors[error.path[0] as keyof SignInFormValues] = error.message;
                    });
                }

                setResponseErrors(newErrors);
                return;
            }

            if (response.access_token && response.refresh_token) {
                Object.keys(response).forEach(key => localStorage.setItem(key, response[key]));

                user.update({
                    ...user,
                    ...response,
                });

                navigate("/");
            }
        } catch (error: any) {
            setResponseErrors({
                email: "",
                password: "",
                form: error.response.data.error,
            });
        }
    };

    return (
        <div className="page-sign-in">
            <div className="page-sign-in__container">
                <h1 className="page-sign-in__title">Sign In</h1>

                <form className="page-sign-in__form" onSubmit={handleSubmit(login)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" data-lpignore="true" {...register("email", { required: true })} />
                    {errors.email || responseErrors.email ? (
                        <p>{(errors.email || responseErrors.email) as string}</p>
                    ) : null}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" data-lpignore="true" {...register("password", { required: true, })} />
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