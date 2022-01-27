# stylo-color

The "Color Picker" component is a simple component to, guess what, pick colors 😉.

## Usage

The "Color Picker" Web Component could be integrated using the tag `<stylo-color/>`.

```
<stylo-color>
  <span slot="more">...</span>
</stylo-color>
```

#### Palette

The `palette` attribute is a complex object and therefore could only be set using Javascript.

It is defined as the following:

```
export interface StyloPaletteColor {
    hex: string;
    rgb?: string;
}
export interface StyloPalette {
  color: StyloPaletteColor;
  alt?: string;
}
```

The key value is the color provided as `hex` value. The `rgb` value is use for presentation purpose, for the hover action and the highlight of the selected color. If you wish to highlight a selected color, you could either provide `color-hex` or `color-rgb`.

The default palette is the following:

```
export const DEFAULT_PALETTE: StyloPalette[] = [
    {
      color: {
        hex: '#8ED1FC',
        rgb: '142,209,252',
      },
      alt: 'Light blue',
    },
    {
      color: {
        hex: '#0693E3',
        rgb: '6,147,227',
      },
      alt: 'Blue',
    },
    {
      color: {
        hex: '#7BDCB5',
        rgb: '123,220,181',
      },
      alt: 'Light green',
    },
    {
      color: {
        hex: '#00D084',
        rgb: '0,208,132',
      },
      alt: 'Green',
    },
    {
      color: {
        hex: '#FCB900',
        rgb: '252,185,0',
      },
      alt: 'Yellow',
    },
    {
      color: {
        hex: '#FF6900',
        rgb: '255,105,0',
      },
      alt: 'Orange',
    },
    {
      color: {
        hex: '#F78DA7',
        rgb: '247,141,167',
      },
      alt: 'Pink',
    },
    {
      color: {
        hex: '#EB144C',
        rgb: '235,20,76',
      },
      alt: 'Red',
    },
    {
      color: {
        hex: '#ffffff',
        rgb: '255,255,255',
      },
      alt: 'White',
      display: {
        borderColor: '#ddd',
        boxShadowColor: '221,221,221',
      },
    },
    {
      color: {
        hex: '#ABB8C3',
        rgb: '171,184,195',
      },
      alt: 'Grey',
    },
    {
      color: {
        hex: '#000000',
        rgb: '0,0,0',
      },
      alt: 'Black',
    },
];
```

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute   | Description                                                                                                      | Type             | Default                 |
| ---------- | ----------- | ---------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------- |
| `colorHex` | `color-hex` | The current selected color provided as hexadecimal value                                                         | `string`         | `undefined`             |
| `colorRgb` | `color-rgb` | The current selected color provided as a rgb value (without "rgb()", only value such as for example 255, 67, 54) | `string`         | `undefined`             |
| `inputAlt` | `input-alt` | An accessibility label for the color input field                                                                 | `string`         | `'Input a color (hex)'` |
| `palette`  | --          | The palette of color.                                                                                            | `StyloPalette[]` | `DEFAULT_PALETTE`       |

## Events

| Event         | Description             | Type                             |
| ------------- | ----------------------- | -------------------------------- |
| `colorChange` | Emit the selected color | `CustomEvent<StyloPaletteColor>` |

## Dependencies

### Used by

- [stylo-toolbar-color](../../toolbars/toolbar/actions/color)

### Depends on

- [stylo-color-input](../input)

### Graph

```mermaid
graph TD;
  stylo-color --> stylo-color-input
  stylo-toolbar-color --> stylo-color
  style stylo-color fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
