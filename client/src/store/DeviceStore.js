import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { 
                id: 1,
                name: 'Смартфоны'
            },
            {
                id: 2,
                name: 'Пылесосы'
            }
        ]
        this._brands = [
            { 
                id: 1,
                name: 'Honor'
            },
            {
                id: 2,
                name: 'Apple'
            }
        ]
        this._devices = [
            { id: 1, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 2, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 3, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 4, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 5, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    
    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get Types() {
        return this._types
    }

    get Brands() {
        return this._brands
    }

    get Devices() {
        return this._devices
    }
}