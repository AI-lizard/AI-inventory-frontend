'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

// This will be used in Phase 2 for AI integration
interface AIContextType {
    isEnabled: boolean;
    model: string;
    temperature: number;
    // Add more AI-specific settings here
}

// Default AI settings (to be implemented in Phase 2)
const defaultAISettings: AIContextType = {
    isEnabled: false,
    model: 'gpt-4',
    temperature: 0.7,
};

export function Providers({ children }: { children: ReactNode }) {
    // Initialize Query Client with settings optimized for AI operations
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minute
                        gcTime: 5 * 60 * 1000, // 5 minutes
                        refetchOnWindowFocus: false,
                        retry: 1,
                        // These settings will help with AI data consistency
                        refetchOnMount: true,
                        refetchOnReconnect: true,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {/* 
                Phase 2: AI Provider will be added here
                <AIProvider settings={defaultAISettings}>
            */}
            {children}
            {/* 
                Phase 2: AI Provider closing tag
                </AIProvider>
            */}
        </QueryClientProvider>
    );
} 