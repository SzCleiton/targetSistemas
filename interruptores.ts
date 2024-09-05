function descobrirInterruptores(): string {
    return `
    1. Ligue o primeiro interruptor e deixe ligado por alguns minutos.
    2. Desligue o primeiro interruptor e ligue o segundo.
    3. Vá até a sala das lâmpadas:
        - A lâmpada acesa está conectada ao segundo interruptor.
        - A lâmpada quente (mas apagada) está conectada ao primeiro interruptor.
        - A lâmpada fria e apagada está conectada ao terceiro interruptor.
   `;
}

console.log(descobrirInterruptores());
    