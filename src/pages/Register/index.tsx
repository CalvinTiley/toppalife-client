import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../../components/Button";
import { AuthenticationContext } from "../../contexts/Authentication";

interface RegisterFormValues {
    confirm_password: string;
    email: string;
    name: string;
    password: string;
}

interface ResponseErrors extends RegisterFormValues {
    form?: string;
}

export const Register = () => {
    const { update: updateUser } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    const [responseErrors, setResponseErrors] = useState<ResponseErrors>({
        name: "",
        email: "",
        form: "",
        password: "",
        confirm_password: "",
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    const registerHandler: SubmitHandler<RegisterFormValues> = async ({
        confirm_password,
        email,
        name,
        password
    }) => {
        try {
            const { data: response } = await axios.post(
                `${import.meta.env.VITE_API_URL}/users/register`,
                { email, password, name, confirm_password },
            );

            if (response.error || response.errors) {
                const newErrors: ResponseErrors = {
                    confirm_password: "",
                    name: "",
                    email: "",
                    form: "",
                    password: "",
                };

                if (response.error) {
                    newErrors.form = response.error;
                }

                if (response.errors) {
                    response.errors.forEach((error: { message: string, path: string[] }) => {
                        newErrors[error.path[0] as keyof RegisterFormValues] = error.message;
                    });
                }

                setResponseErrors(newErrors);

                return;
            }

            if (response.access_token && response.refresh_token && response.email && response.name) {
                Object.keys(response).forEach(key => localStorage.setItem(key, response[key]));
                updateUser(response);

                navigate("/");
            }
        } catch (error: any) {
            setResponseErrors({
                confirm_password: "",
                name: "",
                email: "",
                form: error.response?.data?.error || error.response?.data?.errors[0].message,
                password: "",
            });
        }
    };

    return (
        <div className="page-register">
            <div className="page-register__container">
                <h1 className="page-register__title">Register</h1>

                <form className="page-register__form" onSubmit={handleSubmit(registerHandler)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" data-lpignore="true" {...register("name", { required: true })} />
                    {errors.name || responseErrors.name ? (
                        <p>{(errors.name || responseErrors.name) as string}</p>
                    ) : null}

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

                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" id="confirm_password" data-lpignore="true" {...register("confirm_password", { required: true, })} />
                    {errors.confirm_password || responseErrors.confirm_password ? (
                        <p>{(errors.confirm_password || responseErrors.confirm_password) as string}</p>
                    ) : null}

                    <Button type="submit">Register</Button>
                    {responseErrors.form ? (
                        <p>{(responseErrors.form) as string}</p>
                    ) : null}

                    <Link to="/signin" className="page-register__link">Already have an account?</Link>
                </form>
            </div>
        </div>
    );
}