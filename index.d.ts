declare module 'openseadragon'{
  
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
  
    export interface GestureSettings{
        scrollToZoom	?: boolean,
        clickToZoom	?: boolean,
        dblClickToZoom	?: boolean,
        pinchToZoom	?: boolean,
        flickEnabled	?: boolean,
        flickMinSpeed	? : number,
        flickMomentum ? : number
    }
  
    export interface NavImages{
  
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
  
    export class TileSource implements TileSourceOptions{
        constructor(options : TileSourceOptions)
    }
  
    export enum ControlAnchor{
        NONE,	
        TOP_LEFT,	
        TOP_RIGHT,	
        BOTTOM_LEFT,	
        BOTTOM_RIGHT,	
        ABSOLUTE
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
        addOverlay(element : HTMLElement | string | object, location : Point | Rect, placement : Placement, onDraw : Function) : Viewer;
        addReferenceStrip();
        addSimpleImage(options : {url? : string});
        
        setFullPage(fullScreen : boolean) : Viewer;
        setFullScreen(fullScreen : boolean) : Viewer;
    }
  
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
  
    interface Event extends HTMLElementEventMap{
        position ? : Point,
        clientX ? : number,
        clientY ? : number
    }
  }