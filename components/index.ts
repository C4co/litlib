import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    .text {
      color: red;
    }
  `;

  render() {
    return html` <h1 class="text">My lit component</h1> `;
  }
}
