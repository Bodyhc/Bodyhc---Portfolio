"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="min-h-screen flex items-center justify-center bg-bg-dark p-4">
                        <div className="text-center bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-12 max-w-md">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">
                                Something went wrong
                            </h2>
                            <p className="text-text-secondary mb-6">
                                We're sorry, but something unexpected happened. Please try refreshing the page.
                            </p>
                            <button
                                onClick={() => {
                                    this.setState({ hasError: false });
                                    window.location.reload();
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl text-text-primary font-semibold hover:shadow-glow-pink transition-all duration-300"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;


