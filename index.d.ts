declare module 'openseadragon'{
    
    export class Browser {
        vendor : BROWSERS;
        version : number;
        alpha : boolean;
    }

    export enum BROWSERS {
        UNKNOWN =    0,
        IE =         1,
        FIREFOX =    2,
        SAFARI =     3,
        CHROME =     4,
        OPERA =      5
    }

    export enum ButtonState {
        REST,
        GROUP,
        HOVER,
        DOWN
    }

    export enum ControlAnchor{
        NONE,	
        TOP_LEFT,	
        TOP_RIGHT,	
        BOTTOM_LEFT,	
        BOTTOM_RIGHT,	
        ABSOLUTE
    }

    export const DEFAULT_SETTINGS : Options;

    export const fullScreenApi : {
        supportsFullScreen : boolean;
        isFullScreen : Function;
        getFullScreenElement : Function;
        requestFullScreen : Function;
        exitFullScreen : Function;
        cancelFullScreen : Function;
        fullScreenEventName : string;
        fullScreenErrorEventName : string;
    }

    export enum OverlayPlacement {
        CENTER,	
        TOP_LEFT,	
        TOP,	
        TOP_RIGHT,	
        RIGHT,	
        BOTTOM_RIGHT,	
        BOTTOM,	
        BOTTOM_LEFT,	
        LEFT
    }

    export enum OverlayRotationMode {
        NO_ROTATION,
        EXACT,
        BOUNDING_BOX
    }

    export var pixelDensityRatio : number;

    export enum Placement {
        CENTER,
        TOP_LEFT,
        TOP,
        TOP_RIGHT,
        RIGHT,
        BOTTOM_RIGHT,
        BOTTOM,
        BOTTOM_LEFT,
        LEFT
    }

    export var supportsCanvas : boolean;

    export var version : {
        versionStr : string
        major : number,
        minor : number,
        revision : number
    }

    export function addClass(element : Element | string, className : string);

    export function addEvent(element : Element | string, eventName : string, handler : Function, useCapture ? : boolean);

    export function cancelEvent(event ? : OSDEvent);

    export function capitalizeFirstLetter(value : string) : string;

    export function createCallback(object : Object, method : Function, ...args);

    export function delegate(object : Object, method : Function) : Function;

    export function extend();

    export function getCssPropertyWithVendorPrefix(property : string) : string;

    export function getElement(element : string | Element) : Element;

    export function getElementOffset(element : Element | string) : Point;

    export function getElementPosition(element : Element | string) : Point;

    export function getElementSize(element : Element | string) : Point;

    export function getElementStyle(element : Element | string) : any; // CSSStyle?

    export function getMousePosition(event ? : OSDEvent) : Point;

    export function getPageScroll() : Point;

    export function getString(property : string) : string;

    export function getUrlParameter(key : string) : string;

    export function getWindowSize() : Point;

    export function imageFormatSupported(extension ? : string) : boolean;

    export function indexOf(array : any[], searchElement : object, fromIndex ? : number);

    // (missing jquery functions)

    export function makeAjaxRequest(options : {
        url : string,
        success : Function,
        error : Function,
        headers : object,
        responseType : string,
        withCredentials ? : boolean
    }) : XMLHttpRequest;

    export function makeCenteredNode(element : Element | string) : Element;

    export function makeNeutralElement(tagName : string) : Element;

    export function makeTransparentImage(src : string) : Element;

    export function now() : number;

    export function parseJSON(string : string) : object;

    export function parseXml(string : string) : Document;

    export function pointInElement(element : Element | string, point : Point) : boolean;

    export function positiveModulo(number : number, modulo : number) : number;

    export function removeClass(element : Element | string, className : string);

    export function removeEvent(element : Element | string, eventName : string, handler : Function, useCapture ? : boolean);

    export function setElementOpacity(element : Element | string, opacity : number, usesAlpha ? : boolean);

    export function setElementTouchActionNone(element : Element | string)

    export function setPageScroll(point : Point)

    export function setString(property : string, value : any)

    export function stopEvent(event ? : OSDEvent)

    export interface GestureSettings{
        scrollToZoom	?: boolean,
        clickToZoom	?: boolean,
        dblClickToZoom	?: boolean,
        pinchToZoom	?: boolean,
        flickEnabled	?: boolean,
        flickMinSpeed	? : number,
        flickMomentum ? : number
    }

    interface NavImagesValues {
        REST : string,
        GROUP : string,
        HOVER : string,
        DOWN : string
    }
    export interface NavImages{
        zoomIn : NavImagesValues,
        zoomOut : NavImagesValues,
        home : NavImagesValues,
        fullpage : NavImagesValues,
        rotateleft : NavImagesValues,
        rotateright : NavImagesValues,
        flip : NavImagesValues,
        previous : NavImagesValues,
        next : NavImagesValues
    }

    export interface Options{
        id? : string,
        element ? : HTMLElement,
        tileSources ?: string | Function | TileSource[],
        tabIndex ? : number,
        overlays? : any[],
        prefixUrl? : string,
        navImages? : NavImages,
        debugMode? : boolean,
        debugGridColor? : string[],
        blendTime? : number,
        alwaysBlend? : boolean,
        autoHideControls?: boolean,
        inmediateRender?:boolean,
        defaultZoomLevel?:   number,
        opacity?: number,
        preload?: boolean,
        compositeOperation?: 'source-over' | 'source-atop' | 'source-in' | 'source-out' | 'destination-over' | 'destination-atop' | 'destination-in' | 'destination-out' | 'lighter' | 'copy' | 'xor',
        placeholderFillStyle?: string | CanvasGradient | CanvasPattern | Function,
        degrees?: number,
        flipped?: boolean,
        minZoomLevel?:       number,
        maxZoomLevel?:       number,
        homeFillsViewer?: boolean,
        panHorizontal?: boolean,
        panVertical?: boolean,
        constrainDuringPan?: boolean,
        wrapHorizontal?: boolean,
        wrapVertical?: boolean,
        minZoomImageRatio?: number,
        maxZoomPixelRatio?: number,
        smoothTileEdgesMinZoom?: number,
        iOSDevice?: boolean,
        autoResize?: boolean,
        preserveImageSizeOnResize?: boolean,
        minScrollDeltaTime?: number,
        pixelsPerWheelLine?: number,
        pixelsPerArrowPress?: number,
        visibilityRatio?: boolean,
        viewportMargins?: object,
        imageLoaderLimit?: number,
        clickTimeThreshold?: number,
        clickDistThreshold?: number,
        dblClickTimeThreshold?: number,
        dblClickDistThreshold?: number,
        springStiffness?:  number,
        animationTime?: number,
        gestureSettingsMouse?: GestureSettings,
        gestureSettingsTouch?: GestureSettings,
        gestureSettingsPen?: GestureSettings,
        gestureSettingsUnknown?: GestureSettings,
        zoomPerClick?: number,
        zoomPerScroll?: number,
        zoomPerSecond?: number,
        showNavigator?: boolean,
        navigatorId?: string,
        navigatorPosition?: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'ABSOLUTE',
        navigatorSizeRatio?: number,
        navigatorMaintainSizeRatio?: boolean,
        navigatorTop?: number | string,
        navigatorLeft?: number | string,
        navigatorHeight?: number | string,
        navigatorWidth?: number | string,
        navigatorAutoResize?: boolean,
        navigatorAutoFade?: boolean,
        navigatorRotate?: boolean,
        navigatorBackground?: string,
        navigatorOpacity?: number,
        navigatorBorderColor?: string,
        navigatorDisplayRegionColor?: string,
        controlsFadeDelay?: number,
        controlsFadeLength?: number,
        maxImageCacheCount?: number,
        timeout?: number,
        useCanvas?: boolean,
        minPixelRatio?: number,
        mouseNavEnabled?: number,
        showNavigationControl?: boolean,
        navigationControlAnchor?: ControlAnchor,
        showZoomControl?: boolean,
        showHomeControl?: boolean,
        showFullPageControl?: boolean,
        showRotationControl?: boolean,
        showFlipControl?: boolean,
        showSequenceControl?: boolean,
        sequenceControlAnchor?: ControlAnchor,
        navPrevNextWrap?: boolean,
        zoomInButton?: string,
        zoomOutButton?: string,
        homeButton?: string,
        fullPageButton?: string,
        rotateLeftButton?: string,
        rotateRightButton?: string,
        previousButton?: string,
        nextButton?: string,
        sequenceMode?: boolean,
        initialPage?: boolean,
        preserveViewport?: boolean,
        preserveOverlays?: boolean,
        showReferenceStrip?: boolean,
        referenceStripScroll?: string,
        referenceStripElement?: HTMLElement,
        referenceStripHeight?: number,
        referenceStripWidth?: number,
        referenceStripPosition?: string,
        referenceStripSizeRatio?: number,
        collectionMode?: boolean,
        collectionRows?: number,
        collectionColumns?: number,
        collectionLayout?: "horizontal" | "vertical",
        collectionTileSize?: number,
        collectionTileMargin?: number,
        crossOriginPolicy?: "Anonymous" | "use-credentials" | false,
        ajaxWithCredentials?: boolean,
        loadTilesWithAjax?: boolean,
        axajHeaders?: object
    }
  
    export interface TileSourceOptions{
        url?: string,
        referenceStripThumbnailUrl?: string,
        success?: Function,
        width?: number,
        height?: number,
        tileSize? : number,
        tileWidth? : number,
        tileHeight?: number,
        tileOverlap?: number,
        minLevel?: number,
        maxLevel?: number,
        getTileUrl? : (l : number,x : number,y : number) => string
    }

    export class Button extends EventSource{
        currentState : ButtonState;
        element : Element;
        fadeDelay : number;
        fadeLength : number;
        tracker : MouseTracker;

        constructor(options : {
            element ? : Element,
            tooltip ? : string,
            srcRest	? : string,
            srcGroup ? : string,
            srcHover ? : string,
            srcDown	? : string,
            fadeDelay ? : number,
            fadeLength ? : number,
            onPress ? : EventHandler,
            onRelease ? : EventHandler,
            onClick ? : EventHandler,
            onEnter ? : EventHandler,
            onExit ? : EventHandler,
            onFocus ? : EventHandler,
            onBlur ? : EventHandler,
        })

        addHandler(eventName : ButtonEventName, handler : EventHandler, userData ? : object);

        addOnceHandler(eventName : ButtonEventName, handler : EventHandler, userData ? : object, times ? : number);

        disable()

        enable()

        getHandler(eventName : ButtonEventName) : (source : ButtonEventName, ...args)=>void;

        raiseEvent(eventName : ButtonEventName, eventArgs : object);

        removeAllHandlers(eventName : ButtonEventName);

        removeHandler(eventName : ButtonEventName, handler : EventHandler);

        
    }

    export interface MouseTrackerOptions{
        element	: Element | string,
        startDisabled ? : boolean,
        clickTimeThreshold ? : number,	
        clickDistThreshold ? : number,	
        dblClickTimeThreshold ? : number,
        dblClickDistThreshold ? : number,
        stopDelay ? : number,
        enterHandler ? : EventHandler,
        exitHandler ? : EventHandler,
        pressHandler ? : EventHandler,
        nonPrimaryPressHandler ? : EventHandler,
        releaseHandler ? : EventHandler,
        nonPrimaryReleaseHandler ? : EventHandler,
        moveHandler ? : EventHandler,
        scrollHandler ? : EventHandler,
        clickHandler ? : EventHandler,
        dblClickHandler ? : EventHandler,
        dragHandler ? : EventHandler,
        dragEndHandler ? : EventHandler,
        pinchHandler ? : EventHandler,
        keyDownHandler ? : EventHandler,
        keyUpHandler ? : EventHandler,
        keyHandler ? : EventHandler,
        focusHandler ? : EventHandler,
        blurHandler ? : EventHandler,
        userData ? : object,
    }
    export class MouseTracker {
        clickTimeThreshold : number;	
        clickDistThreshold : number;	
        dblClickTimeThreshold : number;
        dblClickDistThreshold : number;
        element	: Element;

        constructor(options : MouseTrackerOptions)

        blurHandler(event : OSDEvent);
        clickHandler(event : OSDEvent);
        dblClickHandler(event : OSDEvent);
        destroy();
        dragEndHandler(event : OSDEvent);
        dragHandler(event : OSDEvent);
        enterHandler(event : OSDEvent);
        exitHandler(event : OSDEvent);
        focusHandler(event : OSDEvent);
        getActivePointerCount() : number;
        getActivePointersListByType(type : string) : GesturePointList;
        getActivePointersListsExceptType(type : string) : GesturePointList[];
        keyDownHandler(event : OSDEvent);
        keyHandler(event : OSDEvent);
        keyUpHandler(event : OSDEvent);
        moveHandler(event : OSDEvent);
        nonPrimaryPressHandler(event : OSDEvent);
        nonPrimaryReleaseHandler(event : OSDEvent);
        pinchHandler(event : OSDEvent);
        pressHandler(event : OSDEvent);
        releaseHandler(event : OSDEvent);
        scrollHandler(event : OSDEvent);
        setTracking(track : boolean) : MouseTracker;
        stopHandler(event : OSDEvent);
    }

    export type GesturePoint = {
        id : number,
        type : string,
        captured : boolean,
        isPrimary : boolean,
        insideElementPressed : boolean,
        insideElement : boolean,
        speed : number,
        direction : number,
        contactPos : Point,
        contactTime : number,
        lastPos : Point,
        lastTime : number,
        currentPos : Point
        currentTime : number
    }

    class GesturePointList{
        // TODO
    }

    class ButtonGroup {
        buttons : Button[];
        element : Element;
        tracker : MouseTracker;

        constructor(options : {
            buttons : Button[],
            element ? : Element
        })
    }

    class Control{
        anchor : ControlAnchor;
        autoFade : boolean;
        container : Element;
        element : Element;
        wrapper : Element;
        constructor(
            element : Element,
            options : {
                anchor ? : ControlAnchor,
                attachToViewer ? : boolean,
                autoFade ? : boolean
            },
            container : Element
        );

        destroy();
        isVisible() : boolean;
        setOpacity(opacity : number);
        setVisible(visible : boolean);
    }

    type EventHandler = (event : OSDEvent) => void;

    export class TileSource implements TileSourceOptions{
        constructor(options : TileSourceOptions)
    }
    
    export type ButtonEventName = "blur" | "click" | "enter" | "exit" | "focus" | "press" | "release";
    export type TiledImageEventName = "bounds-change" | "clip-change" | "composite-operation-change" | "fully-loaded-change" | "opacity-change"
    export type TileSourceEventname = "open-failed" | "ready";
    export type ViewerEventName = "add-item-failed" | "add-overlay" | "animation" | "animation-finish" | "animation-start" | "canvas-click" | "canvas-double-click" | "canvas-drag" | "canvas-drag-end" | "canvas-enter" | "canvas-exit" | "canvas-key" | "canvas-nonprimary-press" | "canvas-nonprimary-release" | "canvas-pinch" | "canvas-press" | "canvas-release" | "canvas-scroll" | "clear-overlay" | "close" | "constrain" | "container-enter" | "container-exit" | "controls-enabled" | "flip" | "full-page" | "full-screen" | "home" | "mouse-enabled" | "navigator-click" | "navigator-drag" | "navigator-scroll" | "open" | "open-failed" | "page" | "pan" | "pre-full-page" | "pre-full-screen" | "remove-overlay" | "reset-size" | "resize" | "rotate" | "tile-drawing" | "tile-drawn" | "tile-load-failed" | "tile-loaded" | "tile-unloaded" | "update-level" | "update-overlay" | "update-tile" | "update-viewport" | "viewport-change" | "visible" | "zoom";
    export type WorldEventName = "add-item" | "item-index-change" | "metrics-change" | "remove-item";
  
    export class Viewer{
        canvas : HTMLElement;
        container : HTMLElement;
        drawer : Drawer;
        element : Element;
        initialPage : number;
        navigator: Navigator;
        viewport : Viewport;
        world : World;
        
        constructor(options : Options)
        addHandler(eventName : ViewerEventName,callback:(event)=>any,userData? : object);
        addOnceHandler(eventName : ViewerEventName,callback:(event)=>any,userData? : object, times?:number);
        addOverlay(element : HTMLElement | string | object, location ? : Point | Rect, placement ? : Placement, onDraw ? : Function) : Viewer;
        addReferenceStrip();
        addSimpleImage(options : {url? : string});
        
        setFullPage(fullScreen : boolean) : Viewer;
        setFullScreen(fullScreen : boolean) : Viewer;
    }
  
    
  
    export class Navigator{
        canvas : HTMLCanvasElement;
        container : HTMLElement;
        drawer : Drawer;
        element : HTMLElement;
        initialPage : number;
        // navigator : Navigator; // ?
        viewport : Viewport;
        world : World;
    }
  
    export class Viewport{
        getBounds() : Rect;
        pointFromPixel(point : Point, current?: boolean) : Point;
    }
  
    export class World{
        getItemAt(id : number) : TiledImage;
        getItemCount() : number;
        addHandler(eventName : WorldEventName, callback : Function);
    }
  
    export class Drawer{
        context: CanvasRenderingContext2D;
        viewportToDrawerRectangle(rect : Rect) : Rect;
    }
  
    export class TiledImage{
        getBounds() : Rect;
        imageToViewportRectangle(rect : Rect) : Rect;
        viewportToImageCoordinates(viewerX : number | Point, ...args : any[]) : Point;
    }
  
    export class Rect{
        x : number;
        y : number;
        width : number;
        height : number;
        constructor(x : number, y : number, width : number, height : number);
        clone() : Rect;
        containsPoint(point : Point, epsilon? : number) : boolean;
        getAspectRatio() : number;
        getBottomLeft() : Point;
        getBottomRight() : Point;
        getBoundingBox() : Rect;
        getCenter() : Point;
        getIntegerBoundingBox() : Rect;
        getSize() : Point;
        getTopLeft() : Point;
        getTopRight() : Point;
        intersection(rect : Rect) : Rect;
        rotate(degrees : number,pivot?:Rect) : Rect;
        times(factor: number) : Rect;
        toString() : string;
        translate(delta:Point) : Rect;
        union(rect : Rect) : Rect;
    }
  
    export class Point{
        x : number;
        y : number;
        constructor(x:number,y:number);
        apply(func : Function) : Point;
        clone() : Point;
        distanceTo(point : Point) : number;
        divide(factor : number) : number;
        equals(point : Point) : boolean;
        minus(point : Point) : Point;
        negate(point : Point) : Point;
        plus(point : Point) : Point;
        rotate(degrees : number, pivot? : Point) : Point;
        squaredDistanceTo(point : Point) : number;
        times(factor: number) : Rect;
        toString() : string;
    }
  
    interface OSDEvent extends Event{
        originalEvent : object,
        position ? : Point,
        clientX ? : number,
        clientY ? : number
    }


    export type OnDrawCallback = (position : Point, size : Point, element : HTMLElement) => void;

    export interface OverlayOptions{
        element : HTMLElement,
        location : Point | Rect,
        placement ? : Placement,
        onDraw ? : OnDrawCallback,
        checkResize ? : boolean,
        width ? : number,
        height ? : number,
        rotationMode ? : boolean
    }

    export class Overlay{
        constructor(options : OverlayOptions);
        adjust(position : Point, size : Point) : void;
        destroy() : void;
        drawHTML(container : HTMLElement) : void;
        getBounds(viewport : Viewport) : Rect;
        update(location : Point | Rect, placement : Placement);
    }
  }