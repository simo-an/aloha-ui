<svelte:options customElement="a-button" />

<script lang="ts">
  import { filterClass } from "@utils";

  let nativeType = "button" as const;

  export let style = null;
  export let disabled = false;
  export let circle = false;
  export let round = false;

  const preClass = ["type", "size", "round", "loading"];
  const _class = [
    "a-button",
    ...filterClass($$props, "a-button--", preClass),
  ].join(" ");
</script>

<button
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
  on:input
  {disabled}
  type={nativeType}
>
  <span>
    <slot />
  </span>
</button>

<style lang="less">
  @import url("./button.less");
</style>
