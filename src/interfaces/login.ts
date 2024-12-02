import React from 'react';

export interface LoginFormProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    input: { username: string; password: string };
}