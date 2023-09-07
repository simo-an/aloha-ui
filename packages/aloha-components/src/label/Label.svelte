<svelte:options customElement="a-label" />

<script lang="ts">
  import { filterClass } from "@utils";

  export let style = null;
  export let circle = false;
  export let disabled = false;
  export let round = false;
  export let text = "";

  const preClass = ["type", "size", "round", "loading"];
  const _class = [
    "a-label",
    ...filterClass($$props, "a-label--", preClass),
  ].join(" ");
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
  class={_class}
  class:is-circle={circle}
  class:is-round={round}
  class:is-disabled={disabled}
  {style}
  on:click
  on:contextmenu
  on:dblclick
  on:focusin
  on:mousedown
  on:mouseup
  on:focusout
  on:keydown
  on:keyup
  on:pointercancel
  on:pointerdown
  on:pointerenter
  on:pointerleave
  on:pointermove
  on:pointerout
  on:pointerup
>
  <slot />
  {text}
</span>

<style lang="less">
  @import url("./label.less");
</style>
