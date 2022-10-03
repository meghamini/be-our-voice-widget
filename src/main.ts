import './style.scss'
import { Position, QueryParams } from "./types"
import { getLayoutById } from './widgets'

const isDev = process.env.NODE_ENV === 'development'

function renderWidget(params: QueryParams) {
  /**
   * Destroying previously rendered widget
   */
  const prevElement = document.querySelector('.widget-wrapper');
  if(prevElement) {
    document.body.removeChild(prevElement)
  }

  /**
   * Destructing params 
   */
  const { 
    position = Position["top-left"], // default top-left 
    layout = 0, // default layout1 in case
    dismissable = true, // default true 
    theme = 'light',
    shape = 'normal',
    ...otherOptions
  } = params;

  /**
   * This element will be the where the
   * widget will finally land
   * It is created here to give us control 
   * over the widget from outside the layout
   */
  const widgetWrapper = document.createElement('div')
  
  /**
   * Adding a set of class names to widget wrapper
   * the class names are needed to target this 
   * element later in the global styles file
   */
  widgetWrapper.classList.add(...[
    'widget-wrapper', 
    'fixed', 
    theme, 
    position.toString(), 
    shape
  ])

  /**
   * Passing layout name received from query params
   * Returns the layout object 
   */ 
  const Widget = getLayoutById(layout)
  const widgetInstance = new Widget()

  /**
   * Throwing an error if in case if the layout 
   * is not found. This will only happen if no
   * layout exists in the widgets folder 
   */
  if(!widgetInstance) {
    throw new Error(`Layout '${layout}' was not found`)
  }

  /**
   * Calling to widget's `render` function
   */
   widgetInstance.render(widgetWrapper, otherOptions)

  if(dismissable) {
    widgetWrapper.classList.add('dimissabled')

    const closeBtn = document.createElement('span')
    closeBtn.innerHTML = '&#215;'
    closeBtn.classList.add('dismiss-widget')

    widgetWrapper.appendChild(closeBtn)

    /**
     * Dispatching a custom event to handle
     * click event of dimiss button
     */
    closeBtn.addEventListener('click', () => {
      widgetWrapper.dispatchEvent(new CustomEvent('closeClick'))
    })
  }
  
  document.body.appendChild(widgetWrapper)

  return widgetInstance
}

function getQueryParams(): QueryParams {
  const params = document.getElementById('be-irans-voice')?.getAttribute('src')
  let paramString = params?.split('?')?.[1]?.split('&')

  if(isDev) {
    paramString = window.location.href?.split('?')?.[1]?.split('&')
  }
  
  if(!paramString) {
    return {} as QueryParams
  }
  const parsedParams: Record<string, any> = {}
  paramString.forEach(param => {
    const [key, value] = param.split('=')    
    parsedParams[key as string] = typeof value === 'undefined' ? true : value
  })

  return parsedParams;
}

/**
 * Starting widget lifecycle
 */
function init() {
  /**
   * Reading query params and pass 
   * parsed params to `renderWidget` 
   */
  const params = getQueryParams()
  const widgetInstance = renderWidget(params)
  
  /**
   * Exposing renderWidget on window to make 
   * it available globally. It will be used
   * on landing page, when configuration changes
   * by user, this function will be called each 
   * time to render a fresh copy of widget 
   */
  window.renderWidget = widgetInstance.render
}

init()