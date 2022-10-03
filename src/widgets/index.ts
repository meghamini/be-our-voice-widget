import BaseLayout from './BaseLayout'
import LayoutOne from './LayoutOne'

const layouts = [
    BaseLayout,
    LayoutOne
]

export const getLayoutById = (id: number) => {
    if(typeof id === 'undefined' || !layouts[id]) {
        return BaseLayout
    } 

    return layouts[id]
}