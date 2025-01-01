import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { categories, products, suppliers, orders, notifications } from './api';

// Categories hooks
export function useCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: categories.list,
    });
}

export function useCreateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: categories.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
    });
}

// Products hooks
export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: products.list,
    });
}

export function useLowStockProducts() {
    return useQuery({
        queryKey: ['products', 'lowStock'],
        queryFn: products.getLowStock,
    });
}

export function useOutOfStockProducts() {
    return useQuery({
        queryKey: ['products', 'outOfStock'],
        queryFn: products.getOutOfStock,
    });
}

export function useCreateProduct() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: products.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });
}

// Orders hooks
export function useOrders() {
    return useQuery({
        queryKey: ['orders'],
        queryFn: orders.list,
    });
}

export function useRecentOrders() {
    return useQuery({
        queryKey: ['orders', 'recent'],
        queryFn: orders.getRecent,
    });
}

export function useCreateOrder() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: orders.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
        },
    });
}

// Notifications hooks
export function useNotifications() {
    return useQuery({
        queryKey: ['notifications'],
        queryFn: notifications.list,
    });
}

export function useMarkNotificationAsRead() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: notifications.markAsRead,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        },
    });
}

export function useMarkAllNotificationsAsRead() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: notifications.markAllAsRead,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        },
    });
} 