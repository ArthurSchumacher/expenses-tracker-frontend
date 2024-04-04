export default function formatPrice(n: number) {
    return `R$ ${Number(n).toFixed(2)}`;
}