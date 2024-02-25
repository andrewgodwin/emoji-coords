class LSystem:

    axiom: str
    replacements: dict[str, str]
    angle_delta: int
    draw: str
    movements = {
        0: (1, 0),
        60: (0.5, 0.86603),
        90: (0, 1),
        120: (-0.5, 0.86603),
        180: (-1, 0),
        240: (-0.5, -0.86603),
        270: (0, -1),
        300: (0.5, -0.86603),
    }

    def __init__(self, levels: int) -> None:
        self.output = self.axiom
        for i in range(levels):
            new_output = ""
            for char in self.output:
                new_output += self.replacements.get(char, char)
            self.output = new_output

    def to_coordinates(self):
        x = y = 0
        angle = 0
        yield (x, y)
        for char in self.output:
            if char in self.draw:
                dx, dy = self.movements[angle]
                x += dx
                y += dy
                yield (x, y)
            elif char == "-":
                angle = (angle - self.angle_delta) % 360
            elif char == "+":
                angle = (angle + self.angle_delta) % 360

    def to_relative_coordinates(self):
        coords = list(self.to_coordinates())
        min_x = coords[0][0]
        min_y = coords[0][1]
        max_x = coords[0][0]
        max_y = coords[0][1]
        for x, y in coords[1:]:
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)
        size_x = max_x - min_x
        size_y = max_y - min_y
        for x, y in coords:
            yield ((x - min_x) / size_x, (y - min_y) / size_y)


class GosperCurve(LSystem):

    axiom = "A"
    replacements = {
        "A": "A-B--B+A++AA+B-",
        "B": "+A-BB--B-A++A+B",
    }
    angle_delta = 60
    draw = "AB"


class MooreCurve(LSystem):

    axiom = "LFL+F+LFL"
    replacements = {
        "L": "-RF+LFL+FR-",
        "R": "+LF-RFR-FL+",
    }
    angle_delta = 90
    draw = "F"


class TerdragonCurve(LSystem):

    axiom = "F"
    replacements = {
        "F": "F+F-F",
    }
    angle_delta = 120
    draw = "F"
