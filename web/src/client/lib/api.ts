import type { ApiResponse } from '../../shared/types';

const BASE_URL = '/api';

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || `Request failed with status ${response.status}`,
      };
    }

    return data;
  } catch (error) {
    console.error('API request error:', error);
    return {
      success: false,
      error: 'Network error',
    };
  }
}

export const api = {
  get: <T>(path: string) => request<T>('GET', path),
  post: <T>(path: string, body?: unknown) => request<T>('POST', path, body),
  patch: <T>(path: string, body?: unknown) => request<T>('PATCH', path, body),
  put: <T>(path: string, body?: unknown) => request<T>('PUT', path, body),
  delete: <T>(path: string) => request<T>('DELETE', path),
};

// Upload file
export async function uploadFile(file: File): Promise<{ url: string } | null> {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${BASE_URL}/uploads`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error('Upload failed:', data.error);
      return null;
    }

    return { url: data.data.url };
  } catch (error) {
    console.error('Upload error:', error);
    return null;
  }
}
