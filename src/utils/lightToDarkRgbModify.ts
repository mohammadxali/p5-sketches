let increase = true;

type RGB = { r: number; g: number; b: number };

export function lightToDarkRgbModify(
    rgb: RGB,
    color: keyof RGB,
    increaseBy = 2
) {
    if (rgb[color] < 255 && increase) {
        rgb[color] = rgb[color] + increaseBy;
    }

    if (rgb[color] >= 255) {
        increase = false;
    }

    if (!increase) {
        rgb[color] = rgb[color] - increaseBy;
    }

    if (rgb[color] === 0) {
        increase = true;
    }
}
