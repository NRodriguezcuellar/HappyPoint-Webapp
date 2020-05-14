<template>
    <div class="home">
        <value-prop text="Don't waste your valuable time"></value-prop>
        <full-width-banner></full-width-banner>
        <download-section text="Soon available on iOS and Android"></download-section>
    </div>
</template>

<script>
    // @ is an alias to /src


    import ValueProp from "../components/valueProp";
    import FullWidthBanner from "../components/fullWidthBanner";
    import DownloadSection from "../components/downloadSection";

    export default {
        name: "Home",
        components: {DownloadSection, FullWidthBanner, ValueProp}
    };
</script>
