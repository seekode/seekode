export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
	id: string;
	type: ToastType;
	message: string;
	duration: number;
}

let toasts = $state<Toast[]>([]);

const generateId = () => Math.random().toString(36).slice(2, 9);

const add = (type: ToastType, message: string, duration = 5000) => {
	const id = generateId();
	const toast: Toast = { id, type, message, duration };

	toasts = [...toasts, toast];

	if (duration > 0) {
		setTimeout(() => remove(id), duration);
	}

	return id;
};

const remove = (id: string) => {
	toasts = toasts.filter((t) => t.id !== id);
};

const clear = () => {
	toasts = [];
};

export const toast = {
	get list() {
		return toasts;
	},
	add,
	remove,
	clear,
	success: (message: string, duration?: number) => add('success', message, duration),
	error: (message: string, duration?: number) => add('error', message, duration),
	warning: (message: string, duration?: number) => add('warning', message, duration),
	info: (message: string, duration?: number) => add('info', message, duration)
};
