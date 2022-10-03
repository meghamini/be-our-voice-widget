export enum Position {
    'top-left' = 'top-left',
    'top-center' = 'top-center',
    'top-right' = 'top-right',
    'bottom-left' = 'bottom-left',
    'bottom-center' = 'bottom-center',
    'bottom-right' = 'bottom-right'
}

export interface QueryParams { 
    position?: Position, 
    layout?: number,
    dismissable?: boolean, 
    theme?: string
    imageId?: number
    shape?: string
}