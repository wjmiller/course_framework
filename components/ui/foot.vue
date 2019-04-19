<template>
<footer>
  <div class="logo"></div>
  <div class="copyright">© 2019 Online Trading Academy. All Rights Reserved.</div>
</footer>
</template>

<script>
export default {
  name: "foot"
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables/variables.scss";

footer {
    margin-top: 10rem;
    height: 74px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        padding: 0 20px;
        width: 160px;
        height: 67px;
    }

    .copyright {
        font-size: 0.7em;
        padding: 0 20px;
    }
}

.dark {
    footer {
        background: $dark-body-bg;

        .logo {
            background-image: url("~assets/images/ui/logos/ota_dark.png");
            background-size: 160px 67px;
        }
    }
}

.light {
    footer {
        background: #fff;

        .logo {
            background-image: url("~assets/images/ui/logos/ota_light.png");
            background-size: 160px 67px;
        }
    }
}
</style>
