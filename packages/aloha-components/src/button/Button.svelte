<svelte:options customElement="a-button" />

<script lang="ts">
  let count = 0;

  function alertButton() {
    console.warn(`I am play ${buttonText}`);
    count += 1;
  }

  export let buttonText: string = "Button";
</script>

<button class="a-button" on:click={alertButton}>{buttonText}:{count}</button>

<style lang="less">
  .a-button {
    width: 120px;
    height: 40px;
    background-color: #ececec;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #cccccc;
    }
    &:active {
      background-color: #aaaaaa;
    }
  }
</style>
