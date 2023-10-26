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
        currentPeriod: 14,
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
        currentTimetable: [
            {
                time: '8:00',
                days: ['24.10.2023', '01.11.2023', '29.10.2023'],
            },
            {
                time: '9:00',
                days: ['25.10.2023', '26.10.2023', '28.10.2023', '13.10.2023'],
            },
            {
                time: '10:00',
                days: ['30.10.2023', '31.10.2023', '28.10.2023'],
            },
            {
                time: '11:00',
                days: ['05.11.2023', '07.11.2023', '28.10.2023'],
            },
            {
                time: '12:00',
                days: ['25.10.2023', '26.10.2023', '28.10.2023'],
            },
            {
                time: '13:00',
                days: ['25.10.2023', '26.10.2023', '28.10.2023'],
            },
            {
                time: '14:00',
                days: ['30.10.2023', '03.11.2023', '28.10.2023'],
            },
            {
                time: '15:00',
                days: ['25.10.2023', '26.10.2023', '04.11.2023'],
            },
            {
                time: '16:00',
                days: ['25.10.2023', '26.10.2023', '28.10.2023'],
            },
            {
                time: '17:00',
                days: ['02.11.2023', '26.10.2023', '04.11.2023'],
            },
            {
                time: '18:00',
                days: ['31.10.2023', '26.10.2023', '28.10.2023', '10.11.2023'],
            },
            {
                time: '19:00',
                days: ['25.10.2023', '26.10.2023', '28.10.2023'],
            },
            {
                time: '20:00',
                days: ['31.10.2023', '26.10.2023', '04.11.2023'],
            },
            {
                time: '21:00',
                days: ['31.10.2023', '26.10.2023', '28.10.2023'],
            },
            {
                time: '22:00',
                days: ['31.10.2023', '26.10.2023', '04.11.2023'],
            },
        ],
        userSelectedCells: [],
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
        addUserSelectedCell(state, cell) {
            state.userSelectedCells.push(cell);
        },
        removeUserSelectedCell(state, clickedCell) {
            let index = state.userSelectedCells.findIndex((cell) => {
                return cell.time == clickedCell.time && cell.day == clickedCell.day;
            });
            state.userSelectedCells.splice(index, 1);
        },
        setNewVisiblePeriod(state, array) {
            state.visiblePeriod = array;
        },
    },
    actions: {},
    modules: {},
});
