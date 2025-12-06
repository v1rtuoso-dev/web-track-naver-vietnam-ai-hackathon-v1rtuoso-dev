import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });

            const data = await response.json();

            if (response.ok) {
                if (data.user && data.user.language) {
                    await i18n.changeLanguage(data.user.language);
                }

                window.dispatchEvent(
                    new CustomEvent('userLoggedIn', { detail: data.user })
                );

                navigate('/today');
            } else {
                setError(data.errors[0] || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Error during login:', err);
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen px-4">
            <h1 className="text-5xl font-bold text-gray-300 dark:text-gray-100 mb-6">tototodo</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
                {error && (
                    <div className="mb-4 text-center text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-600 dark:text-gray-300 mb-1"
                        >
                            {t('auth.email', 'Email')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-600 dark:text-gray-300 mb-1"
                        >
                            {t('auth.password', 'Password')}
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                    >
                        {t('auth.login', 'Login')}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        {t('auth.dontHaveAccount', "Don't have an account?")}{' '}
                        <button
                            onClick={() => navigate('/register')}
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                        >
                            {t('auth.createAccount', 'Create Account')}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
