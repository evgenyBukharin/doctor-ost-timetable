import { createStore } from 'vuex';

export default createStore({
    state: {
        citiesList: [
            'Алматы',
            'Челябинск',
            'Екатеринбург',
            'Нижний Новгород',
            'Казань',
            'Краснодар',
            'Красноярск',
            'Новосибирск',
            'Пермь',
            'Самара',
            'Тюмень',
            'Уфа',
        ],
        currentCity: 'Екатеринбург',
        currentFillialToggler: 'ДокторОст',
        currentPeriod: '7',
        doctorsList: [
            {
                title: 'Кузина Оксана Владимировна',
                job: 'Невролог, рефлексотерапевт, цефалголог, гирудотерапевт',
                isOnline: false,
                isDoctor: true,
            },
            {
                title: 'Максимова Татьяна Петровна',
                job: 'Главный врач, невролог высшей категории',
                isOnline: true,
                isDoctor: true,
            },
            {
                title: 'Логвинова Светлана Васильевна',
                job: 'Невролог первой категории, рефлексотерапевт',
                isOnline: true,
                isDoctor: true,
            },
            {
                title: 'Самонова Наталья Анатольевна',
                job: 'Невролог первой категории, рефлексотерапевт',
                isOnline: true,
                isDoctor: true,
            },
            {
                title: 'Самонова Наталья Анатольевна',
                job: 'Невролог первой категории, рефлексотерапевт',
                isOnline: true,
                isDoctor: true,
            },
            {
                title: 'Самонова Наталья Анатольевна',
                job: 'Невролог первой категории, рефлексотерапевт',
                isOnline: true,
                isDoctor: true,
            },
            {
                image: require('../assets/img/cabinet-icon-1.svg'),
                title: '303 кабинет',
                job: 'Процедурный',
                isDoctor: false,
            },
            {
                image: require('../assets/img/cabinet-icon-2.svg'),
                title: '305 кабинет',
                job: 'Массажный',
                isDoctor: false,
            },
            {
                image: require('../assets/img/cabinet-icon-2.svg'),
                title: '305 кабинет',
                job: 'Массажный',
                isDoctor: false,
            },
            {
                image: require('../assets/img/cabinet-icon-2.svg'),
                title: '305 кабинет',
                job: 'Массажный',
                isDoctor: false,
            },
            {
                image: require('../assets/img/cabinet-icon-2.svg'),
                title: '305 кабинет',
                job: 'Массажный',
                isDoctor: false,
            },
            {
                image: require('../assets/img/cabinet-icon-2.svg'),
                title: '305 кабинет',
                job: 'Массажный',
                isDoctor: false,
            },
            {
                image: require('../assets/img/cabinet-icon-2.svg'),
                title: '305 кабинет',
                job: 'Массажный',
                isDoctor: false,
            },
        ],
        activeItemIndex: null,
    },
    getters: {},
    mutations: {
        updateCurrentFillial(state, newFillial) {
            state.currentFillialToggler = newFillial;
        },
        updateCurrentPeriod(state, newPeriod) {
            state.currentPeriod = newPeriod;
        },
        changeActiveItemIndex(state, idx) {
            state.activeItemIndex = idx;
        },
    },
    actions: {},
    modules: {},
});
