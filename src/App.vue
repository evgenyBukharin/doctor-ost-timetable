<template>
    <div class="timetable__container">
        <div class="timetable__content">
            <Header></Header>
            <div class="timetable__flex">
                <TimetableColumn />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import TimetableColumn from './components/TimetableColumn.vue';

export default {
    name: 'App',
    components: { Header, TimetableColumn },
};
</script>

<style lang="scss">
html {
    box-sizing: border-box;
}
*,
*::before,
*::after {
    box-sizing: inherit;
}
:root {
    --font-family: 'Montserrat', sans-serif;
    --white-color: #fff;
    --grey-color: #eee;
    --dark-grey-color: #ececec;
    --black-color: #000;
    --blue-color: #299b9c;
    --orange-color: #e15335;
}
body {
    background: var(--grey-color);
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: var(--font-family, sans-serif);
}
.timetable {
    &__container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;
        padding-top: 80px;
    }
    &__content {
        background: var(--white-color);
        border-radius: 25px;
        padding: 50px;
        padding-bottom: 41px;
    }
}
.list-reset {
    list-style: none;
    margin: 0;
    padding: 0;
}
@font-face {
    font-family: Montserrat;
    src: url(./assets/fonts/Montserrat-Regular.woff2) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: Montserrat;
    src: url(./assets/fonts/Montserrat-Medium.woff2) format('woff2');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: Montserrat;
    src: url(./assets/fonts/Montserrat-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: Montserrat;
    src: url(./assets/fonts/Montserrat-Bold.woff2) format('woff2');
    font-weight: 700;
    font-display: swap;
    font-style: bold;
}
@font-face {
    font-family: 'Open Sans';
    src: url(./assets/fonts/OpenSans-Regular.woff2) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: 'Open Sans';
    src: url(./assets/fonts/OpenSans-SemiBold.woff2) format('woff2');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
}
</style>
