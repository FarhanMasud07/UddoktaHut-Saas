import { CustomFormField, FormFieldType } from "../CustomFormField";

export const ComonRegistrationForm = ({
    form,
    password,
    passwordRules,
    setPassword,
    isSignup,
    children
}) => {
    return (
        <>
            {isSignup && <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your full name"
                iconSrc="/assets/icons/user.svg"
                iconAlt="name"
            />}

            {children}

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="password"
                label="Password"
                placeholder="********"
                iconSrc="/assets/icons/password.svg"
                iconAlt="password"
                inputProps={isSignup && {
                    value: password,
                    onChange: (e) => {
                        setPassword(e.target.value);
                        form.setValue("password", e.target.value);
                    },
                }}

            />
            {password && passwordRules && passwordRules.length && isSignup && (
                <ul className="space-y-1 text-sm">
                    {passwordRules.map((rule, i) => {
                        const passed = rule.test(password);
                        return <li key={i} className={(passed
                            ? "text-green-500 font-medium"
                            : "text-red-500 font-medium")}>
                            {passed ? "✅" : "❌"} {" "} {rule.label}
                        </li>
                    })}
                </ul>
            )}
        </>
    )
}