import axios, { AxiosError, AxiosResponse } from 'axios';

// Define interfaces for our data types
interface Category {
    id: number;
    name: string;
    description?: string;
}

interface Product {
    id: number;
    name: string;
    category: number;
    quantity: number;
    unit_price: number;
    expiry_date?: string;
    reorder_level: number;
}

interface Supplier {
    id: number;
    name: string;
    contact_person: string;
    email: string;
    phone: string;
}

interface Order {
    id: number;
    supplier: number;
    order_date: string;
    status: 'pending' | 'approved' | 'delivered' | 'cancelled';
    total_amount: number;
    products: OrderProduct[];
}

interface OrderProduct {
    product: number;
    quantity: number;
    unit_price: number;
}

interface Usage {
    id: number;
    product: number;
    quantity: number;
    date: string;
    notes?: string;
}

interface Notification {
    id: number;
    message: string;
    type: 'low_stock' | 'expiry' | 'order_status';
    is_read: boolean;
    created_at: string;
}

// API Error handling
interface ApiErrorData {
    message: string;
    errors?: Record<string, string[]>;
}

class ApiError extends Error {
    constructor(
        public status: number,
        message: string,
        public errors?: Record<string, string[]>
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

const handleApiError = (error: AxiosError<ApiErrorData>) => {
    if (error.response) {
        throw new ApiError(
            error.response.status,
            error.response.data?.message || 'An error occurred',
            error.response.data?.errors
        );
    }
    throw new Error('Network error');
};

// API instance with configuration
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Type-safe response handler
const handleResponse = <T>(response: AxiosResponse<T>) => response.data;

// Categories
export const categories = {
    list: async (): Promise<Category[]> => {
        try {
            const response = await api.get<Category[]>('/categories/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    create: async (data: Omit<Category, 'id'>): Promise<Category> => {
        try {
            const response = await api.post<Category>('/categories/', data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    update: async (id: number, data: Partial<Category>): Promise<Category> => {
        try {
            const response = await api.put<Category>(`/categories/${id}/`, data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    delete: async (id: number): Promise<void> => {
        try {
            await api.delete(`/categories/${id}/`);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
};

// Products
export const products = {
    list: async (): Promise<Product[]> => {
        try {
            const response = await api.get<Product[]>('/products/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    create: async (data: Omit<Product, 'id'>): Promise<Product> => {
        try {
            const response = await api.post<Product>('/products/', data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    update: async (id: number, data: Partial<Product>): Promise<Product> => {
        try {
            const response = await api.put<Product>(`/products/${id}/`, data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    delete: async (id: number): Promise<void> => {
        try {
            await api.delete(`/products/${id}/`);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    getLowStock: async (): Promise<Product[]> => {
        try {
            const response = await api.get<Product[]>('/products/low_stock/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    getOutOfStock: async (): Promise<Product[]> => {
        try {
            const response = await api.get<Product[]>('/products/out_of_stock/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
};

// Suppliers
export const suppliers = {
    list: async (): Promise<Supplier[]> => {
        try {
            const response = await api.get<Supplier[]>('/suppliers/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    create: async (data: Omit<Supplier, 'id'>): Promise<Supplier> => {
        try {
            const response = await api.post<Supplier>('/suppliers/', data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    update: async (id: number, data: Partial<Supplier>): Promise<Supplier> => {
        try {
            const response = await api.put<Supplier>(`/suppliers/${id}/`, data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    delete: async (id: number): Promise<void> => {
        try {
            await api.delete(`/suppliers/${id}/`);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
};

// Orders
export const orders = {
    list: async (): Promise<Order[]> => {
        try {
            const response = await api.get<Order[]>('/orders/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    create: async (data: Omit<Order, 'id'>): Promise<Order> => {
        try {
            const response = await api.post<Order>('/orders/', data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    update: async (id: number, data: Partial<Order>): Promise<Order> => {
        try {
            const response = await api.put<Order>(`/orders/${id}/`, data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    delete: async (id: number): Promise<void> => {
        try {
            await api.delete(`/orders/${id}/`);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    getRecent: async (): Promise<Order[]> => {
        try {
            const response = await api.get<Order[]>('/orders/recent/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
};

// Usage
export const usage = {
    list: async (): Promise<Usage[]> => {
        try {
            const response = await api.get<Usage[]>('/usage/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    create: async (data: Omit<Usage, 'id'>): Promise<Usage> => {
        try {
            const response = await api.post<Usage>('/usage/', data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    update: async (id: number, data: Partial<Usage>): Promise<Usage> => {
        try {
            const response = await api.put<Usage>(`/usage/${id}/`, data);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    delete: async (id: number): Promise<void> => {
        try {
            await api.delete(`/usage/${id}/`);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
};

// Notifications
export const notifications = {
    list: async (): Promise<Notification[]> => {
        try {
            const response = await api.get<Notification[]>('/notifications/');
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    markAsRead: async (id: number): Promise<Notification> => {
        try {
            const response = await api.post<Notification>(`/notifications/${id}/mark_as_read/`);
            return handleResponse(response);
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
    markAllAsRead: async (): Promise<void> => {
        try {
            await api.post('/notifications/mark_all_as_read/');
        } catch (error) {
            throw handleApiError(error as AxiosError<ApiErrorData>);
        }
    },
};

export default api; 