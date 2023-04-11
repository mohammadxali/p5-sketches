import "./style.css";
import P5 from "p5";
import { lightToDarkRgbModify } from "./utils";

const CANVAS_SIZE = 500;

let p5: P5;

function createCircles(count: number, position: { x: number; y: number }) {
    for (let i = 0; i < count; i++) {
        let d = i * 50;
        p5.circle(position.x, position.y, d);
    }
}

const sketch = (_p5: P5) => {
    p5 = _p5;
    p5.setup = () => {
        const canvas = p5.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
        canvas.class("border border-white border-opacity-30");
        canvas.parent("sketches");
    };

    const color = {
        r: 0,
        g: 153,
        b: 0,
    };

    p5.draw = () => {
        p5.background("black");
        p5.noFill();
        lightToDarkRgbModify(color, "b");
        p5.stroke(color.r, color.g, color.b);
        p5.strokeWeight(22);

        createCircles(10, { x: 0, y: 0 });
        createCircles(10, { x: p5.width, y: 0 });
        createCircles(10, { x: 0, y: p5.height });
        createCircles(10, { x: p5.width, y: p5.height });
        createCircles(5, { x: p5.width / 2, y: p5.height / 2 });
    };
};

new P5(sketch);
