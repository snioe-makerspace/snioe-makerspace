<script lang="ts">
</script>

<div>
  <a href="/equipment">
    <button class="RegisterButton CrispButton" data-type="dark-blue" {...$$restProps}>
      Book Now
    </button>
  </a>
</div>

<style lang="scss">
  .RegisterButton {
    @include box(max-content, 40px);
    position: fixed;
    z-index: 10;
    bottom: 2rem;
    right: 2rem;
    box-shadow: 0px 0px 5px 5px #00519720;

    &:hover {
      box-shadow: 0px 0px 5px 5px #00519740;
    }
  }
</style>
