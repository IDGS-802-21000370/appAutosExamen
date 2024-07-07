export interface ICarro {
    idCarro: number;
    nombre: string;
    modelo?: string | null;
    precio: number;
    imagen: ArrayBuffer;
}
