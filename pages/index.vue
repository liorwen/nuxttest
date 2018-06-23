<template>
    <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
            @beforeChange="handleBeforeChange"
            @breakpoint="handleBreakpoint"
            @destroy="handleDestroy"
            @edge="handleEdge"
            @init="handleInit"
            @reInit="handleReInit"
            @setPosition="handleSetPosition"
            @swipe="handleSwipe"
            @lazyLoaded="handleLazyLoaded"
            @lazyLoadError="handleLazeLoadError">
        <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
        <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
        <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
        <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
        <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
        <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
    </slick>
</template>
<style lang="scss">
    @import "~/node_modules/slick-carousel/slick/slick.css";
</style>
<script>
    import AppLogo from '~/components/AppLogo.vue';
    export default {
        components: {
            AppLogo,
        },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                    // Any other options that can be got from plugin documentation
                },
            };
        },
        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },

            // Events listeners
            handleAfterChange(event, slick, currentSlide) {
                console.log('handleAfterChange', event, slick, currentSlide);
            },
            handleBeforeChange(event, slick, currentSlide, nextSlide) {
                console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
            },
            handleBreakpoint(event, slick, breakpoint) {
                console.log('handleBreakpoint', event, slick, breakpoint);
            },
            handleDestroy(event, slick) {
                console.log('handleDestroy', event, slick);
            },
            handleEdge(event, slick, direction) {
                console.log('handleEdge', event, slick, direction);
            },
            handleInit(event, slick) {
                console.log('handleInit', event, slick);
            },
            handleReInit(event, slick) {
                console.log('handleReInit', event, slick);
            },
            handleSetPosition(event, slick) {
                console.log('handleSetPosition', event, slick);
            },
            handleSwipe(event, slick, direction) {
                console.log('handleSwipe', event, slick, direction);
            },
            handleLazyLoaded(event, slick, image, imageSource) {
                console.log('handleLazyLoaded', event, slick, image, imageSource);
            },
            handleLazeLoadError(event, slick, image, imageSource) {
                console.log('handleLazeLoadError', event, slick, image, imageSource);
            },
        },

    }
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
