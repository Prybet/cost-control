export const makeID = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

export const formatDate = date => new Date(date).toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "2-digit" })