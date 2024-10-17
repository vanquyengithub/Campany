const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="
            h-full min-h-screen flex items-center justify-center
            bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-300 via-orange-50 to-red-600
          "
        >
            {children}
        </div>
    );
};

export default AuthLayout;