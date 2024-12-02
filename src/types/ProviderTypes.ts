export type ProviderProps = {
    children: React.ReactNode;
}

export type ProviderValues = {
    user: string;
    onLogin: (username: string) => void;
}