export const generateDate = (d: string) => {
    const date = new Date(d);

    const dateString = date.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const timeString = date.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, 
    });

    return `${dateString} ساعت ${timeString}`;
};