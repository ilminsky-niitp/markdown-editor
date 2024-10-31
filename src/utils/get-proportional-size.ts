type GetProportionalSizeParams = {
    width: number;
    height: number;
    editorWidth: number;
    imgMaxHeight: number;
};

export function getProportionalSize({
    width: _width,
    height: _height,
    editorWidth,
    imgMaxHeight,
}: GetProportionalSizeParams): {width: number; height: number} {
    let width = _width;
    let height = _height;
    const ratio = width / height;

    if (width > editorWidth) {
        width = editorWidth;
        height = Math.round(width / ratio);
    }

    if (height > imgMaxHeight) {
        height = imgMaxHeight;
        width = Math.round(height * ratio);
    }

    return {width, height};
}
